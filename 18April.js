// Functions

// task isUserEligible
// If user is above 18 print "Eligible"
// if user is below 18 print "Not Eligible"


// function isUserEligible(age) {
//     if (age >= 18) {
//         console.log("Eligible")
//     } else {
//         console.log("Not Eligible")
//     }
// }

// let age = 12
// isUserEligible(age)


// Arrow Functions


// function isEven(num){
//     if(num%2==0){
//         console.log(`${num} is Even`)
//     }else{
//         console.log(`${num} is Odd`)
//     }
// }

// let isEven = (num) => {
//     if (num % 2 == 0) {
//         console.log(`${num} is Even`)
//     } else {
//         console.log(`${num} is Odd`)
//     }
// }

// isEven(12)

// let square = (num) => num*num;
// console.log(square(10))


//task 
// simpleInterest
// function simpleInterest(principle, rate, time) {
//     let answer = principle * rate * 100 / time
//     return answer
// }



//Maths
// console.log( Math.PI )
// console.log( Math.round(8.9) )
// console.log( Math.floor(4.9) )
// console.log( Math.ceil(4.4) )
// console.log( Math.sqrt(9) )
// console.log( Math.pow(5,3) )
// console.log( Math.min(100,29) )
// console.log( Math.max(100,29) )


//Class

// class Dog{
//    bark(){
//         console.log("Woof Woof")
//    }
//    shakeHands(){
//         console.log("Shake Hands")
//    }
// }

// let dogObj = new Dog()
// dogObj.bark()
// dogObj.shakeHands()


// class User{

//     username; 
//     state; 
//     job; 

//     constructor( username, state, job ){
//         this.username = username;
//         this.state = state;
//         this.job = job;
//     }

//     greetings(){
//         console.log("Hello")
//     }

//     updateName(name){
//         this.username = name;
//     }

//     updateState(state){
//         this.state = state;
//     }

//     updateJob(job){
//         this.job = job;
//     }

//     printUserDetails(){
//         console.log(this.username)
//         console.log(this.state)
//         console.log(this.job)
//     }

// }

// let user1 = new User("Bhavesh", "Pune", "Software Engg.")
// let user2 = new User("Komal", "Nagpur", "SOftware Engg.")

// user1.printUserDetails()
// user2.printUserDetails()

// user1.updateName("bhavesh")
// user1.updateState("Banglore")
// user1.updateJob("Software Engg.")

// user2.updateName("Komal")
// user2.updateState("Pune")
// user2.updateJob("Software Engg.")

// user1.printUserDetails()
// user2.printUserDetails()

// class Circle{

//     radius = 0;

//     constructor(radius){
//         this.radius = radius;
//     }

//     getDiameter(){
//         return this.radius * 2;
//     }

//     getArea(){
//         return Math.PI * Math.pow(this.radius,2) // PI*r^2
//     }

//     getPerimeter(){
//         return 2 * Math.PI * this.radius;
//     }

// }


// let circle1 = new Circle(5)
// console.log( circle1.getDiameter() )
// console.log( circle1.getArea() )
// console.log( circle1.getPerimeter() )


//BODMAS
//Bracket of        //priority 1
//Division          //priority 2
//Multiplication    //priority 2
//Addition          //priority 3
//Substraction      //priority 3

// console.log(4*(3+2/4)-4+3)

// class Mathematics{

//     #PI = 3.14;

//     static square(num){
//         return num*num
//     }

//     static cube(num){
//         return num*num*num;
//     }

//     min(num1,num2){
//         if( num1 < num2 ) return num1
//         else return num2;
//     }

//     //private function
//     max(num1,num2){
//         if( num1 > num2 ) return num1
//         else return num2;
//     }

//     getPI(){
//         return this.#PI;
//     }

// }

// let obj = new Mathematics()
// console.log(obj.square(5))
// console.log(obj.cube(5))
// console.log(obj.min(5,10))
// console.log(obj.max(5,10))
// console.log(obj.getPI())

// console.log(Mathematics.square(5))
// console.log(Mathematics.cube(5))

// Inheritance
// class Father{

//     _eyeColor = "brown"
//     #bankBalance = 1000000
//     constructor(){
//         console.log("I am Father")
//     }


// }

// class Son extends Father{

//     job = "engg"
//     constructor(){
//         super()
//         console.log("I am Son")
//     }

// }


// let son1 = new Son()
// console.log(son1._eyeColor)
// console.log(son1.bankBalance)
// let father1 = new Father()

// console.log(father1.eyeColor)
// console.log(son1.eyeColor)

// console.log(son1.job)
// console.log(father1.job)

// Promises

// let output = new Promise( 
//     (resolve, reject)=>{
//         ok = true

//         if(ok){
//             resolve("OK")
//         }else{
//             reject("Error")
//         }

//     } 
// )

// output.then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
// })


// let loop = new Promise(
//     (resolve,reject)=>{
//         function print(){
//             console.log("Loop is over")
//             reject("Some Issue")
//         }
//         setTimeout(print, 3000)
//     }
// )


// async function main(){

//     console.log("Before Loop")
//     await loop.catch((err)=>{console.log(err)})
//     console.log("After Loop")

// }

// main()

// function verifyUser(username, password) {
//     return new Promise(
//         (resolve, reject) => {
//             let dbUser = "Bhavesh"
//             let dbPassword = "1234"

//             function checkUser(username,password){
//                 if (username === dbUser && password === dbPassword) {
//                     resolve(true) 
//                 } else {
//                     resolve(false) 
//                 }
//             }

//             setTimeout(checkUser(username,password), 3000)

//         }
//     )



// }

// async function login(){

//     console.log("Welcome to QAAS Program")
//     let username = "Bhavesh"
//     let password = "12345"

//     let isUserVerified = await verifyUser(username, password)

//     console.log(isUserVerified)

//     if(isUserVerified){
//         console.log("User is logged in")
//     }
//     else{
//         console.log("username and password is incorrect")
//     }

// }

// login()

