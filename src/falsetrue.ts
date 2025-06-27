const bananas = 3
const apples = 0

const numberOfBananaOrApples = bananas || apples

console.log(numberOfBananaOrApples); // output adalah 3 karena bananas mempunyai  nilai 3 sedangkan apples bernilai 0 yang di anggap false

const pears = 0
const oranges = 4

const numberOfPearsOrOranges = pears || oranges
console.log(numberOfPearsOrOranges); // output adalah 4 karena pears bernilai 0 maka akan di lewati dan cek apakah oranges mempunyai nilai

// jika nilai sama sama 0 maka akan keluar output 0

const mango = 3;
const melon = 0;

const atLeastOne = !!mango || !!melon;
console.log(atLeastOne); // Outputnya akan true karena menggunakan !! operator yang memaksa variable menjadi boolean dan 3 lebih besar dari 0 makan outputnya true