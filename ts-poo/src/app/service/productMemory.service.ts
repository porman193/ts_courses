import { Product } from "../models/product.model"
//import { ProductService } from "../models/productService.interface"
import {CreateProductDto,UpdateProductDto} from "../dto/product.dto"
import { faker}  from "@faker-js/faker";


export class ProductMemoryService  {

  private products: Product[] = [];

  add (product: Product) : Product {
    this.products.push(product);
    return product;
  }

  create (product:CreateProductDto) : Product {
    const newProduct: Product = {
      ...product,
      id: faker.number.int({ min: 1, max: 10000 }),
      creationAt:faker.date.recent().toString(),
      updatedAt:faker.date.recent().toString(),
      category: {
        id: product.categoryId,
        name: faker.commerce.department(),
        creationAt: faker.date.recent().toString(),
        updatedAt: faker.date.recent().toString(),
        image: faker.image.url(),
        slug: faker.lorem.slug(),
      }
  
    }
    this.add(newProduct);
    return newProduct;
  }

 update  (id: number, product: UpdateProductDto) : Product | null  {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      return null;
    }
  
    const updatedProduct: Product = {
      ...this.products[index],
      ...product,
      updatedAt: faker.date.recent().toString(),
    };
  
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  findById (id: number) : Product | null {
    return this.products.find(p => p.id === id) || null;
  }

  getAll () : Product[] {
    return this.products;
  }
  
}








