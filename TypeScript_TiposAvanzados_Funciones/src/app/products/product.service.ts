import { Product } from "./products.model"
import {CreateProductDto,UpdateProductDto,FindProductDto} from "./product.dto"
import { faker}  from "@faker-js/faker";

export const products: Product[] = [];

export const addProduct = (product:CreateProductDto) : Product => {
  const newProduct: Product = {
    ...product,
    id: faker.string.uuid(),
    createdAt:faker.date.recent(),
    updatedAt:faker.date.recent(),
    category: {
      id: product.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }

  }
  products.push(newProduct);
  return newProduct;
}


export const updateProduct = (id: string, product: UpdateProductDto) : Product | null => {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return null;
  }

  const updatedProduct: Product = {
    ...products[index],
    ...product,
    updatedAt: faker.date.recent(),
  };

  products[index] = updatedProduct;
  return updatedProduct;
}


export const findProductsById = (FindProductDto : FindProductDto): Product[] | null => {
  return products.filter(product => {
    return Object.entries(FindProductDto).every(([key, value]) => {
      if (key === 'categoryId') {
        return product.category.id === value;
      }
      return product[key as keyof Product] === value;
    });
  }
  ) || null;
}