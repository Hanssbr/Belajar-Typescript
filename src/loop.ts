for (let i = 0; i < 5; i++){
    console.log(i);
} //looping sederhana


const fruits = ['apple', 'banana', 'cherry'];
for(let fruit of fruits){
    console.log(fruit);
} // Untuk mencetak atau loop isi dari fruits satu kali

const person = {
    name: "Jhon",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key, person[key as keyof typeof person]);
} // Untuk melakukan perulangan satu per satu


let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}