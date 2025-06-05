

export class MyDate{

    private _month: number;

    constructor(private year: number = 2001, _month: number = 11, private _day: number = 25) {
        if (!this.isMonthValid(_month)) {
            throw new Error('Month must be between 1 and 12');
        }
        this._month = _month;
    }

    public printFortmat():string {
        return `${this.addPading(this._day)}/${this.addPading(this._month)}/${this.year}`;
    }

    private addPading(value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    }

    public add(amount :number,type:'days' | 'months' | 'years'): void {
        if (type === 'days') {
            this._day += amount;
        } else if (type === 'months') {
            this._month += amount;
            if (this._month > 12) {
                this.year += Math.floor(this._month / 12);
                this._month = this._month % 12;
            }
        } else if (type === 'years') {
            this.year += amount;
        }

    }

    private isMonthValid(month: number): boolean {
        return month >= 1 && month <= 12;
    }

    get day(){
        return this._day;
    }

    get month() {
        return this._month;
    }

    get isLeapYear(): boolean {
        return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    }

    set month(value: number) {
        if (!this.isMonthValid(value)) {
            throw new Error('Month must be between 1 and 12');
        } 
        this._month = value;

    }

}
const date = new MyDate(2023, 12, 1);
console.log(date.printFortmat()); // 1/10/2023
date.add(1, 'days');
console.log(date.printFortmat()); // 2/10/2023
date.day; // 2

console.log(date.isLeapYear); // false

date.month = 11; // Set month to November
console.log(date.printFortmat()); // 1/11/2023

try {
    date.month = 13; // This will throw an error
}
catch (error :any) {   
    console.error(error.message);
}