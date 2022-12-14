class Person {
    constructor(name){
        this.name = name
    }
    hello() {console.log("こんにちは　私は" + this.name + "です。学生です。")
    }
    static hello() {
        console.log("こんにちは")
    }
}

Person.hello