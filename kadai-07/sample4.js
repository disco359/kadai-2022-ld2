class Person {
    get name () {
        console.log("getter を実行中")
        return this._name
    }
    set name (value) {
        if(typeof value)

        console.log("getter を実行中")
        this._name = value
    }
}

const person = new Person()
person.name = true
console.log(person.name)
console.log(person._name)