import express from 'express';
import jsonModule from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import HomeRoutes from './routes/HomeRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

const { json } = jsonModule;

const app = express();

app.use(helmet());
app.use(cors());
app.use(json());
app.use(morgan('tiny'));

app.use('/api/auth', authRoutes);
app.use('/', HomeRoutes);
app.use(errorMiddleware);

export function listen(port) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`http://localhost:${port}`);
  });
}

export default app;