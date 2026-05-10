// npm init -y
// npm install typescript --save-dev
// npm install ts-node --save-dev
// npx tsc --init

// let isActive: Boolean = true;
// isActive = "sadaw" //throws error

// let decimal: Number = 213.23
// let num1: Number = 23
// num1 = "afef" //throws error

// let color: String = "Blue"
// let fullName: String = 'Bhavesh Anandpara'
// let state: String = `Pune`
// color = 123 //throws error

// let fruits : string[] = ["apple", "pineapple", "custardapple"]
// let marks : number[] = [1232,3244235,213123,23423]

// let response: any = true
// let apiResponse: unknown = "WFWR"

// // function throwError() : never{
// //     throw Error("This is Error")
// // }

function add( num1:number, num2:number) : number{
    return num1+num2;
}

// console.log(add(3,4))

// // // objects

// let User : { name : string, state : string, age : number, isHungry : boolean } = {
//     name : "Bhavesh",
//     state : "Pune",
//     age : 80,
//     isHungry : true
// }

// let NewUser : { name : string, state : string, age : number, isHungry? : boolean } = {
//     name : "Bhavesh",
//     state : "Pune",
//     age : 80
// }

// function getAPIResponse() : undefined | { status : number , message : string} {
//     return { status : 200, message : "API successfull"}
// }

// let loginAPIResponse : undefined | { status : number , message : string}  = getAPIResponse()


// function getRectangleArea( length? : number, width? : number ) : number {

//         if(length === undefined || length === null ) length = 10
//         if(width === undefined || width === null ) width = 10

//         return length * width
// }

// type APIResponse  = undefined | { status : number , message : string}

// function getAPIResponse() : APIResponse {
//     return { status : 200, message : "API successfull"}
// }

// let loginAPIResponse : APIResponse  = getAPIResponse()


// Interface
// For Objects

// interface User {
//     name: string,
//     state: string,
//     age: number,
//     isHungry: boolean
// }

// interface AdminUser extends User{
//     doesHaveAccess : boolean
// }


// let user: User = {
//     name: "Bhavesh",
//     state: "Pune",
//     age: 80,
//     isHungry: true,
// }

// let newUser: AdminUser = {
//     name: "Bhavesh",
//     state: "Pune",
//     age: 80,
//     isHungry: true,
//     doesHaveAccess : true
// }


// function getRectangleArea( length : number = 10, width : number = 10 ) : number {
//         return length * width
// }

// ternary operator

// let num = 4

// if(  num%2 == 0){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }

// num%2 == 0 ? console.log("Even") : console.log("Odd")
// condition ? < if block > : < else block >
