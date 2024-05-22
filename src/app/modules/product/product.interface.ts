export type Variant = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Products = {
  name: string;
  description: string;
  price: string;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
