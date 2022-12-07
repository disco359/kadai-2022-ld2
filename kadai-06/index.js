const fs =require('fs')
const { json } = require('stream/consumers')
const data = fs.readFileSync('./kadai-06/data.json').toString()
//console.log(data)

let object
try{
    object = JSON.parse(json)
}catch (error) {
    console.log('不正な　JSONフォーマットです')
    process.exit(1)
}

object.count = object.count + 1
object.updateAt = new Date().toISOString()
fs.writeFileSync(
    './kadai-06/data.json',
    
)