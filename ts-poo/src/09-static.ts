class myMath{
    static readonly PI = 3.14;

    static max(...arg: number[]){
        if (arg.length === 0) {
            throw new Error('At least one argument is required');
        }
        return arg.reduce((max, current) => current > max ? current : max, arg[0]);
    }
}

console.log(myMath.PI); // 3.14
console.log(myMath.max(-1, -2, -3, -4, -0.5)); // -1