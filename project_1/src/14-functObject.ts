(()=>{

  const login = (data :{user:string,password:string}): boolean => {
    console.log(`User: ${data.user}, Password: ${data.password}`);
    return true;
  }

  login({
    user:"john_doe",
    password:"123456"
  });

  const addProduct = (data: {title: string, createdAt: Date, stock?: number}): void => {
    console.log(`Product: ${data.title}, Created At: ${data.createdAt}, Stock: ${data.stock}`);
  }

})()