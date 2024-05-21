import { Schema, model } from 'mongoose';
import { Product, Inventory, Data } from './product.interface';

const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
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
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [{ type: String, required: true }],
  product: productSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});

export const DataModel = model<Data>('Data', dataSchema);
