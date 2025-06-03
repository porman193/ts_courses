let unknownVar : unknown;
unknownVar = 'hello'; // string
unknownVar = 42; // number
unknownVar = true; // boolean
unknownVar = { name: 'John' }; // object
unknownVar = [1, 2, 3]; // array

if(typeof(unknownVar) === 'string') {
    console.log(unknownVar.toUpperCase()); // Works because we checked the type
}