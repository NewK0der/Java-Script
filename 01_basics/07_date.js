let myDate = new Date()

console.log(typeof myDate) //object
console.log(myDate) // today's date with some random value
console.log(myDate.toString()) // date in english with day and some random value
console.log(myDate.toDateString()) // only date with day in english
console.log(myDate.toLocaleDateString()) // date in mm/dd/yyyy

let dt = new Date(2025, 0, 12)
console.log(dt.toDateString()) // sunday jan 12 2025 - month start with 0 

//  we can pass date in any format