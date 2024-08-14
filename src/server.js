import { listen } from './app.js';
import { port } from './config/config.js';
import './config/db.js';

const PORT = port;

listen(PORT);