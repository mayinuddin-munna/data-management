import { z } from 'zod';

const inventoryValidationSchema = z.object({
  quantity: z.number().min(0),
  inStock: z.boolean(),
});

const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const productsValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export default productsValidationSchema;
