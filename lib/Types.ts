export type UserInfo = {
  _id?: string;
  id: string;
  __v?: number;
  email: string;
  onboarded: boolean;
  orders: string;
  address: string;
  phoneNumber: string;
  roles: Roles;
};

export type Roles = {
  Admin: string;
  Editor: string;
  User: string;
};

export type ProductType = {
  title: string;
  code: number;
  description?: string;
  price: number;
  size: string;
  category: string;
  stock?: number;
  thumbnail: string;
  images: string[];
};
