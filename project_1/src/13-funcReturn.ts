(()=>{
  const total = (prices: number []) : number =>{
    let total = 0;
    prices.forEach((price) => {
      total += price;
    }
    );
    return total;
  }

  let result = total([1,2,3,4,5]);
  console.log(result);

  const voidFunction = (name: string): void => {
    console.log(`Hello ${name}`);
  }
})()