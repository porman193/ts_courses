

export class MyDate{

    constructor(private year: number = 2001, private month: number = 11, private day: number = 25) {
    
    }

    public printFortmat():string {
        return `${this.addPading(this.day)}/${this.addPading(this.month)}/${this.year}`;
    }

    private addPading(value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    }

    public add(amount :number,type:'days' | 'months' | 'years'): void {
        if (type === 'days') {
            this.day += amount;
        } else if (type === 'months') {
            this.month += amount;
            if (this.month > 12) {
                this.year += Math.floor(this.month / 12);
                this.month = this.month % 12;
            }
        } else if (type === 'years') {
            this.year += amount;
        }

    }
}
 const date = new MyDate(2023, 10, 1);
console.log(date.printFortmat()); // 1/10/2023
date.add(1, 'days');
console.log(date.printFortmat()); // 2/10/2023
