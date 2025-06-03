export const createProduct = (id: number|string, stock: number = 10,isNew:boolean = true ) =>{
  return {
    id,
    stock,
    isNew
  };
}

export const product1 = createProduct(1, 100);
export const product2 = createProduct(2, 50, false);
export const product3 = createProduct('3', 75, true);
export const product4 = createProduct('4', 200, undefined);
export const product6 = createProduct('6', 300, false);
export const product7 = createProduct('7', 400, true);