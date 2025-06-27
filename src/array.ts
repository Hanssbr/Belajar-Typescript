let names: string[] = ["Jhon", "Doe", "Bob"]; // Bisa menggunakan typedata[]
let ids: Array<number> = [2, 3, 4, 5, 6] // Bisa menggunakan Array<type data>

console.log(names);
console.log(ids);
// Push() menambahkan 1 atau lebih elemen di akhir
// unshift() menambahkan 1 atau lebih elemen di awal
// pop() menghapus elemen terakhir
// shift() menghapus elemen pertama

let colors: string[] = ["red", "blue"];

colors.push("yellow");
colors.unshift("green");
// colors.pop();
// colors.shift();
colors.splice(3, 3) // cara menghapus isi array dengan spesifik splice(start index, nomer index yang di hapus)

console.log();

console.log(colors);


let cars: string[] = ["Pajero", "Lamborgini", "BMW", "Pagani"];

console.log(cars[2])
cars[2] = "Ferrari"; // Bisa di edit melalui nomer index

console.log(cars);

let pets: string[] = ["fish", "cat", "dog"];
console.log( pets.indexOf("fish")); // Untuk cek di nomer index berapa elemen tersebut
console.log(pets.indexOf("dog"));
console.log(pets.includes("tiger")); // Untuk cek ada kah elemen tersebut


let digits: number[] = [1, 2, 3, 4, 5, 6];
let menus: string[] = ["Nasi Goreng", "Bakso", "Cap jay"]
console.log(digits.length); // cek berapakah jumlah dari elemen dalam array
console.log(menus.length);