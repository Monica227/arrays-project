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


/*1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed! */
console.log(ages[0]); // This prints out the first element of the ages array.
console.log(ages[ages.length - 1]); // This prints out the last element of the ages array.
let firstelement = ages[0] // Declares variable for first element.
let lastelement = ages[ages.length - 1] 
console.log(lastelement - firstelement);

//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
var age = [];
ages.push(27)
console.log("This is my ages array and me adding a new age to it;", ages);


//1c.	Use a loop to iterate through the array and calculate the average age
function getAverage(ages) {
    var avg = 0;
    for (i = 0; i < ages.length; i++) {
        avg += ages[i];
        console.log(i + "Iteration, sum = " + avg)
    }
    return avg/ages.length;
}
console.log("Average:" + getAverage(ages));


2.	//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = [];
names.push("Sam", "Tommy", "Tim", "Sally", "Buck", "Bob")
console.log("This is my names array;",names);
console.log("Names.length", names.length - 1);


//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
var total = names.reduce((a, b) => a + b);
var count = 0;
for(let i = 0; i < total.length; i++){
    count++
}
console.log(count);
var averageLetters = count / names.length;
console.log("Average number of letters per name" + averageLetters);

	
//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
var concatName = "";
var names = ["Sam, Tommy, Tim, Sally, Buck, Bob"]
for(let i = 0; i < names.length; i++) { // loop that concatenates all the names together. (2b.)
    concatName += names[i] + (" ");
    }
    console.log(concatName);


//3.	How do you access the last element of any array?
// Use: var lastelement = array[array.length - 1];


//4.	How do you access the first element of any array?
// Use: var firstElement = array[0]


/*5.Create a new array called nameLengths.
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array */

var namelengths = [];





//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

	