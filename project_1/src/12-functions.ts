(()=>{

  function createProcuctToJson(title :string,createdAt: Date,stock: number): string {
    return JSON.stringify({
      title,
      createdAt,
      stock
    });

  }

  const arrowFunction = (title: string, createdAt: Date, stock?: number): string => {
    return JSON.stringify({
      title,
      createdAt,
      stock
    });
  }

  const productJson = createProcuctToJson('Laptop', new Date(), 10);
  console.log(productJson);
  const productArrowJson = arrowFunction('Laptop', new Date());
  console.log(productArrowJson);

})()