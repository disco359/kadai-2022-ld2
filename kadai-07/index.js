class Animal{
    constructor() {
        this.energy = 100
    }
    eat() {
        this.energy + 10
    }
}

class Cat extends Animal {
    speak() {
        console.log("meow")
    }
}
const cat = 

console.log((new Animal()))