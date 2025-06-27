"use strict";
function add(a, b) {
    return a + b;
}
;
const arrow = (a, b) => {
    return a + b;
};
const arrowShort = (a, b) => a + b;
console.log(arrowShort(2, 2));
console.log(arrow(1, 2));
console.log(add(10, 9));
