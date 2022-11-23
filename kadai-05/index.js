
const profile = {
    name:"山田",
    age:20,
    hobby:"登山",
    major:"地理学",
}

const dictionary = {
    name:"名前",
    age:"年齢",
    hobby:"趣味",
    major:"専攻",
}

console.log("私の名前は" + profile.name + "です")

const key Object.keys(profile)

for (const key of Object.keys(profile))
    console.log(key)