function parseString(input: string): string[];
function parseString(input: string[]): string;

function parseString(input: string | string[]): string|string[]{
  if(Array.isArray(input)) {
    return input.join('');
  }else{
    return [...input];
  }
}

console.log(parseString("hello world")); // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
console.log(parseString(["h","e","l","l","o"]));