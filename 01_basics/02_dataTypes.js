let name = "Binit" //String(can be in single quotes as well as in double quotes)
let age  = 22 // Number, range - 2 - 2^53, bigint
let isStudent = false // Boolean- true/ false
const bigNumber = 5765654769776421254n 

console.log(typeof age); // Number
// null - standalone value(Empty value)
// undefined - no value assigned 
// symbol - mostly used in react to find uniqueness

console.log(typeof name) // String
console.log(typeof age) // Number
console.log(typeof undefined) // Undefined
console.log(typeof null) // object(it is a buf of JS)
console.log(typeof bigNumber) // object(it is a buf of JS)

// Non Primitive Data Type

// array
const arr = ["apple", "mango", "orange"]

// object
let obj = {
    name : "Binit",
    age : 22
}

const myFun = function(){
    console.log("hello World")
}


console.log("\n")
console.log(typeof arr) // object
console.log(typeof obj) // object
console.log(typeof myFun) // function object



//********************************//

// All primitive data types are stored in (stack) - shared by value
// All  non primitive data types are stored in (Heap) - shared by reference
