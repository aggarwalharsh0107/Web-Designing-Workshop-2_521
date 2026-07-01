

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


// noe from here we start loops .............................



for(let i = 1; i<=5; i++){
    console.log(i);
}// here we print thr nummber forwward 

// but if we have to print the number backward 
for(let i = 10; i>=1; i--) {
    console.log(i);
}

for(let i = 10; i>=1; i = i-3) {
    console.log(i);
}
// here it will print the number in backward direction by the differnece of 3 
// variavleds which are define inside the for loop are only applicable for loop not outside the loop 

// question print all the odd numbers from 1 to 15  
for(let i = 1; i<=15; i=i+2) {
    console.log(i)
} 

console.log("backwards");

for(let i=15; i>=1; i=i-2){
    console.log(i);
}

// question print all the even numbers from 2 to 20
for(let i=2; i<=10; i=i+2){
    console.log(i);
}
console.log("backwards");

for(let i=10; i>=2; i=i-2) {
    console.log(i);
}

// infinite loops
for( let i=1; ;i++) {
   console.log(i);
}// infinite loops can crash the website .


// print the multiplication table for 5.
for(let i=5; i<=50; i=i+5) {
    console.log(i);
}

//if we have to print the table for any  number 
let n = prompt("write your number");
n = parseInt(n);

for(let i=n; i<=n*10;i=i+n) {
    console.log(i);
}

// nested loops 
for(let i=1; i<=3; i++) {
    console.log(`outer loop ${i}`)
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

// while loop 
let i=1;

while(i<=5) {
    console.log(i);
    i++;
}
// if we want to run while loop in backward direction 
let i=5;
while(i>=1) {
    console.log(i);
    i--;
}
//print number upto 20 using while loop 
let i=0;

while(i<=20) {
    console.log(i);
    i++;
}

// create a game in which you gues your correct movie using while loop 
const favMovie = "avatar";

let guess = prompt("guess my favourite movie");
while( (guess != favMovie) &&(guess !="quit")) {
    guess = prompt("wrong guess. please try again");
}

if(guess == favMovie) {
    console.log("congrats!!");
}else {
    console.log("you quite ")
}

// use of break  keyword
let i=1;
while(i<=5) {
    if(i == 3) {
        break;
    }
    console.log(i);
    i++;
} 

console.log("we used break at 3");

// we can go gues movie question like this also
const favMovie = "avatar";

let guess = prompt("guess my favourite movie");
while(guess != favMovie)  {
    if(guess == "quit") {
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess. please try again");
}

if(guess == favMovie) {
    console.log("congrats!!");
} 

// using of loops with the array
let fruits = ["mango" , "apple" , "banana" , "litchi" , "orange"];

for(let i=0; i<fruit.length; i++)  {
    console.log(i , fruits[i]);
} 

// for running the loops in array in backward 
let fruits = ["mango" , "apple" , "banana" , "litchi" , "orange"];
fruits.push("pineapple");
for(let i=fruits.length-1; i>=0; i--) {
    console.log(i , fruits[i]);
}

// nested loops using nested arrays 
let heroes = [
    ["ironman" , "spiderman" , "thor"]
    ["superman" , "wonder woman" , "flash"]
]

for(let i=0; i<heroes.length; i++) {
    console.log(i , heroes[i], heroes[i].length);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j},${heroes[i][j]}`);
    }
}

// student result score 
let student = [ ["aman" , 95], ["shradha" , 94.4], ["karan" , 100]];
for(let i=0;  i<student.length; i++) {
    console.log(`info of student #${i}`);
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j])
    }
}

// use of for of loop 
let fruits = ["mango" , "apple" , "banana" , "orange" , "litchi"];

for(fruit of fruits) {
    console.log(fruit);
}

for(char of "apnacollege") {
    console.log(char);
}

// use of nested for of loop 
let heroes = [["superman" , "batman" , "wonder woman"], ["spiderman" , "ironman" , "thor"]];

for(list of heroes) {
    for(name of list) {
        console.log(name);
    }
}

// create a todo app 
let todo = [];
let req = prompt("please enter your request");

while(true) {
    if(req == "quit") {
        console.log("quitting  app");
        break;
    }

    if(req == "list") {
        console.log("--------");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("------");
    }else if(req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong request")
    }
    req = prompt("please enter your request");
}

// practice question based on lecture 4
// practice question 1 
let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for(let i=0; i<arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

// practice question 2 
let number = 287152;
let count = 0;

let copy = number;
while(copy > 0) {
    count++;
    copy = Math.floor(copy/10);
}

console.log(count);

// practice question 3  sum of a digit 
let number = 287152;
let sum = 0;
let copy = number;

while(copy>0){
    digit = copy % 10;
    sum+= digit;
    copy = Math.floor(copy/10);
}
console.log(sum);

// practice question 4 factorial n
let n = 5;
let factorial = 1;

for(let i=1; i<=n; i++) {
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

// practice  question 5 find the largest number
let arr = [2,5,10,4,2,7,1,9];
let largest = 0;

for(let i=0; i<=arr.length; i++) {
    if(largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);

// lecture  5th of js ............................................

// we can store same data in objects as well as in array but in 
//objects we have more clearity of data that for which this data is used for .........................

let student = {
    name: "shradha",
    age: 23,
    marks:94.4
};
// now if we create an array 
let student2 = ["shradha" , 23, 94.4];
// in object we dont have any specific order but in array we have a specific order 

const item = {
    price: 100.99,
    discount: 50,
    colors = ["red" , "pink"]
};

// create a twitter post using object literal 
const post = {
    username: "@shradhakhapra",
    content: "This is my #firstpost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege" , "@delta"]
};

// we can access our values using get values
post["content"]; // by this method // we  can also preffer this method whenever we will use  variable 
post.content; // or  by this method  

// javascript automatically converts key into the string .
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

// add or update a value 
const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

// if we have to update a value then we haVE to simply
Object.key = "new value"; // here we assign new value to the variable 
Object.key // you will get your updated value 
student.city = "Mumbai";
student.city // now this time we get mumbai 
student.gender = "female";
student.gender // here we get female 
student.marks = "A";
student.marks // here we get grade "A"

// if we want to delete  then we apply
delete student.marks;
delete student.city; 

// example of creating object of objects 
const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "0",
        city: "Mumbai"
    }

};

// with the help of dot operator we can access each single value.

// now we are creating array of objects 
const classInfo = [
    {
      name: "aman",
      grade: "A+",
      city: "Delhi"
    },
    {
      name: "Shradha",
      grade: "A",
      city: "Pune"
    },
    {
      name: "Karan",
      grade: "0",
      city: "Mumbai"
    }
];
// in case of array we can access the element with the help of our index..
// example classInfo[2].grade   

// if we want to print value of pi we write as
Math.PI
// if we want to print the value of E
Math.E

Math.abs(12); // here we get value 12
Math.abs(-12.5);// here we get the value 12.5

Math.pow(2 ,4);//here we get the value 16
Math.pow(2 , 5);// here we get the value 32
// Math.floor() function smallest nearest integer ke pass roundoff karta hai 

Math.floor(5);//here we get the value 5
Math.floor(5.9999);// here we get the value 5
Math.floor(-5.5);// here we get the value -6

Math.ceil(5);// here we get the value 5
Math.ceil(5.5);// here we get the value 6

// practice question based on Math.random() function 
Math.floor(Math.random() * 100) + 1;
Math.floor(Math.random() * 5) + 1;

// if we want a number in a particular range rather than starting from 1 then 
// for example we want numbers  from 21 to 25 
// then we apply Math.floor(Math.random()  * 5) + 20 ;

// create a guessing game 
const max = prompt("enter the max number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the number");

 while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("you are right! congrats !!random number was" , random);
        break;
    }else if(guess < random) {
        guess = prompt(" hint: your guess was too small . please try again");
    } else {
        guess = prompt("hint: your guess was too large,. please try again");
    }
 }

 // practice questions of lecture 5 
 // practice question 1 create a programme that generates a random number representing a dice roll 
 let dice = Math.floor(Math.random() * 6) + 1;
 console.log(dice);

 // practice question 2 Createanobjectrepresentingacarthatstoresthefollowingpropertiesforthecar:name,model,color.Printthecar’sname.

const car = {
    name: "Maruti Suzuki",
    model: "Maruti Suzuki Dzire",
    color: "white",
};

console.log(car.name);

// praactice question 3 CreateanobjectPersonwiththeirname,ageandcity.Edittheircity’soriginalvaluetochangeitto“NewYork”.AddanewpropertycountryandsetittotheUnitedStates.
const Person = {
    name: "Jane Doe",
    age: 21,
    city: "New Jersey",
};
Person.city = "New York";
Person.country = "United States";
console.log(Person);

// lecture 06 functions 
// functions are basically used to perform  a specific type of work ..
// we can call the function many times we want 
// in functionc order is very important 
// the value we pass are always stored in the order wise format..  
// after using the return keyword the function automatically stops 

function hello() {
    console.log("hello");
}
hello();

function  printName(){
    console.log("apna college");
    console.log("shradha khapra");
}
printName();

function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}
print1to5();// with the help of this we can call the function 

function isAdult()  {
    let age  = 18;
    if (age >= 18) {
        console.log("adult");
    }else {
        console.log("not adult");
    }
}
isAdult();

// create a function that prints the poem 
function printPoem() {
    console.log("Twinkle Twinkle, Little star");
    console.log("how i wonder what you are")
}
printPoem();

// create a function to roll a dice & always display the value of the dice(1  to 6 )
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice(); // here we again call the function 

// now we study about function with argument 
function printInfo(name , age) {
    console.log(`${name}'s age is ${age}.`);
}
printInfo("shradha" , 23);
printInfo("rajat" , 19);
printInfo("karan");

// create a function to add the sum 
function sum(a , b) {
    console.log(a+b);
}
sum(4 , 5);
sum(7 , 8);

// create a function that gives us the average of three numbers .
function calcAvg(a ,  b, c ) {
    let avg = (a+b+c)/3;
    console.log(avg);
}
calcAvg(2 ,4 , 6);


// create a function that prints the multiplication table of a number
function printTable(n) {
    for(let i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}

printTable(n); // here n can be any integer 


// use of return keyword 
function isAdult(age) {
    if(age >= 18) {
        return "adult";
    }else {
        return "not adult";
    }
}
// in return statement always single value is returned .. 

// create a function that returns the sum of numbers from 1 to n.
function getSum(n) {
    let sum = 0;

    for(let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}

// create a function that returns the concatenation of all strings in an array.... 

let str = ["hi" , "hello" , "bye" , "!"];

function concat(str) {
    let result;

    for(let i=0; i<str.length; i++) {
        result += str[i];
    }

    return result;    
}

concat(str);// here  we call our function

// function scope 
// Global Scope can be used anywhere ..
// function scope is more specific than global scope ..
// we can not access any variable outside the function ..
let sum = 54; // Global Scope

function calSum(a , b) {
    let sum = a+b; // Function scope 
    console.log(sum);
}
calSum(1 , 2);


// BLOCK SCOPE


// Now if we talk about block scope here we use curly braces 
{
    let a = 25;
}
console.log(a); // here we can not access a as it is  outside the  scope

for(let i=1; i<=5; i++) {
    console.log(i); // here block scope is applied 
}

console.log(i);// here we can not access this i as this is outside the scope 


let age = 25;
if(age >= 18) {
    let str = "adult";

}

console.log(str); //here we can not access this str variable as this is outside the scope 

let age = 25;
if(age >= 18) {
    let str = "adult";
    console.log(str); // here we can access this str variable as this inside the scope .
}


// LEXICAL SCOPE


// now we talk about lexical scope and use nested function 
// with the help of lexical scope we can use variable of outside function in the inside function 
// and the variable of inside function can not be  accessible  in the outside function
// as the lexical scope work from outer to inner not from inner to outer.. 

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log(x);
        console.log(y);
    }

    innerFunc();
}




function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        let a = 10;
        console.log(x); // here we can not access a variable as it is declare in inside function  and  call in the outside function 
        console.log(y);
    }
    console.log(a);
    innerFunc();
}


// practice question based on scope 
// koi bhi tab print  hoti hai jab ham uske function ko call krte hai
let greet = "hello"; // global scope 

function changeGreet() {
    let greet = "namaste"; // function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); // lexical scope 
    }
    innerGreet();
}

console.log(greet);
changeGreet();

// function expresiion

// in function expression we store the function into the variable 
// in this function name is not used 
// in this case we call the function with the help of the variable or you say with the name of the variable.. 
let sum = function(a , b) {
    return a + b;
} 
sum(); // call the function with the name of the variable 


let hello = function() {
    console.log("hello");
}
hello();
















 






