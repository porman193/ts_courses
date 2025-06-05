import { Category } from './category.model';

export interface Product {
    id: number
    title: string
    slug: string
    price: number
    description: string
    category: Category
    images: string[]
    creationAt: string
    updatedAt: string
  }
  
  