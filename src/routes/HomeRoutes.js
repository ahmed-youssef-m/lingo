import { Router } from 'express';
import { logHome } from '../controllers/homeController.js';

const HomeRoutes = Router();

HomeRoutes.get('/',logHome);
HomeRoutes.get('/home',logHome);

export default HomeRoutes;