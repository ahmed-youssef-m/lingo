import { register as _register, login as _login } from '../services/authService.js';

export async function register(req, res) {
  try {
    const user = await _register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const token = await _login(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
