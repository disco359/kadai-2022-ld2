//class Animal {
//    constructor(name){
//      this.name = name
//    }
//    category = "animal"
//}

//class Cat extends Animal {
//    call(){
//        console.log("meow")
//    }
//}

//class Dog extends Animal {
//    call(){
//        console.log("bow")
//    }
//}

//const tama = new

class Person {
    constructor(name){
        this.name = name
    }
    hello() {
        console.log("こんにちは　私は" + this.name + "です。学生です。")
    }
}

class Student extends Person {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log("こんにちは　私は" + this.name + "です。学生です。")
    }
}

class Student extends Person {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    hello() {
        
    }