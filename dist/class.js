"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
// kita bisa meng override atau menimpanya menggunakan sub class
// contoh :
class Dog extends Animal {
    speak() {
        console.log(`${this.name} and ${this.age} have a noise guk guk`); // Kita bisa menimpa method speak yang ada di animal
    }
}
class Bird extends Animal {
    test() {
        console.log(`Hello my pet is ${this.name}`);
    }
}
const secDog = new Dog("Blus", 2);
const myDog = new Dog("James", 3);
const myBird = new Bird("Prik", 3);
myDog.speak();
myBird.test();
myBird.speak();
