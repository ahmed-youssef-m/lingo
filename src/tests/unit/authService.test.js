import { register, login } from '../../src/services/authService';
import { User } from '../../src/models';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

jest.mock('../../src/models');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('AuthService Unit Tests', () => {
  describe('register', () => {
    it('should create a new user', async () => {
      const data = { username: 'testuser', email: 'test@example.com', password: 'password123' };
      User.findOne.mockResolvedValue(null);
      hash.mockResolvedValue('hashedPassword');
      User.prototype.save = jest.fn().mockResolvedValue(data);

      const result = await register(data);

      expect(result).toEqual(data);
      expect(User.findOne).toHaveBeenCalledWith({ email: data.email });
      expect(hash).toHaveBeenCalledWith(data.password, 10);
      expect(User.prototype.save).toHaveBeenCalled();
    });

    it('should throw error if user already exists', async () => {
      const data = { username: 'testuser', email: 'test@example.com', password: 'password123' };
      User.findOne.mockResolvedValue(data);

      await expect(register(data)).rejects.toThrow('User already exists');
      expect(User.findOne).toHaveBeenCalledWith({ email: data.email });
    });
  });

  describe('login', () => {
    it('should return token if credentials are valid', async () => {
      const data = { email: 'test@example.com', password: 'password123' };
      const user = { _id: 'userId', email: 'test@example.com', password: 'hashedPassword' };
      User.findOne.mockResolvedValue(user);
      compare.mockResolvedValue(true);
      sign.mockReturnValue('token');

      const result = await login(data);

      expect(result).toEqual('token');
      expect(User.findOne).toHaveBeenCalledWith({ email: data.email });
      expect(compare).toHaveBeenCalledWith(data.password, user.password);
      expect(sign).toHaveBeenCalledWith({ id: user._id }, expect.any(String), { expiresIn: '1h' });
    });

    it('should throw error if credentials are invalid', async () => {
      const data = { email: 'test@example.com', password: 'password123' };
      User.findOne.mockResolvedValue(null);

      await expect(login(data)).rejects.toThrow('Invalid credentials');
      expect(User.findOne).toHaveBeenCalledWith({ email: data.email });
    });
  });
});
