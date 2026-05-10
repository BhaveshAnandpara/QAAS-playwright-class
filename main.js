import { simpleInterest } from './simpleinterest.js'
import { CompoundInterset } from "./compoundintrest.js"

console.log( "Checking the simpleInterest formula" )

let simpleInt = simpleInterest(1000000, 10, 5)
console.log( `Simple Interest will be ${simpleInt}` )

console.log( "Checking the compundInterest formula" )

let compundInt = CompoundInterset(1000000, 10, 12, 5)
console.log( `Compound Interest will be ${compundInt}` )