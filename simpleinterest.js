let principle =100
let rate = 2
let time = 10

function simpleInterest (principle, rate, time)
{ 
    let answer= principle*time*rate/100
    return answer
}
let result=simpleInterest (100, 2, 10)
console.log(result)
