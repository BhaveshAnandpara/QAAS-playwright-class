// for loop

// let statusCodes = [ 100, 104, 200, 201, 301, 405, 304, 602, 302, 50 ]

// for( let idx = 0 ; idx < statusCodes.length ; idx++){
//     let arrValue  = statusCodes[idx];

//     // 100-199
//     if( arrValue >= 100 && arrValue < 200 ){
//         console.log("Information")
//     }
//     // 200-299
//     else if( arrValue >= 200 && arrValue < 300 ){
//         console.log("Successfull")
//     }
//     // 300-399
//     else if( arrValue >= 300 && arrValue < 400 ){
//         console.log("Redirection")
//     }
//     // 400-499
//     else if( arrValue >= 400 && arrValue < 500 ){
//         console.log("Client Error")
//     }
//     // 500-599
//     else if( arrValue >= 500 && arrValue < 600 ){
//         console.log("Server Error")
//     }
//     // 600-699
//     else{
//         console.log("I don't know")
//     }
// }



// ----------------------------------- Functions -----------------------------------

//Api response 1 
//Check if Response is successfull ( it should start with 2 (200-299) )
// let apiResponse1 = 203

// if (isCodeSuccessfull(apiResponse1)) {

//     console.log("API 1 is successfull")

//     //Api response 2
//     //Check if Response is successfull ( it should start with 2 (200-299) )
//     let apiResponse2 = 404

//     if (isCodeSuccessfull(apiResponse2)) {

//         console.log("API 2 is successfull")

//         //Api response 3
//         //Check if Response is successfull ( it should start with 2 (200-299) )
//         let apiResponse3 = 201

//         if (isCodeSuccessfull(apiResponse3)) {

//             console.log("API 3 is successfull")

//             //Api response 4
//             //Check if Response is successfull ( it should start with 2 (200-299) )
//             let apiResponse4 = 200

//             if(isCodeSuccessfull(apiResponse4)){

//                 console.log("API 4 is successfull")

//             }else{
//                 console.log("API 4 is failing")
//             }

//         } else {
//             console.log("API 3 is failing")
//         }



//     } else {
//         console.log("API 2 is failing")
//     }

// } else {
//     console.log("API 1 is failing")
// }

function isCodeSuccessfull(code) {

    if (code >= 200 && code < 300) return true
    else return false

}

//checks if num is even or not
//if num is even return true
//if num is odd return false
function isEven(num) {

    // console.log(`Checking if ${num} is even or not`)

    if (num % 2 == 0) return true
    else return false

}

let nums = [1, 10, 3, 20, 4, 32, 23]

let odd = 0
let even = 0

for (let idx = 0; idx < nums.length; idx++) {

    let arrValue = nums[idx];
    if (isEven(arrValue)) {
        //if value is even
        even = even + arrValue;

    } else {
        //if value is odd
        odd = odd + arrValue;
    }
}

// console.log(odd)
// console.log(even)

let fruits = ["Mango", "Banana", "Pineapple", "Grapes", "Apple"]

function arrayPop(array) {
    array.pop()
    return array;
}

let newArr = arrayPop(fruits)
console.log(newArr)



//Simple Interest
function simpleInterest(principle, rate, time) {
    let answer = principle * rate * 100 / time
    return answer
}

let principle = 10000
let rate = 10
let time = 2

let simpleInt = simpleInterest(10000, 10, 2)
console.log(simpleInt)

//task 
// create a calculator

function calculator(numbers, operation) {

    if (operation === "+") {
        let add = numbers[0] + numbers[1]
        console.log(add)
    }
    else if (operation === "-") {
        let sub = numbers[0] - numbers[1]
        console.log(sub)
    }
    else if (operation === "*") {
        let mul = numbers[0] * numbers[1]
        console.log(mul)
    }
    else if (operation === "/") {
        let div = numbers[0] / numbers[1]
        console.log(div)
    }

}

let numbers1 = [2, 3]
let numbers2 = [22, 34]
let numbers3 = [23, 13]
let operation = "-"

calculator(numbers1, "+")
calculator(numbers2, "-")
calculator(numbers3, "*")

