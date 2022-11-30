//try{
console.log(1)
throw new Error("ダミーのエラー")
console.log(2)
}

const 成績計算　= (input) => {
    if (typeof input !== "number") {
     throw new Error('不正な入力です。入力は数字である必要がありますが、文字列が与えられました。')   
    }
}