let someValue: any = "This is a string";
let strLength: number = (<string>someValue).length;
let strlengthAs: number = (someValue as string).length;

console.log(strLength);
console.log(strlengthAs);