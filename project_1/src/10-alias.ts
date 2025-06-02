(()=>{
  type UserId = string | number;

  let userId: UserId = 'user123';

  function greeting(myText :UserId){
    if(typeof myText === 'string') {
        console.log(`String value: ${myText.toUpperCase()}`);
    }
    else if(typeof myText === 'number') {
        console.log(`Number value: ${myText}`);
    }
  }

  type SizeType = 'S' | 'M' | 'L' | 'XL'
  let size: SizeType = 'M';
  size = 'L'; // Valid
  // size = 'XXL'; // Invalid, will cause a TypeScript error
  greeting(userId);

  console.log(`User ID: ${userId}`);
  console.log(`Selected size: ${size}`);

})()