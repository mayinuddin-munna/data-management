import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import OrdersSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    // Data validation using zod
    const zodParseData = OrdersSchema.parse(order);

    const result = await OrderServices.createOrderIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Order is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query as { email?: string };
    const result = await OrderServices.getAllOrdersFromDB(email);

    res.status(200).json({
      success: true,
      message: 'Order are retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
