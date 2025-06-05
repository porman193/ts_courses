class MyDate{
    public year: number;
    public month: number;
    public day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public printFortmat():string {
        return `${this.day}/${this.month}/${this.year}`;
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

export const date = new MyDate(2023, 10, 1);
console.log(date.printFortmat()); // 2023/10/1
date.add(1, 'days');
console.log(date.printFortmat()); // 6/10/2023
date.year = 2024; // Public access allows modification
console.log(date.printFortmat()); // 6/10/2024
date.month = 12; // Public access allows modification      
console.log(date.printFortmat()); // 6/12/2024