export enum ROLES {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  GUEST = 'guest',
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: ROLES; // Using the ROLES enum
};