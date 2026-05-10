//Callback

// let printResponse = (statusCode) => {
//     if( statusCode >= 200 && statusCode < 300 ){
//         console.log("API Response was successfull")
//     }else{
//         console.log("API Response has some error")
//     }
// }

// function getAPIResponse(){
//     return { 
//         status : 200,
//         message : "Login was successfull"
//     }
// }

// function login( printResponse ){

//     let isUserValid = true
//     let response = getAPIResponse()
//     printResponse(response.status)

// }

// login(printResponse)

// Task

// let square = (num)=> num*num
// let cube = (num)=> num*num*num

// function calculate(num, squareFunc, cubeFunc){

//     console.log(squareFunc)
//     console.log(cubeFunc)

// console.log( squareFunc(num) )
// console.log( cubeFunc(num) )

// }

// console.log(cube)
// console.log(square)

// calculate(10, square, (num)=> num*num*num )



//Promises

// let loginUser = ()=>{

//     setTimeout(
//         ()=>{console.log("User is logged in")},
//         3000
//     )

// }

// let loginUser = () => {
//     return new Promise(
//         (resolve, reject) => {

//             setTimeout(
//                 () => {
//                     console.log("User is logged in")
//                     reject()
//                 },
//                 3000
//             )

//         }
//     )
// }

// function main() {
//     console.log("Please Login")
//     loginUser().then(
//         () => {
//             console.log("Login Succesfull")
//         }
//     ).catch((err) => {
//         console.log("Login has some error")
//     })
// }

// main()


// Fetch API
// if status 200 then login User
// else login unsuccesssfull print


// let fetchAPIResponse = () => {
//     return new Promise(
//         (resolve, reject) => {

//             setTimeout(
//                 () => {
//                     resolve({ status: 200, message: "User is verified" })
//                 },
//                 3000
//             )

//         }
//     )
// }

// let loginUser = () => {
//     console.log("logging in user")
// }

// // function main() {

// //     fetchAPIResponse().then(
// //         (response)=>{
// //             if(response.status === 200){
// //                 loginUser()
// //             }else{
// //                 console.log(response.message)
// //             }
// //         }
// //     ).catch((err)=>{
// //         console.log("some error happened")
// //     })

// // }

// // main()


// //Async/Await

// // async function main() {

// //     let response = await fetchAPIResponse()
// //     if (response.status === 200) {
// //         loginUser()
// //     } else {
// //         console.log(response.message)
// //     }

// // }

// // main()


// // try catch block

// // try{
// //     let response;
// //     console.log(response.status)
// // }catch(err){
// //     console.log(err.message)
// // }

// export function greetings(){
//     console.log("hello")
// }

// function add(num1, num2){
//     return num1+num2
// }

// console.log(add(4,"5"))

function getRectangleArea(length = 10 , width = 10){
    return length*width
}

console.log( getRectangleArea( width = 6 ) )