import { ProductModel } from './product.model';
import { Products } from './product.interface';

const createProductIntoDB = async (products: Products) => {
  const result = await ProductModel.create(products);
  return result;
};

const getAllProductsFromDB = async (searchTerm?: string) => {
  let result;
  if (searchTerm) {
    result = await ProductModel.find({ searchTerm });
  } else {
    result = await ProductModel.find();
  }
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const updateProductIntoDB = async (_id: string, updateData: Products) => {
  const result = await ProductModel.updateOne({ _id }, { $set: updateData });
  return result;
};

const deleteProductIntoDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductIntoDB,
};
