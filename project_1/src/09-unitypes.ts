(()=>{
  let mixedVar : (string | number | boolean) = 'Hello';
  console.log(mixedVar);

  function greeting(myText :(string|number)){
      if(typeof myText === 'string') {
          console.log(`String value: ${myText.toUpperCase()}`);
      }
      else if(typeof myText === 'number') {
          console.log(`Number value: ${myText}`);
      }
  }
  greeting('Hello World');
  greeting(42);

})();