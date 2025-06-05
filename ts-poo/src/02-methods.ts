export class MyDate{
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFortmat():string {
        return `${this.day}/${this.month}/${this.year}`;
    }

    add(amount :number,type:'days' | 'months' | 'years'): void {
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
console.log(date.printFortmat()); // 2023/10/1
date.add(1, 'days');
console.log(date.printFortmat()); // 6/10/2023