export abstract class Animal{
    constructor(protected  name: string) {}

    public makeSound(): string {
        return `${this.name} makes a sound`;
    }

    public move(): string {
        return `${this.name} moves`;
    }

    public wave(): string {
        return `${this.name} waves`;
    }
}

export class Dog extends Animal {

    constructor(name: string,public owner?: string) {
        super(name);
    }
    
    public woof(times:number) {
        for (let i = 0; i < times; i++) {
            console.log(`${this.name} says Woof!`);
        }
    }
}


const dog1 = new Dog('Dog1');
console.log(dog1.makeSound()); // Dog1 makes a sound
console.log(dog1.move()); // Dog1 moves
console.log(dog1.wave()); // Dog1 waves
dog1.woof(3); // Dog1 says Woof! (3 times)