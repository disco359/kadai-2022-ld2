let sum1 = 0
let sum2 = 0

for (let number = 2; number <= 10000; number++){
    let isPrime = true
for (let yakusu  = 2; yakusu < number; yakusu++) {
    if(number % yakusu === 0){
        isPrime = false
        //console.log(number,'は',yakusu,'で割り切れるので素数ではありません')
        break
    }
}
if(isPrime){
    console.log(number,'は素数です')
    if(number % 3 === 1){
        sum1 = sum1 + number
    }
    if(number % 3 === 2){
        sum2 = sum2 + number
    }
}
   
}
console.log(sum1)
console.log(sum2)