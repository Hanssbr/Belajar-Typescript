"use strict";
function add(a, b) {
    return a + b;
}
; // membuat function menggunakan type number
const arrow = (a, b) => {
    return a + b;
}; // function bisa dibuat menggunakan variable
const arrowShort = (a, b) => a + b; // Bisa tanpa braces '{}'
console.log(arrowShort(2, 2));
console.log(arrow(1, 2));
console.log(add(10, 9));
