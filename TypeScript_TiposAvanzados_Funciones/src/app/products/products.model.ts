import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";


export interface Product extends BaseModel {
  name: string;
  price: number;
  description: string; // Optional property
  category: Category; // Optional property
  stock: number; // Optional property
  imageUrl: string; // Optional property
  rating: number; // Optional property
  isAvailable: boolean; // Optional property
}



