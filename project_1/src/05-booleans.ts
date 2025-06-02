(()=>{
  let isEnable = true;

  let isAvailable: boolean = false;
  isAvailable = true;
  console.log(isAvailable);

  const randomValue = Math.random();
  console.log(randomValue);
  isAvailable = randomValue > 0.5;
  console.log(isAvailable);
})()