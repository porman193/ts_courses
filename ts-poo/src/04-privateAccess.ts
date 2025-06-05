

export class MyDate{
    private year: number;
    private month: number;
    private day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public printFortmat():string {
        return `${this.addPading(this.day)}/${this.month}/${this.year}`;
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
// date.year = 2024; // Error: Property 'year' is private and only accessible within class 'MyDate'.
// date.month = 12; // Error: Property 'month' is private and only accessible within class 'MyDate'.
// date.day = 15; // Error: Property 'day' is private and only accessible within class 'MyDate'.