function add(a: number, b: number){
    return a + b;
}; // membuat function menggunakan type number

const arrow = (a: number, b: number): number => {
    return a + b
} // function bisa dibuat menggunakan variable

const arrowShort = (a: number, b: number): number => a + b // Bisa tanpa braces '{}'

console.log(arrowShort(2, 2));

console.log(arrow(1, 2));

console.log(add(10, 9));