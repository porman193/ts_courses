import { es } from '@faker-js/faker/.';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

export interface CreateProductDto extends Omit<Product, 'id' |'category'|'creationAt'|'updatedAt'> {
  categoryId: Category['id'];
}


export interface UpdateProductDto extends Partial<CreateProductDto> {
}
