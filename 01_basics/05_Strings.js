const name = "Binit"
const age = 22

console.log("My name is " + name + " and my age is " + age + ".")
console.log(`My Name is ${name} and my age is ${age}.`) // use " ` " symbol

const city = new String('Durgapur')

console.log(city[0]) // D
console.log(name[0]) // B

console.log(city.length) // 8
console.log(name.length) // 5

console.log(city.toUpperCase()) // DURGAPUR 
console.log(city.charAt(2)) // r
console.log(city.indexOf('g') )// 3

const newString = name.substring(0,4)
console.log(newString) // Bini
console.log(city.slice(0,4)) // Durg
const c = city.slice(-1, -8) // Durgapu  but we cant reverse using slicing 
console.log(c)

/*
trim
replace
startswith
endswith
split .......
*/