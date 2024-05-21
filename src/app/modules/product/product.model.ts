import { Schema, model } from 'mongoose';
import { UserName, Product, Inventory, Data } from './product.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<Product>({
  variants: [
    {
      type: String,
      required: true,
    },
  ],
  inventory: inventorySchema,
});

const dataSchema = new Schema<Data>({
  id: { type: String },
  name: userNameSchema,
  description: { type: String },
  price: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  product: productSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});

export const DataModel = model<Data>('Data', dataSchema);
