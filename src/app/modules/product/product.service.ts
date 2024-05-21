import { DataModel } from './product.model';
import { Data } from './product.interface';

const createDataIntoDB = async (data: Data) => {
  const result = await DataModel.create(data);
  return result;
};

const getAllDataFromDB = async () => {
  const result = await DataModel.find();
  return result;
};

const getSingleDataFromDB = async (id: string) => {
  const result = await DataModel.findOne({ id });
  return result;
};

export const ProductServices = {
  createDataIntoDB,
  getAllDataFromDB,
  getSingleDataFromDB,
};
