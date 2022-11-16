const birds = ["スズメ", "ドバト", "ツバメ", "カモメ"]

birds.forEach((bird)) => {
    const isEndswithメ = bird.endswith("メ")
    console.log(bird, "メで終わる？", isEndswithメ)
}


const result = birds.map((bird)) => {
    const isEndswithメ = bird.endswith("メ")
    return{
        name: bird,
        "メで終わる？", isEndswithメ
    }
}