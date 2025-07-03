console.log("2" > 2)
console.log("02" > 1)

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true - comparision and equality check works differently
                      //   understand from youtube

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// strict check
console.log("2" === 2) // false - check value as well as data type

console.log("1" > true) // false  converts true into 1
console.log("1" == true) // true
console.log("1" < true) // false

console.log("0" > false) // false  converts true into 0
console.log("0" == false) // true
console.log("0" < false) // false

let id = Symbol('123') // makes it unique
let uid = Symbol('123') // makes it unique

console.log(id == uid) // false
console.log(typeof id) 
console.log(uid) 