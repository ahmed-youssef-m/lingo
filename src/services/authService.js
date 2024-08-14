import pkg from 'bcryptjs';
import signModule from 'jsonwebtoken';
// import { User } from '../models/User.js';
// import readJsonFile from '../utils/fileUtils.js'
// import writeJsonFile from '../utils/fileUtils.js'
import { jwtSecret } from '../config/config.js';

const { compare, hash } = pkg;
const { sign } = signModule;

let nextUserId = 1;

export function createUser(users, userData) {
  // const newUser = new User(nextUserId++, userData.username, userData.email, userData.password);
  // users.push(newUser);
  // return newUser;
}

export async function login(users, userData) {
  const { email, password } = userData;
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) throw new Error('Invalid username or email combination');

  const isMatch = await compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password combination');

  const token = sign({ id: user.id }, jwtSecret, { expiresIn: '1h' });
  return token;
}

export async function register(users, userData) {
  const { username, email, password } = userData;
  const userExists = users.find(u => u.email.toLowerCase() === email.toLowerCase() || u.username.toLowerCase() === username.toLowerCase());
  if (userExists) throw new Error('Username or email already exists');

  const hashedPassword = await hash(password, 10);
  const newUser = new User(nextUserId++, username, email, hashedPassword);
  users.push(newUser);
  return newUser;
}
