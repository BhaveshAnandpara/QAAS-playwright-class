
//hositing
//whenever code run, java script compiles code, variable get's defined at the top

var hoistedVariable;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	


// diff between == & ===

// == checks for value only
// === checks for value and type

if( "5" === 5 )
    console.log("equal")
else
    console.log("not equal")

//Implicit Type Coercion

// you can concatinate number with string and the number will be converted to strings
console.log("My " + "age is " + 56)

// Javascript is dynamically typed language
// Java -> int age = 15; // this is statically typed lanaguage

let name = "Bhavesh"
name = 13
console.log(name)



// isNaN -> Nan = Not a Number

console.log( isNaN(false) )

// passed by value & passed by reference

const add = ( num1, num2 )=>{

    console.log(num1)
    console.log(num2)
    console.log(num1 + num2)

}
// add(1,2)

// in this example we are
// passing username, password as value -> "bhavesh" & 123456
// passing add as a function reference 

const login = ( username, password, add)=>{

    console.log(username)
    console.log(password)
    add(1,2)

}

login( "bhavesh", 123456, add );


// use strict example

function sub(a, b) {
  // In strict mode, this will throw a ReferenceError
  // because `result` is not declared with let/const/var
  result = a - b;
  return result;
}

console.log(sub(1, 2));


//Currying 
function mul (a) {
  return function(b){
    return a * b;
  }
}

console.log(mul(5)(5))


//scope

let state = "Maharashtra" //global scope

const func = ()=>{

    let state = "Gujrat" //block scope
    console.log(state)

}

console.log(state)
func()
console.log(state)


//charAt

//char -> letter
let job = "Software Engg."
console.log( job.charAt(8) )


//rest parameter

const saveMarks = ( username, rollNo, ...marks )=>{

    console.log(username)
    console.log(rollNo)
    console.log(marks)

}

saveMarks( "Bhavesh", 1 , 213, 123, 245, 324, 324,34,23,324,234, 2345 )

//shallow copy and deep copy

//shallow copy
const marks = [1,2,3,4,5]
let copyMarks = marks

// copyMarks.push(6)

//deep copy
let deepCopy = JSON.parse(JSON.stringify(marks))
deepCopy.push(6)

console.log(marks)
console.log(deepCopy)


// Practice Questions

// marks = [213,34234,123213,34223]
 