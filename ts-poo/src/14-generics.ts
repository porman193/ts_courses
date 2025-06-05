function getValue<T> (value:T):T{
    return value;
}

getValue(10); // number
getValue('Hello'); // string
getValue(true); // boolean
getValue({ name: 'John' }); // object
getValue([1, 2, 3]); // array of numbers
getValue({ name: 'John', age: 30 }); // object with multiple properties
getValue<string>('Hello'); // explicitly specifying type
getValue<number[]>([1, 2, 3]); // explicitly specifying array of numbers
getValue<{ name: string, age: number }>({ name: 'John', age: 30 }); // explicitly specifying object type
getValue<null>(null); // explicitly specifying null type