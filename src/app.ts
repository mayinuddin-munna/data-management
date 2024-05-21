import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/products', ProductRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Server is running');
};

app.get('/', getAController);

export default app;
