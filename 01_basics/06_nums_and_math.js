const num = 300

const balance = new Number(1000)

console.log(num) // 300

console.log(balance) // [Number: 1000]

console.log(balance.length) // undefined

console.log(balance.toString().length) // 4

const decimal = 123.5674

console.log(decimal.toFixed(2)) // 123.56 , 2 digit after decimal
console.log(decimal.toPrecision(4)) // 1.2e+2 , round up the value in given digit

const n = 10000000
console.log(n.toLocaleString('en-IN')) // 1,00,00,000

//****************** Math ********************

console.log(Math)
console.log(Math.abs(-5)) // 5
console.log(Math.round(4.4)) // 4
console.log(Math.ceil(4.1)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.max(6,2,4,9)) // 9
console.log(Math.min(6,2,4,9)) // 2
console.log(Math.random()) // by default, values between 0 to 1
console.log(Math.pow(2,3)) // 8

const max = 6
const min = 1
console.log(Math.floor(Math.random() * (max - min + 1)) + min)