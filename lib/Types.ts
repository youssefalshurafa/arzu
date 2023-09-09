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
  code: string;
  description?: string;
  price: string;
  size: string;
  category: string;
  stock?: string;
  thumbnail: string;
  images: string[];
};

export type Res = {
  key: string;
  url: string;
};
