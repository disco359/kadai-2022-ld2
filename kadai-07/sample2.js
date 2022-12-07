class Animal {
    constructor(name){
        this.name = name
    }
    category = "animal"
}

class Cat extends Animal {
    call(){
        console.log("meow")
    }
}

class Dog extends Animal {
    call(){
        console.log("bow")
    }
}

const tama = new