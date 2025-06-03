import { addProduct,products } from "./products/product.service";
import { Product } from "./products/products.model";
import { faker}  from "@faker-js/faker";

for (let index = 0; index < 50; index++) {

  addProduct(
    {
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      categoryId: faker.string.uuid(),
      stock: faker.number.int({ min: 1, max: 100 }),
      imageUrl: faker.image.url(),
      rating: parseFloat(faker.number.float({ min: 0, max: 5 }).toFixed(1)),
      isAvailable: faker.datatype.boolean(),
    }
  );
}

console.log(products);
