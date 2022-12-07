class Person {
    constructor(name){
        console.log("コンストラクタが実行されました")
        this.name = name
        this.age = age
    }
}
const tanaka =new Person("田中", 31)
const yamada =new Person("山田", 25)
console.log(tanaka)
console.log(yamada)

class Character {
    constructor(name, energy, magic) {
        this.name = name
        this,energy = energy
        this.magic = magic
    }
}
const main = new Character("主人公", 100, 50)
const nakama1 = new Character("仲間1", 150, 10)
const nakama2 = new Character("仲間2", 50, 150)