import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', ProductRoutes);
app.use('/api', OrderRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Server is running');
};

app.get('/', getAController);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not Found!',
  });
});

export default app;
