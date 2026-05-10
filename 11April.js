//task

// let day = "Monday"

//Monday, Tues, Wed = "Sad"
//Thus, Fri = "Happy"
//Sat, Sun = "Supper Happy"

let day = "Saturday"

// if( day == "Monday" || day == "Tuesday" || day == "Wednesday" ){
//     console.log("sad")
// }
// else if( day == "Thursday" || day == "Friday" ){
//     console.log("Happy")
// }
// else if(day == "Saturday" || day == "Sunday" ){
//     console.log("Supper Happy")
// }

//Switch

// switch(day){
//     case "Monday":
//          console.log("Sad")
//          break;
//     case "Tuesday":
//          console.log("Sad")
//          break;

//     case "Wednesday":
//          console.log("Sad")
//          break;

//     case "Thursday":
//          console.log("Happy")
//          break;

//     case "Friday":
//          console.log("Happy")
//          break;

//     case "Saturday":
//          console.log("Super Happy")
//          break;

//     case "Sunday":
//          console.log("Super Happy")
//          break;

//     default: console.log("I don't know")
// }

/// ----------------------------------- LOOPS ----------------------------------------

// for(let num = 1 ; num <= 100 ; num++){
//     console.log(num)
// }

let fruits = ["Mango", "Banana", "Pineapple", "Grapes", "Apple"]

// 0 -> 4

// Use cases 

// To access Arrays

// for (let idx = 0; idx <= 4; idx++) {
//     //idx = 4
//     console.log(fruits[idx])
// }


// TO run loops n times

// for (let date = 1; date <= 30; date++) {
//     if (date >= 25 && date <= 30) {
//         console.log("I am Happy")
//     } else {
//         console.log("I am not Happy")
//     }
// }

//divisible
// % -> remainder
// if we divide odd number with 2 then remainder will always be 1 else it will be 0
// so if remainder is 1 -> odd number
// else it is even number

// range -> 10 - 20
// if number is odd -> print odd
// if number is even -> print even

// console.log( 46%2 )

// for (let range = 1; range <= 20; range++) {

//     console.log(range % 2)

//     if (range % 2 == 0) {
//         console.log("even")
//     }
//     else {
//         console.log("odd")
//     }
// }


//task 
let names = ["Bhavesh", "Sonali", "Komal", "Alisha", "Gulshan"]

//names[0] = "Bhavesh"
//names[1] = "Sonali"

//Welcome Bhavesh
//Welcome Sonali

//Welcome names[0]
//Welcome names[1]
//Welcome names[2]
//Welcome names[3]

// let idx = 2
// console.log("Welcome " + names[idx])

// for( let idx = 0 ; idx <= names.length - 1; idx++){
//     // console.log(idx)
//     console.log("Welcome", names[idx])
// }

//task

// let nums = [1,10,3,20,4,32,23]

// let odd = 0;
// let even = 0;

// for( let idx = 0; idx < nums.length ; idx++ ){
//     sum = sum + nums[idx]
// }

// console.log(odd)
// console.log(even)

// let nums = [1,10,3,20,4,32,23]

// let odd = 0
// let even = 0

// for(let idx = 0 ; idx < nums.length ; idx++){

//     let arrValue = nums[idx];
//     if( arrValue%2 == 0 ){
//         //if value is even
//         even = even + arrValue;

//     }else{
//         //if value is odd
//         odd = odd + arrValue;
//     }
// }

// console.log(odd)
// console.log(even)