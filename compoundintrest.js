export function CompoundInterset(principal, rate, n, time){
    let answer = principal * Math.pow((1+ (rate/n)),n*time)
    return answer
}

console.log(CompoundInterset(1000,5,5,2))