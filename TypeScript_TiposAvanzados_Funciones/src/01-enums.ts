export enum ROLES {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  GUEST = 'guest',

}

export type User = {
  username: string;
  role: ROLES;
};

const user12: User = {
  username: 'john_doe',
  role: ROLES.ADMIN,
};