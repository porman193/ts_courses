(()=>{
  let myDynamic: any;
  myDynamic = 'Hello World';
  console.log(myDynamic);
  myDynamic = 42;
  console.log(myDynamic);
  myDynamic = true;
  console.log(myDynamic);

  const result =(myDynamic as string).toUpperCase();
  console.log(result);
})()