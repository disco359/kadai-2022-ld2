const a = {
    x: 1,
    y: 2,
}
const b = a
console.log("a", a)
console.log("b", b)
b.x = 10
console.log("b", b)
console.log("a", a)

const name1 = "たま"
console.log(name1)
let name2 = name1
console.log(name2)
name2 = "ぽち"
console.log(name2)
console.log(name1)

const arr1 = ["たま", "ぽち", "みけ"]

const func1 = () => {console.log("Hello")}
func1()
const func2 = func1
func2()