export class MyDate{
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

}

const myDate = new MyDate(2023, 10, 1);
console.log(myDate); 