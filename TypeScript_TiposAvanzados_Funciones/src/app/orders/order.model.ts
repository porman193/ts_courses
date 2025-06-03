import { Product } from '../products/products.model';
import { User } from '../users/user.model';
import { BaseModel } from '../base.model';

export interface Order extends BaseModel {
  createdAt: Date
  products:Product[];
  user: User;
}