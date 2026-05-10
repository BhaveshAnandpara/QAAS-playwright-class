//Single line comment
//The age is dummy age don't take it seriously


//Multi Line comment
/**
 * aSDFdasfdsf
 * sdfsdfsdg
 * sdfsdfsdfg
 * sdfsdfdsf
 * sdfsdfdsf
 */


// ---------------------------------- Variables ----------------------------------

console.log("Bhavesh")

// let name = "Bhavesh";
// let age = 100;

//rules for naming variables

//must start with letter, _ or $
// let address = "Pune"
// let _street = "street 2"
// let $state = "Maharastra"
// let variable1 = "var"

//not allowed
// let @street = "street 2"
// let #street = "street 2"
// let 1street = "street 2"
// let user name = "Bhavesh"
// let user@name = "Bhavesh"

// we cannot use keywords as variable names
// let for = 2;
// let let = 2;
// let if = 2;
// let else = 2;

// case sensitive
// let Age = 100
// let age = 20

// console.log(age)

///////////////////////////////// Imp : Variable names should be valid and meaningful /////////////////////////////////

// let error = "API is successfull"
// console.log(error)


// ---------------------------------- VAR, LET & CONST ----------------------------------

//var
//var allows you to update the value
// not recommended - old & causes bugs
// var name = "Bhavesh"
// name = "Bhavesh Anandpara"

// console.log(name)


//let 
//let allows to udpate the value
// recommended 
// let age = 50
// age = 23

// console.log(age)

//const 
//cannot update
// const default_error_message = "Internal Server Error"
// console.log(default_error_message)

// ---------------------------------- DATA TYPES ----------------------------------

//primitive data types
// String
// Number
// Big Int
// Boolean
// Undefined
// Null
// Symbol

// Strings
let name = "Bhavesh Anandpara"
let address = 'Pune'
let job = `Software Engineer`

// let age = "23"
// console.log(age)

//concatination
// let message = "Hello, my name is " + name + " I am a Software Engg."
// console.log(message)

//task 
// let error = "Your Password is incorrect"
// let category = "UnAuthenticated"

// let response = "Error : [ " + category + " ] : " + error
// console.log(response)

// string literals
// let response = `Error : [${category}] : ${error}` 
// console.log(response)

//task
// output : "Hi My name is _____, I live in _____ and I love ____"

//Numbers
let age = 50
let balance = 10.20 // float (decimal)

// console.log(age)
// console.log(balance)

//operations

//addition
// let num1 = 10
// let num2 = 20
// let add = num1+num2
// let sub = num2-num1
// let mul = num2*num1
// let div = num2/num1

// console.log(add)
// console.log(sub)
// console.log(mul)
// console.log(div)
// console.log(num1**num1)

// let num3 = "20"
// let num4 = "10"
// let add = num3+num4

// console.log(add)

//task simple interest
// Simple Interest = principal x time x rate divide by 100

// let principal = 500
// let rate = 7.2
// let time = 12

// let simple_interest = principal * time * rate /100
// console.log(simple_interest)

//Boolean
// let  isThisCorrect = true;

//Undefined & Null
// let value
// console.log(value)

// let null_value = null;
// console.log(null_value)

//Symbol
// Symbol is an advanced data type used to create unique values.
// let id1 = Symbol("id")
// let id2 = Symbol("id")

//non-primitive data types
//Array
//Objects
//Functions