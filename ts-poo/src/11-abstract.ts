import {Animal,Dog} from "./08-inheritance";

//const animal1 = new Animal('Animal1'); // Error: Cannot create an instance of an abstract class
//console.log(animal1.makeSound()); // Animal1 makes a sound
//console.log(animal1.move()); // Animal1 moves
//console.log(animal1.wave()); // Animal1 waves

const dog1 = new Dog('Dog1');
console.log(dog1.makeSound()); // Dog1 makes a sound
console.log(dog1.move()); // Dog1 moves
console.log(dog1.wave()); // Dog1 waves
dog1.woof(3); // Dog1 says Woof! (3 times)