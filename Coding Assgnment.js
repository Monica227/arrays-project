//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [];
ages.push(3)
ages.push(9)
ages.push(23)
ages.push(64)
ages.push(2)
ages.push(8)
ages.push(28)
ages.push(93)
console.log("This is my ages array;", ages);
console.log("Ages.length", ages.length - 1); 

//1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array
console.log(ages[0]); // This prints out the first element of the ages array.
console.log(ages[ages.length - 1]); // This prints out the last element of the ages array.
let firstelement = ages[0]
let lastelement = ages[ages.length - 1]
console.log(lastelement - firstelement);