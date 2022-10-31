//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = []; //Syntax to create an array
ages.push(3) //First element in array is always at a zero based index so start off counting from 0, 1 ,2...
ages.push(9) //Array name + .push added the following numbers to my array.
ages.push(23)
ages.push(64)
ages.push(2)
ages.push(8)
ages.push(28)
ages.push(93)
console.log("This is my ages array;", ages);
console.log("Ages.length", ages.length - 1); //Length of ages array is 7 since the first element in the array is counted off at zero.


/*1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed! */
console.log(ages[0]); // This prints out the first element of the ages array which is 3.
console.log(ages[ages.length - 1]); // This prints out the last element of the ages array which is 93.
var firstelement = ages[0] // Declares variable for first element.
var lastelement = ages[ages.length - 1] 
console.log(lastelement - firstelement); //Values of the last and first element in the array were programtically subtracted 93 -3 = 90.

//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
var age = []; //Syntax to create an array.
ages.push(27) //array name + .push adds the new age to the existing array.
console.log("This is my ages array and me adding a new age to it;", ages); //New age "27" is printed in the console in the current array.


//1c.	Use a loop to iterate through the array and calculate the average age
var sum = 0
for (let i =0; i < ages.length; i++){
    console.log(ages[i]) //Ages array is printed in the console.
    sum = sum + ages[i]
} console.log("Sum of numbers in the array;" , sum) //Sum of ages in the array is 257.
console.log("This is the average of the ages;", sum/ages.length) /*Sum of ages "257" divided by number of ages "9" to get the average
28.55.*/
2.	//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = [];
names.push("Sam", "Tommy", "Tim", "Sally", "Buck", "Bob") //Array created with the names the instructions asked for.
console.log("This is my names array;",names); //Names are printed in the consoloe.
console.log("Names.length;", names.length - 1); //Length of names array.


//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
var total = names.reduce((a, b) => a + b); //The reduce method will iterate the array and find the sum of the letters in the array.
var count = 0; //
for(let i = 0; i < total.length; i++){ //loop starts counting off each letter from 0 until the last letter in the array.
    count++
}
console.log(count); //Number of letters total in names array.
var averageLetters = count / names.length; //Total number of letters is divided by the number of names in array.
console.log("Average number of letters per name;", + averageLetters); //Average of letters per name is 3.833. 

	
//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
var concatName = ""; //Variable will return a string.
var names = ["Sam, Tommy, Tim, Sally, Buck, Bob"]
for(let i = 0; i < names.length; i++) { // loop concatenates all the names together.
    concatName += names[i] + (" ");
    }
    console.log(concatName); //Returned a string as instructed, names printed in the console.


//3.	How do you access the last element of any array?
// Use: var lastElement = array[array.length - 1];


//4.	How do you access the first element of any array?
// Use: var firstElement = array[0]


/*5.Create a new array called nameLengths.
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array */
var nameLengths = []; 
for(let i = 0; i < names.length; i++){ // loop runs all of the names and puts them in the new array.
    nameLengths.push(names[i].length);
}
console.log(nameLengths); 


//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
var nameSums = 0;
for(let i = 0; i < nameLengths.length; i++){  // loop calculates the sum of all the elements in the array.
    nameSums = nameSums + nameLengths[i];
}
console.log("This is the sum of all the elements in the array;", nameSums); //The sum "33" is printed in the console.
	

/*7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
 (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). */
 function repeatGreeting(word, n){ //Function created with two parameters "word and n" as instructions asked for.
var repeatWord = ""; //Variable will return a string. 
for (let i = 0; i < n; i++){ 
    repeatWord += word;
}
 console.log(repeatWord); //String parameter to be repeated.
 }

repeatGreeting("Hello", 4); //Function returns the string greeting 4 times.  


/*8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
•	The full name should be the first and the last name separated by a space.*/
var firstName = "Jane"; //Declared string Variables.
var lastName = "Doe";
function fullName(firstName, lastName){ //Function with two parameters that will return a full name as instructions asked for.
    return(firstName + " " + lastName); //Returning the concatenation of the declared variables.
} 
console.log("This will print the fullname;", fullName(firstName, lastName)); //"Jane Doe" printed in the console.


//9.    Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
var num1 = 50; //Declared variables for the array of numbers.
var num2 = 15;
var num3 = 75;
function arrayOfNumbers(num1, num2, num3) {
    if ((num1 + num2 + num3) > 100) { //The sum of the array of numbers is greater than 100 & the console will return a true statement. 
        console.log ("The function returns true;", true);
    }
}
arrayOfNumbers(50, 15, 75)


//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
var numbers = [50, 15, 75]   
var numbersSum = 0;
function average(array){  //Function takes the sum from the array & returns the average of it.
    for(let i = 0; i < array.length; i++)
        numbersSum = numbersSum + array[i];
        return numbersSum / array.length; //Sum of numbers array divided by total amount of numbers in array will give the average.
 
} console.log("This is the average of the elements in the array;", average(numbers)); //Average of elements in numbers array is "46.66".


/*11.   Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is 
greater than the average of the elements in the second array. */
var array1 = [10, 20, 30] //Arrays of numbers created that the instructions asked for.
var array2 = [3, 2, 1]
function greaterAverage(){ //Function of the greater average that does not have parameters.
    let sum1 = array1.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue; //Sum of array1.
    })
    
    let sum2 = array2.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue; //Sum of array2.
    })

    let average1 = (sum1 / array1.length); //Sum of array1 divided by total numbers in array will give array 1's average.
    let average2 = (sum2 / array2.length); //Sum of array2 divided by total numbers in array will give array 2's average.

    if(average1 > average2) { 
        return true; //This statement will return true or false if average of array 1 is greater than average of array 2.
    } else {
        return false; 
    } 
}

console.log("The average of array 1 is greater than the average of array 2;" , greaterAverage()); //Returned true in the console.


/*12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
var isHotOutside = true;
var moneyInPocket = 10.50;
function willBuyDrink(isHotOutside, moneyInPocket){  
    if(isHotOutside === true && moneyInPocket >= 10.50){ //Will return true if conditions are met.
        return true; 
    } else {
        return !true;
    }
}console.log(willBuyDrink(isHotOutside, moneyInPocket)); //Returned true in the console.


/*13.	Create a function of your own that solves a problem. 
•	In comments, write what the function does and why you created it. */
//I created this function to compare two variables and to see which variable out of the two is largest.
var num1 = 35; //Variables that will be compared in the function.
var num2 = 150;
function greaterNum(num1, num2) { //Function with two parameters to be compared.
    if (num1 > num2) { //The if statement will evauluate which of the two num variables is greater and will return the larger number.
        return num1;
    } else {
        return num2;
    }
}

console.log(greaterNum( 35, 150)); //150 printed in the console and it is larger than 35 so the function worked successfully. 