export class MyService{
    // Singleton pattern
    private static instance: MyService | null = null;
    private constructor(private _name:string){

    }

    get name(): string {
        return this._name;
    } 

    static ceate(name: string) {
        if (!MyService.instance) {
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }
}

const service1 = MyService.ceate('Service1');
const service2 = MyService.ceate('Service2');
console.log(service1.name); // Service1
console.log(service2.name); // Service1
console.log(service1 === service2); // true, both are the same instance