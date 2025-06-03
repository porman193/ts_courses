const withoutEnding = () => {
  while(true){
    console.log("This will run forever");
  }
}

const failingFunction = () => {
  throw new Error("This function always fails");
}