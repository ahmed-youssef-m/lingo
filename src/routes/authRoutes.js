import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import { register as _register, login as _login } from '../validators/authValidator.js';

const authRoutes = Router();

authRoutes.post('/register', _register, register);
authRoutes.post('/login', _login, login);

export default authRoutes;
