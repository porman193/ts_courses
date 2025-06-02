(()=>{
  type Product = {
    title: string;
    createdAt: Date;
    stock?: number;
  };

  let products : Product[] = [];
  const createProductToJson = (product: Product): string => {
    products.push(product);
    return JSON.stringify({
      title: product.title,
      createdAt: product.createdAt,
      stock: product.stock
    });
  };

  const product1: Product = {
    title: 'Laptop',
    createdAt: new Date(),
    stock: 10
  };
  createProductToJson(product1);
})()