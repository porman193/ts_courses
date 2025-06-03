import { es } from '@faker-js/faker/.';
import { Product } from './products.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'|'category'> {
  categoryId: string|number;
}


export interface UpdateProductDto extends Partial<CreateProductDto> {
}

export interface FindProductDto extends Readonly<Partial<Product>> {

}