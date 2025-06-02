import { Product } from "./product.model";

export let products :Product[] = [];

export const addProduct = (product: Product) : void => {
    products.push(product);

}

export const calcStock = (products:Product[]): number => {
   return products.reduce((total, product) => {
       return total + (product.stock || 0);
   }, 0);

}
