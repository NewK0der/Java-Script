let num = 33
let num1 = "12"
let st = "Binit"
let bool1 = true
let bool2 = false
let und = undefined
let nul = null

// Explicit Type Conversion

// Converting into Number

console.log(Number(num1)) // 12
console.log(Number(st)) // Nan(Not a number) - data type = number
console.log(Number(bool1)) // 1
console.log(Number(bool2)) // 0
console.log(Number(und)) // Nan - data type = number
console.log(Number(nul)) // 0

// converting to Bool
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(null)) // false
console.log(Boolean("")) // false
console.log(Boolean("Binit")) // true

// convering into string
console.log(String(11)) // 11 - data type = string
console.log(typeof String(true)) // true - data type = string
console.log(typeof String(false)) // false - data type = string
console.log(typeof String(null)) // null - data type = string
console.log(typeof String(undefined)) // undefined - data type = string

//************* Operations *************

console.log("hello" + " " + "Binit") // hello Binit

//Implicit Type Conversion

console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 3) // 123
console.log(1 + 2 + "3") // 33

console.log(+true) // 1
console.log(+"") // 0

let n = 10
console.log(n++) //10
console.log(++n) //12


