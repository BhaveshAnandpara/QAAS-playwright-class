//Non pimitives data types
//Arrays
//Object
//Functions


//Array
let name1 = "Bhavesh"
let name2 = "Komal"
let name3 = "Sonali"
let name4 = "Gulshan"

// let names = ["Bhavesh", "Komal", "Sonali", "Gulshan"]
// let marks = [10, 80,90,100]
// let isPersonHungry = [true,false,false,false]

let fruits = ["Mango", "Banana", "Pineapple", "Grapes", "Apple"]
// console.log(fruits[1])
// console.log(fruits)

// fruits.push("Grapes") //Adds the element in the array the end
// console.log(fruits)

// fruits.pop()
// console.log(fruits)

// console.log(fruits.length)
// console.log(fruits.includes("Banana")) // returns true if element is present
// console.log(fruits.includes("Kiwi")) // returns false if element is not present

// console.log(fruits.indexOf("Banana"))


//task
// let user = ["Bhavesh", "Komal", "Sonali", "Gulshan"]

// Add a new user "Bhavesh"
// Check if "Bhavesh" is present in array
// Remove the last user "Bhavesh"
// Again add a new user "Bhavesh"
// Find where is <your name> in the array and print the index


//Object

// let user1 = [ "Bhavesh", 50, "Pune", true ]
// console.log(user1[3])

// let address = "1st lane wardha, Maharashtra"

let newUser = {
    name: "Bhavesh",
    age: 50,
    state: "Pune",
    amIHungry: true,
    skills: ["js", "java", "python"],
    address : {
        lane : "1st lane",
        district : "Wardha"
    }   
}

// console.log(newUser.address.district)
// console.log(Object.keys(newUser))
// console.log(Object.values(newUser))
// console.log(Object.entries(newUser))

//task 
// create a object name response
// it should have status : either success or failure
// it should have message : "Login Successfull" or "Login Failed"
// it should have data : user data

// let response = {
//     status: "success",
//     message: "Login Successfull",
//     data: user
// }

// console.log(response)


// ------------------------------------- CONDITIONALS -------------------------------------

//task 
// if user.age is greater than 18 then print "You are eligible for license" else "You are not eligible for license"

let age = 21

// Operators
// > e.g 21 > 20
// console.log(21>20) // true
// console.log(21<20) // false
// console.log(20<20) // false
// console.log(20>20) // false
// console.log(20==20) // true
// console.log(20>=20) // true
// console.log(20<=20) // true

// if( age > 18 ){
//     console.log("You are eligible for license")
// }
// else{
//     console.log("You are not eligible for license")
// }


let isUserLoggedIn = false

if( isUserLoggedIn ){
    console.log("Welcome")
}

let status = "SDFVfsg" // success, failure, pending
// if status "success" -> "code ran succesfully"
// if status "failure" -> "code gave an error"
// if status "pending" -> "code is still pending"

// if-else
// if(status == "success"){
//     console.log("code ran succesfully")
// }else{
//     console.log("code gave an error")
// }


// if(status == "success"){
//     console.log("code ran succesfully")
// }

// if(status == "failure"){
//     console.log("code gave an error")
// }

// if(status == "pending"){
//     console.log("code is still pending")
// }

//else if

// if(status == "success"){
//     console.log("code ran succesfully")
// }
// else if(status == "failure"){
//     console.log("code gave an error")
// }
// else if(status == "pending"){
//     console.log("code is still pending")
// }else{
//     console.log("I don't know ")
// }

// Operators
// AND 
// OR

// I am software engg and I am from Pune // true and true -> true
// I am software engg and I am from Mumbai // true and false -> false
// I am software engg or I am from Pune // true or true -> true
// I am software engg or I am from Mumbai // true or false -> true
// I am civil engg or I am from Mumbai // false or false -> false

// Computer Logic
// true and true -> true  //if both are true -> true , else return false
// true or false -> true //if any one of them is true -> true , else false

// 18>=18 && 20>=18 //true && true -> true
// 17>=18 && 20>=18 //false && true -> false
// 18>=18 || 20>=18 //true || true -> true
// 17>=18 || 20>=18 //false || true -> true
// 17>=18 || 20<=18 //false || false -> false


// if users marks below and equal to 35 then print "fail" if between 36 and 74 "pass" greater than 74 "distinction"
// let marks = 98

// if( marks <= 35 ){
//     console.log("fail")
// }
// else if( marks >= 36 && marks <= 74 ){
//     console.log("pass")
// }else{
//     console.log("distinction")
// }

// = -> returns the value
// == -> returns true if value is same irrespective of the data type
// === -> returns true if value is same and data type is also same

//task 
// create a calculator
// let numbers = [2,3]
// let operation = "+"

// if(operation === "+"){
//     let add = numbers[0] + numbers[1]
//     console.log(add)
// }
// else if(operation === "-"){
//     let sub = numbers[0] - numbers[1]
//     console.log(sub)
// }
// else if(operation === "*"){
//     let mul = numbers[0] * numbers[1]
//     console.log(mul)
// }
// else if(operation === "/"){
//     let div = numbers[0] / numbers[1]
//     console.log(div)
// }


// Thruthy & Falsy Values

//thruthy valus
// "string" -> normal string is considered true
// number -> number is considered true
// [] -> empty array is considered true
// {} -> empty object is considered true

//falsy values
// 0 -> 0 is always false
// "" -> empyt string is always false
// null or undefined ->  always false
// NaN ->  always false


//Nested If

// let user = {
//     name: "Bhavesh",
//     age: 50,
//     state: "Pune",
//     amIHungry: true,
//     skills: ["js", "java", "python"]
// }

let user;

user = {
    name: "Bhavesh",
    age: 50,
    state: "Pune",
    amIHungry: true,
    skills: ["js", "java", "python"]
}

// console.log(user)

if (user) {
    console.log("User is present")

    if (user.name) {
        // console.log(`Welcome ${user.name}`)

        if (user.age >= 18) {
            console.log(`You are eligible`)
        } else {
            // console.log(`You are not eligible`)
        }

    } else {
        // console.log('Error : User name is not provided')
    }

}
else {
    // console.log("User is not available")
    
    if( user === null ){
        // console.log("User is null")
    }
    else if( user === undefined){
        // console.log("User is undefined")
    }

}