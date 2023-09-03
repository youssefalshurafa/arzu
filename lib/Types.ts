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
