// JavaScript Basics and Syntax

// Web development involves writing a lot of HTML, CSS and JS code. 
// Historically (and even today to some extend), browsers could only understand HTML, CSS and JS
// Any website that you see, is a bunch of HTML, CSS and JS files along with some assets (images, videos etc)
// React, NextJS are frameworks . They compile down to HTML, CSS, JS in the end. That is what your browser understands.
// If someone asks — What all languages can your browser interpret, the answer is HTML, CSS, JS and WebAssembly.

// Properties of JS

// 1. Interpreted
// JavaScript is an interpreted language, 
// meaning it's executed line-by-line at runtime by the JavaScript engine in the browser or server environment, 
// rather than being compiled into machine code beforehand.
// Upsides - 
// There is one less step to do before running your code
// Downsides - 
// Performance Overhead:
// More prone to runtime errors

// 2. Dynamically Typed
// Variables in JavaScript are not bound to a specific data type. 
// Types are determined at runtime and can change as the program executes.

// 3. Single threaded
// JavaScript executes code in a single-threaded environment, meaning it processes one task at a time. 
// We will dive deeper into this next week.

// 4. Garbage collected
// JavaScript automatically manages memory allocation and deallocation through garbage collection, 
// which helps prevent memory leaks by automatically reclaiming memory used by objects no longer in use.

// Conclusion
// Is JS a good language?
// Yes and no. It is beginner friendly, but has a lot of performance overhead. 
// Bun is trying to solve for a lot of this, but there’s a long way to go before JS can compete with languages like C++/Rust

// Variables

// let name = "Ariyan";
// const age = 21;
// var isStudent = true;
// console.log(name);
// console.log(age);
// console.log(isStudent);

// Q . Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

// let favouriteColor = "Black";
// var heightInCentimeters = 182;
// const likePizza = true;
// console.log(favouriteColor);
// console.log(heightInCentimeters);
// console.log(likePizza);

// Data types

// let number= 67;
// let name ="Ariyan";
// let isActive = true;
// let numbers = [1, 2, 3, 4, 5];
// console.log(typeof number); // number
// console.log(typeof name); // string
// console.log(typeof isActive); // boolean
// console.log(typeof numbers); // object (arrays are a type of object in JS)

// Operators

// Arithmetic Operators

// let sum = 5 + 10; // Addition
// let difference = 10 - 5; // Subtraction
// let product = 5 * 10; // Multiplication
// let quotient = 10 / 5; // Division
// let remainder = 10 % 3; // Modulus (Remainder)
// let exponent = 2 ** 3; // Exponentiation (2 raised to the power of 3)
// console.log("Sum:", sum); // Output: Sum: 15
// console.log("Difference:", difference); // Output: Difference: 5
// console.log("Product:", product); // Output: Product: 50
// console.log("Quotient:", quotient); // Output: Quotient: 2
// console.log("Remainder:", remainder); // Output: Remainder: 1
// console.log("Exponent:", exponent); // Output: Exponent: 8

// Comparison Operators

// let isEqual = 5 == 5; // Equal to
// let isNotEqual = 5 != 10; // Not equal to
// let isStrictEqual = 5 === 5; // Strict equal to (checks value and type)
// let isStrictNotEqual = 5 !== 10; // Strict not equal to (checks value and type)
// let isGreaterThan = 10 > 5; // Greater than
// let isLessThan = 5 < 10; // Less than
// let isGreaterThanOrEqual = 10 >= 5; // Greater than or equal to
// let isLessThanOrEqual = 5 <= 10; // Less than or equal to
// console.log("Is Equal:", isEqual); // Output: Is Equal: true
// console.log("Is Not Equal:", isNotEqual); // Output: Is Not Equal: true
// console.log("Is Strict Equal:", isStrictEqual); // Output: Is Strict Equal: true
// console.log("Is Strict Not Equal:", isStrictNotEqual); // Output: Is Strict Not Equal: true
// console.log("Is Greater Than:", isGreaterThan); // Output: Is Greater Than: true
// console.log("Is Less Than:", isLessThan); // Output: Is Less Than: true
// console.log("Is Greater Than or Equal:", isGreaterThanOrEqual); // Output: Is Greater Than or Equal: true
// console.log("Is Less Than or Equal:", isLessThanOrEqual); // Output: Is Less Than or Equal: true

// Logical Operators
// let a = true;
// let b = false;
// console.log(a && b); // Logical AND
// console.log(a || b); // Logical OR  
// console.log(!a); // Logical NOT

// Functions

// function greet(name){
//     return `Hello ${name}`;
// }
// console.log(greet("Ariyan")); // Output: Hello Ariyan

// Write a function sum that finds the sum of two numbers. Side quest - Try passing in a string instead of a number and see what happens?

// function sum(a,b){
//     return a + b;
// }
// console.log(sum(5,10)); // Output: 15
// console.log(sum("5",10)); // Output: 510 (string concatenation)

// solve this problem 
// function optimizeSum(a=0,b=0){
//     return parseInt(a) + parseInt(b);
// }
// console.log(optimizeSum("5",10)); // Output: 15
// console.log(optimizeSum("5", "10")); // Output: 15

// Write a function called canVote that returns true or false if the age of a user is > 18

// function canVote(age){
//     if (age > 18){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(canVote(20)); // Output: true
// console.log(canVote(16)); // Output: false

// Conditionals - if else else if / switch
// let age =20;
// if(age > 18){
//     console.log("You can vote");
// }
// else if(age == 18){
//     console.log("You are 18");
// }
// else{
//     console.log("You cannot vote");
// }

// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

// let number = 91;
// if(number%2==0){
//     console.log("The number is even");
// }
// else{
//     console.log("The number is odd");
// }

// Loops - for loop / while loop / do while loop / for of / for in 

// for 
// for(let a=0;a<10;a++){
//     console.log(a);
// }

// while
// let b=10;
// while(b<20){
//     console.log(b);
//     b++;
// }

// do while
// let c=50;
// do{
//     console.log(c);
//     c++;
// }while(c<60);

// Write a function called sum that finds the sum from 1 to a number

// function sum1ToN(n){
//     let sum =0;
//     for(let a=1;a<=n;a++){
//         sum +=a;
//     }
//     return sum;
// }
// console.log(sum1ToN(10)); // Output: 1 2 3 4 5 6 7 8 9 10

// Complex types
// Objects - An object in JavaScript is a collection of key-value pairs, where each key is a string and each value can be any valid JavaScript data type, including another object.
// let user = {
//     name : "Ariyan",
//     age : 21,
//     isStudent : true
// };
// console.log(user); 
// console.log(user.name); // Output: Ariyan
// console.log(user.age); // Output: 21
// console.log(user.isStudent); // Output: true

// Write a function that takes a user as an input and greets them with their name and age

// const user = {
//     name: "Ariyan",
//     age: 21
// };
// function greetUser(user){
//     return `Hello ${user.name}, you are ${user.age} years old.`;
// }
// console.log(greetUser(user)); // Output: Hello Ariyan, you are 21 years old.

// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

// const user = {
//     name: "Ariyan",
//     age: 21,
//     gender : "male"
// }
// function greet(user){
//     let des = " ";
//     if(user.gender == "male"){
//         des = "Mr";
//     }
//     else if(user.gender == "female"){
//         des = "Mrs";
//     }
//     else{
//         des = "Others";
//     }

//     return `Hi ${des} ${user.name}, your age is ${user.age}`;
// }
// console.log(greet(user)); // Output: Hi Mr Ariyan, your age is 21

// Also tell the user if they are legal to vote or not

// const user = {
//     name: "Ariyan",
//     age: 21,
//     gender: "male"
// }
// function greetAndCanVote(user){
//     let des = " ";
//     if(user.gender == "male"){
//         des = "Mr";
//     }
//     else if(user.gender == "female"){
//         des = "Mrs";
//     }
//     else{
//         des = "Others";
//     }
//     if(user.age >= 18){
//         return `Hi ${des} ${user.name}, your age is ${user.age}. You are eligible to vote.`;
//     }
//     else{
//         return `Hi ${des} ${user.name}, your age is ${user.age}. You are not eligible to vote.`;
//     }
//     return ;
// }
// console.log(greetAndCanVote(user)); // Output: Hi Mr Ariyan, your age is 21

// Arrays - An array in JavaScript is a special type of object that is used to store a collection of values.

// const users = [ "Ariyan", "Harkirat", "Sahil", "Shivam", "Aarav" ];
// console.log(users); // Output: [ 'Ariyan', 'Harkirat', 'Sahil', 'Shivam', 'Aarav' ]
// console.log(users[0]); // Output: Ariyan
// console.log(users.length); // Output: 5

// const string = " Hello World! ";
// console.log(string);
// console.log(string.length); // Output: 13
// console.log(string.trim()); // Output: Hello World!
// console.log(string.toUpperCase()); // Output: HELLO WORLD!
// console.log(string.toLowerCase()); // Output: hello world!
// console.log(string.charAt(0)); // Output: H
// console.log(string.indexOf("W")); // Output: 6
// console.log(string.slice(0, 5)); // Output: Hello
// console.log(string.replace("World", "Ariyan")); // Output: Hello Ariyan!
// console.log(string.split(" ")); // Output: [ 'Hello', 'World!' ]

// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

// function evenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }
// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(evenNumbers(input)); // Output: [2, 4, 6, 8, 10]

// Arrays of objects 
// const users = [
//     {
//         name : "Ariyan",
//         age : 21,
//         gender : "male"
//     },
//     {
//         name : "Harkirat",
//         age : 22,
//         gender : "male"
//     }   
// ]
// console.log(users); // Output: [ { name: 'Ariyan', age: 21,
// console.log(users[0].name); // Output: Ariyan

// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

// function moreThan18(users){
//     return users.filter(user => user.age > 18);
// }
// const users = [
//     {
//         name : "Ariyan",
//         age : 21,
//         gender : "male"
//     },
//     {
//         name : "Harkirat",
//         age : 2,
//         gender : "male"
//     }   
// ]
// console.log(moreThan18(users)); // Output: ariyan

// Objects of objects 
// We can have an even more complex object (object of objects)
// const user1 = {
// 	name: "harkirat",
// 	age: 19,
// 	address: {
// 		city: "Delhi",
// 		country: "India",
// 		address: "1122 DLF"
// 	}
// }
// const city = user1.address.city;
// console.log(city); // Output: Delhi

// Create a function that takes an array of objects as input and returns the users whose age > 18 and are male

// const users = [
//     {
//         name : "Ariyan",
//         age : 21,
//         gender : "male"
//     },
//     {
//         name : "Anoma",
//         age : 179,
//         gender : "female"
//     }
// ]
// function moreThan18(users){
//     return users.filter(users => users.age>18 && users.gender == "male");
// }
// console.log(moreThan18(users)); // Output: name: 'Ariyan' 