import { Orders } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (orders: Orders) => {
  const result = await OrderModel.create(orders);
  return result;
};

const getAllOrdersFromDB = async (email?: string) => {
  let result;
  if (email) {
    result = await OrderModel.find({ email });
  } else {
    result = await OrderModel.find();
  }
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
