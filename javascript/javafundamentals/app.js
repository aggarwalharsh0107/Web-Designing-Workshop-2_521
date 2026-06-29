

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

//when ever you see () in your java script it means  some method is being used ..

// example of first string method which is trim method 

let password = prompt("set your password");
let newPass = password.trim();
console.log(newPass)

// trim or any other string method do not remove the space from the strimg it create new string and then remove the spaces. 
let password = prompt("set your password");
let newPass = password.trim();
console.log(password)

//code to convert in uppercase and in the lowercase .
// example 
let name = "Apna College";
let msg = "error";
console.log(msg.toUpperCase());

// string method with arguments.
//method = index of method we used here 
let msg = "IlOVECoding";
msg.indexOf("Love");
// we get here 1
msg.indexOf("love");
// we get here -1
msg.indexOf("o");
// we get here 2 

// now we apply method chaining 
let msg = " hello ";
let newMsg = msg.trim();
console.log("after trim : ", newMsg);
newMsg = newMsg.toUpperCase();
console.log("after uppercase : ", newMsg);

// here we can also short cut method instead of this 
let newMsg = msg.trim().toUpperCase();
console.loge(N)

// now we practice about slice method 
let msg = "hello";
console.log(msg.slice(0, 4));

let msg = "apnacollege";
console.log(msg.slice(0,4));

console.log(msg.slice(-2));// so here it is print length - number which is equal to 9
// so numbers after 9 will going to be print 

// Repeat method 

let msg = "ILoveCoding";
messaage.repeat(2);// here we get ILoveCodingILoveCoding

let fruit ="Mango";
fruit.repeat(3);//here we get MangoMango

// practice question number 1
let msg = "hello!";
console.log(msg.trim().toUpperCase());

// practice question number 2 
let name = "ApnaCollege";
name.slice(4,9);// here the value we get 'colle'
name.indexof("na"); // here we get the index 2 
name.replace("Apna","Our");// here we get the new string as 'OurCollege'

// practice question number 3 
let name = "ApnaCollege";
name.slice(4).replace('l' , 't');// we get the string cotlege

let newstr = name.slice(4).replace('l' , 't');//  here our newstring will create 
newstr.replace('l' ,'t'); // here we will get 'cottege'

// instead of writting muktiple codes we can also write it as 
name.slice(4.).replace('l' , 't').repeat('l' , 't'); // we get code in one single line .

// usually we store values as
let student1 = "aman";
let student2 = "shradha";
let student3 = "rajat";

// by using the array we can also store values as in the form
let students = ["aman" , "shradha" , "rajat"];

// for accesing value at a particular index 
let name = "Harsh";
name[3];// here we will get value s 
name[2];// here we will get the value r 

// in javascript w can also create mixed array 
let info = ["aman" , 25 , 6.1];
info.length ; // by this we wil get the length of the array 
info[2];// here we will get the value 6.1 

// arrays are mutable 
let fruits =["mango" , "apple" , "litchi"];// undefined 
fruits //['mango' , 'banana' , 'litchi']
fruits[0] = "banana";
fruits // ['banana' , 'apple' , 'litchi'];

// practice question  based on array methods 
let months = ["january" , "july" , "march" , "august"];
months.shift("january");
months.shift("july");
months.unshift("june");
months.unshift("july");
//months = ['july' , 'june' , 'march' , 'august']

let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "voilet"];
primary.concat(secondary);// here we get ['red' 'yellow' 'blue' 'orange' 'green' 'voilet']
// we can also write it as 
secondary.concat(primary);// ['orange' 'green' 'voilet' 'red' 'yellow' 'blue']
primary.reverse("red","yellow","blue");// here we will get ['blue' 'yellow' 'red']. commit by harsh aggarwal
primary.slice(1,3);// copy the values of primary array into  a new array but from 1 to 3 excluding the 3
// practice question 
let months = ["january" , "july" , "march" , "august"];
months.splice(0,2, "july" , "june");
// it will retun us ['july' , 'june' ,'march' , 'august']. 

// practice question 2
let lang = ["c" , "c++" , "html" , "javascript" , "python" , "java" , "c#"];
lang.push("sql");
lang.reverse().indexof("javascript");
// return the index value 4 . 

// topic is array references
let arr = ['a' , 'b'];
let arrCopy = arr;
// now arrCopy = ['a' , 'b']
arrCopy.push('c');
arr = ['a' , 'b' , 'c'];
arr == arrCopy;
// return true  

// nested array
let  nums = [[1 ,2] , [3 ,4] , [4 ,5]];
let nums = [[2 , 4] , [3 , 6] , [4 ,8]];
nums[0] // return [2,4]
nums[0].length // it will give 2
nums[0][0] // return 2

// practice question based on tic tac toe 
let game = [['x' , null , 'o'],[null , 'x' , null],['o' , null , 'x']];

// assignment questions of lecture 3 
// question 1 
let arr = [7 ,9 ,0 ,-2];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);

//question 2 
let arr = [7 ,9 , 0 , -2];
let n = 3;
let ans = arr.slice(arr.length-1);
console.log(ans);

// question 3
let str = prompt("please enter a string");
if (str.length == 0) {
    console.log("string is empty");
}else {
    console.log("string is  not empty");
}


// question 4 
let str = "ApnaCollege";
let idx = 3;
if(str[idx] == str[idx].toLowerCase()) {
    console.log("character is lowercase");
}else {
    console.log("character is not lowercase")
}

// question 6 
let arr = ["hello", 'a', 23, 64, 99 ,-6];
let item = 64;

if(arr.indexof(item) != -1) {
    console.log("element exizt in array");
}else {
    console.log("element doesn't exist in array");
} 


// noe from here we start loops 






















 






