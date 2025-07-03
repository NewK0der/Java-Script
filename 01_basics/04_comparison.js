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
console.log("2" === 2) // false

console.log("1" > true) // false  converts true into 1
console.log("1" == true) // true
console.log("1" < true) // false