import { ProductModel } from './product.model';
import { Products } from './product.interface';

const createProductIntoDB = async (products: Products) => {
  const result = await ProductModel.create(products);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
};
