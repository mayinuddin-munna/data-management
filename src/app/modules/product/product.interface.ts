export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Variant = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Product = {
  variants: Variant[];
  inventory: Inventory;
};

export type Data = {
  id: string;
  name: UserName;
  description: string;
  price: string;
  category: string;
  tags: string[];
  product: Product[];
  profileImg?: string;
  isActive: 'active' | 'blocked';
};