// interfaces digunakan untuk mendeskripsikan struktur dari objek berupa apa saja

interface Cat {
    name: string;
    age: number;
    vaccinated?: boolean; // diberi "?" jikalau properti tidak wajib di isi
}

const myCat: Cat = {
    name: "Jhon",
    age: 2,
    vaccinated: true
}
const yourCat: Cat = {
    name: "Doe",
    age: 2,
}

console.log(myCat);
console.log(yourCat);
console.log(myCat.name);