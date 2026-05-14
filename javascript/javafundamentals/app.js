// var name="John Doe";
// var age=30;
// var isEmployed= true;
// console.log(name);
// console.log(age);
// console.log(isemployed);
// let age=30;
// console.log(age);

// if(true){
//     var age=30;
// }
// console.log(age);

// const PI=3.14;
// console.log(PI);
// PI= 3.14159; //this will cause an error
// console.log(PI);
//consatnt variable can not be reassigned .
//type of operator

//let name = "Priya"
//let age1 = 20;
//console.log("my name is" + name + "and my age is " + age1);
//console.log(`My name is ${name} and my age is ${age1}`)


//practise java script 

console.log("Hello World From Apna College!");
//Hello World From Apna College!


let num = 123;
//undefined 

console.log("num");
//num
console.log(num);
123
console.log(1+2);
//3
console.log("Helo" , "World" , num, (1+5));
//Hello world 123 6 

let a = 10;
let b = 5;
console.log("sum is :" , a + b);

let pencilPrice = 10;
let erasorPrice = 5;
// let output = "The total price is :" + (pencilPrice + erasorPrice) +"Rupees.";
let output = `The total price is : ${pencilPrice + erasorPrice} Rupees.`;
console.log(output);

//operators 
//Arithmetic Operators 
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// unary operators.
let a = 10;
let b = 5;
console.log(a++); //10
console.log(++a);

// assignment operator
let a = 10;
let b = 5;
b = a;
console.log(b);//10

//use of comaprison operator.
let age =16;
connosle.log(age < 18); //false  

//comaprison operator
5==5; //true 
5==4;// false 

// not equal to operator 
 97!=95; // true 
 45!=45; // false 

 // example 
 let n = 5;
 let str = '5';
 typeof n 
 //'number
 typeof str
//  'string'
n == str;
// true 

n === str;
// false

// conditional statements
// if . 
console.log("before my if statement");
let age = 23;
if (age>=18) {
    console.log("you can vote");
    console.log("you can drive")
}
if (age < 18) {
    console.log("you can not vote")
}
console.log("after my if statement");


// example 
let firstName = "shradha";
if (firstName == "shradha")  {
    console.log(`Welcome ${firstName}`);
}

// practice question= create a trafiic light signal that tells you what to do based on color . 

let color = "red";
// traffic light system 
if (color == "red"){
    console.log("stop! light color is red");
}
if (color == yellow) {
    console.log("slow down. light color is yellow");
}
if (color == green) {
    console.log("go light color is green");
}


// problem based on else if 
let age = 14;
if (age >= 18) {
    console.log(" you can vote")
} else if (age >= 18) {
    console.log("you cannot vote");
}else if (age < 18) {
    console.log("you cannot vote 2")
}

let marks = 45;

if (marks >= 80) {
    console.log("A++");
}else if(marks >= 60) {
    console.log("A");
}else if(marks >= 33) {
    console.log("B")
}else if(marks < 33) {
    console.log("F")
}

// problem based on else statements..

let age = 17;
if (age >= 18) {
    console.log("you can vote");
}else {
    console.log("you cannot vote");
}

let color = "white";
if  (color === "red") {
    console.log("stop");
}else if (color === yellow) {
    console.log("slow down");
}else if (color === "green") {
    console.log("go");
}else {
    console.log("traffic light is broken");
}

// practice question on if , else-if , else .
let size = "xl";
if (size == "xl") {
    console.log("price is Rs.250");
} else if (size == "l") {
    console.log("price is Rs.200");
} else if (size  == "m") {
    console.log("price is Rs.100");
}else {
    console.log("price is Rs.50");
}


// practice problem on nested if-else.
let marks = 45;
if (marks >= 33) {
    console.log("pass");
    if (marks >= 80){
        console.log("Grade : o");
    }else {
        console.log("Grade :A");

    }
}else {
    console.log("Better Luck Next Time!")
}


// practice on and operators..
(5 > 3) && (3 > 1);
// true.
(5 > 3) && (3 < 1);
// false 
(5 < 3) && (3 > 1);
// false 
(5 < 3) && (3 < 1 ); 
// false 

// and operator
let marks = 75 ;
if (marks >= 33 && marks >= 80) {
    console.log("pass");
    console.log("A++");
}//false

let marks = 75 ;
if (marks >= 33 || marks >= 80) {
    console.log("pass");
    console.log("A++");
}


// result is pass 

let marks = 75;
if ((marks > 33 && marks <=80) || !failed){
    console.log("pass");
}// result is true 

// practice problem..
let str = "apple";

if ( str[0] === "a" && str.length > 3) {
    console.log("good string");
}else {
    console.log("not a good stringe");
}

// truthy and falsy values 
if (true) {
    console.log("it has true value");
}else {
    console.log("it has false values");
}

if (false) {
    console.log("it has true value");
}else {
    console.log("it has false value")
}

if (0) 
    { console.log("it has true value");
}else {
    console.log("it has false value")
}

if ("") {
    console.log("it has true value");
}else {
    console.log("it has false value")
}


if (string) {
    console.log("string is not empty");
} else {
    console.log("string is empty");
}

let num = 0;
if (num) {
    console.log("num is not equal to 0 ");
} else {
    console.log("num is equal to 0");
}

// switch based questions 
let color = "red";
switch(color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("broken light");
}

// practice question 
// question is using switch print the days of thew weak 
let day = 1;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default :
    console.log("Wrong Day")
    }

// use of alert and prompt 

alert("something is wrong!");


alert("this is a simple alert");
console.log("this is a simple log");
console.error("this is an error msg");

// use of prompt technology 
// prompt technology is based  used here and i
prompt("Enter your name : ");
let firstName = prompt("Enter Your Name  :");
console.log(firstName)






 






