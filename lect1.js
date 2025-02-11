let a = 10;
let b = 5.5;

console.log(a+b)
// a = 10;
// console.log(typeof(a));   //number no decimal float int in js


// b = "suraj"
// console.log(typeof(b));   //string

// c = true
// console.log(typeof(c));   //boolean

// it gives the data type of a variaable



// OPERATORS

// a = 6
// b = 2

// console.log(a+b); //8
// console.log(a-b); //4
// console.log(a*b); //12
// console.log(a/b); //3
// console.log(a%b); //0     Gives remainder 
// console.log(a**b); //36   Exponential

// x = 0
// y = 0
// z = x/y
// console.log(z);   // Nan - Not a Number 
// console.log(typeof(z))  // as useal it is a number as given in the Nan itself



// operator presendency

// ()  >  **  >  *,/,%  >  +,-
//            >  L - R  >  left to right

// a = (2+1)*3
// b = 3/1 + 2**2
// c = 4+1*6/2

// console.log(a); // 9
// console.log(b); // 7  ** > / > +
// console.log(c); // 7  * > / > +



// // always use let keyword to initialise a variable and use ; at the end . prefer by experience programmer
// // althoug without using it we donot have any issue 

// let b; // we initialise the b but it contain no value  
// // without let we cannot assign b as empty value

// console.log(b); // undefine as no value is asign to it
// console.log(typeof(b)); // undefine --  itself is a type of datatype in js



// square of given number
 
// let a = 5;
// let sqr = a*a;
// console.log(sqr); //25




// let const keyword difference  and var is not used after 2015 as let was introduced

// let a = 5;
// console.log(a); // 5
// a = 10;
// console.log(a); // 10, 5 get replace by 10 

// const b = 5;
// console.log(b); // 5
// b = 10
// console.log(b);  // typeerror -- as  const value cannot be replace



// problem solve

// let age = 22;
// age+2
// console.log(age) // 22 -- age+2 is not assing to any variable to correct it

// let myage = 22;
// myage = myage + 2;    // assigment operator another is unary oprerator
// console.log(myage) // 24



// unary operator 

// let a;
//  ++a pre increment (change, then use)
//  a++ post increment (use, then change)
//  --a pre decrement (change, then use)
//  a-- post decrement (use, then change)

// problem solve

// let num = 5;
// let newNum  = num++; // post increment (use,the change ) newNum = 5 num = 6
// newNum = ++num;   //pre increment (change,then use ) newNum = 7 num = 7


// string = "writen between the quotes"

// let a = 'surajdwivedi';
// console.log(a[0]); // gives value of string  at  0 index
// console.log(a.length) // gives the length of string
// console.log(a[13]) // undefine as no number is in 12 position
// console.log(a[a.length-1]) // gives i as 12-1 = 11 = i


// let a = "suraj"
// let b = "dwivedi"
// let c = a +b // add direct a and b
// let d = a+ " " + b //add a and space and b togrther
// console.log(c);
// console.log(d)

//Problem solve 

// let a = "Surajdwivedi"
// console.log(a.length)   //12
// console.log(a[0])  //S
// console.log(a[a.length-1])  // i


// taking input in js 

// let s = prompt("enter1: "); 
// let b = prompt("enter2: ");
// console.log(s+b);
// open it in the browser



// template literals

// let a = 10;
// let b = 5;
// let output = "your total price is "+ (a+b) + " rupes only"
// console.log(output);               // another method using string literal

// let res = `your total price is ${a+b} rupes only` // we donot have to use the string then remove use + so it get complicated
// console.log(res)



// comparison operator
// let a = 10;
// let b = 20;
// console.log(a>11) //false
// console.log(a<=10)  // true
// console.log(a>=10) //true
// console.log(a==b)  //false
// console.log(a!=b)  //true
//important 
// let m = 3;
// let n = "3"

// console.log(m==n) //true as it compair value only
// console.log(m===n) //false as it compair value and datatype vicevers



//  CONDITIONAL STATEMENT


// let age = 10;
// if (age>=18){
//   console.log("you can vote");
// }
// else{
//   console.log("sorry for diturbance")
// }

// roadsignal

// let color = prompt("enter siginal: "); //open in browser for prompt to work

// if (color == "green"){
//   console.log("croos");
// }
// if (color == "yellow"){
//   console.log("ready");
// }

// if (color == "red"){
//   console.log("stop");
// }


// agedistribution

// let age = Number(prompt("enter age: "))  //to take int as input

// if (age>0 && age<=10){
//   console.log("you are child");
// }
// else if (age>11 && age<=20){
//   console.log("you are adult");
// }
// else if (age>21 && age<=30){
//   console.log("you are men");
// }
//  else{
//   console.log("you are geting older baby");
// }


// let size = "xl"

// if (size == "xl"){
//   console.log("price is Rs.250");
// }
// else if (size == "l"){
//   console.log("price is Rs.200");
// }
// else if (size == "m"){
//   console.log("price is Rs.100");
// }
// else if (size == "s"){
//   console.log("price is Rs.50");
// }
// else{
//   console.log("not valid option")
// }



// switch

// let no = 5

// switch(no){

// case 1: 
// console.log("monday");
// break;
// case 2:
//   console.log("tuesady");
// break;
// default:
//   console.log("khud krle bc")


// }

// prompt("wann enter the site")
// alert("be aware of data")  //to use only in  browser o\nly




// String Method
// Syntax = StringName.Method()
// they are immutable so the value must stored in the new variable

// 1 -- trim method 
// it removes the leading and leaving spaces but not in between the String
// a new string is created the old string remain same so we need to stores it in a new variable

// let str = "   Suraj dwivedi   ";
// console.log(str.length); //gives length -- 19
// let b = str.trim();
// console.log(b.length); // length reduces --13
// console.log(str);   //return top value with spaces as trim method create new variable and not change the previus one

// Note -- space between str not remove 
// Note -- strings are immutable  -- as a new variable is created to store the trim value while main value remain same



// 2 -- toUpperCase() and toLowerCase()

// let str = "Suraj Dwivedi"
// let upStr = str.toUpperCase()
// let loStr = str.toLowerCase()
// console.log(upStr);
// console.log(loStr);


// 3 -- Indexof ()
// it usesd two args within brackets 
// return the first index of occurance and -1 incase of not found

// let str = "Suraj Dwivedi handsome smart boy"
// let a = str.indexOf("Suraj") //0
// console.log(a);
// let b = str.indexOf("boy"); //29
// console.log(b); 
// let c = str.indexOf("lovely"); //-1 not foumnd
// console.log(c);

// Note --- we can use trim(),toUpperCase()/toLowerCase(),Indesxof() together known as -Method Chaning

// let x = " Suraj dwivedi"
// console.log(x.trim().toUpperCase());




// 4 -- Slice(str,end)
// return sum part of string in to a new string

// let str = "I love Myself"
// let newStr = str.slice(2,6) // str from index 2 end at 5 as 6 is excluded
// console.log(newStr);  //love
// console.log(str.slice(2));  //str from2 goes to end
// console.log(str.slice(-5)); // == str.slice(str.length-5)



// 5 -- replace = using slice method only
//repalce a word by another and create the new str

// let str = "iloveCoding";
// console.log( str.slice("love","do"));
// console.log( str.slice("o","x"));

// Note -- not working inthissysytem



// ARRAY -- collection of linear data
// Array are of object type  
// contain any type of value
// Array are mutable -- using index we can change values

// let students = ["suraj","suryakant","anuj","chandrakant"];
// console.log(students);     
// console.log(students[0]); //  using index method to acces values from array
// console.log(students.length)  
// console.log(typeof(students)) //Object
// students[0] = 1;      //  changes value of suraj to 1,as are mutable
// console.log(students)


// students[10] = "handsome"; //between the number willbe stored in empty form
// console.log(students)



// Array methods  -- mainly four
// push -- add to end
// unshiift -- add at start
// pop -- del from end  & return it
// shift -- del from start  &  return it


// let car = ["bmw","toyota","odi","tata"];
// console.log(car);
// car.push("maruti");   // add maruti at the end
// console.log(car);
// car.pop()  // remove value from end
// console.log(car);
// car.unshift("maruti")  // add value at start
// console.log(car);
// car.shift()  // remove value at starty
// console.log(car);

// 5 - indexof()
//return index if not present gives -1
// let arr = ["hi","hlo","bye","tata"]
// console.log(arr.indexOf("tata"));


// 6 - includes()
// search for value  -- if avilable gives true else false
// let arr = ["hi","hlo","bye","tata"]
// console.log(arr.includes("hi"));        //true in this case


// 7 - concat()
// to add two arr
// syntax -- a.concat(b) fist a and then b will be added

// let a = [1,2,3,4,5]
// let b =["sun","anu","akku","rishi","kushi"]
// console.log(a.concat(b));



// 8 - revere()
// to reverse an Array

// let a =[1,2,3,4,5]
// console.log(a.reverse());



// 9 - slice
// return the part of Array --- as in string

// let a = ["ram-ram","hare-hare","krishna","shiva"]
// console.log(a.slice());
// console.log(a.slice(1));




// 10 - splice
// remove/replace/add Element 
// syntax = splice(st,deletecount,itm0...itmN)

// let color = ["red","yellow","blue","orange","pink","white"]
// console.log(color.splice(4));
// console.log(color);
// console.log(color.splice(0,1));
// console.log(color);
// console.log(color.splice(0,1,"black","grey"));  // 0 pe jake 1 ok delete bakiye update
// console.log(color);


// 11 - sort()
// make array in ascending order
// good for alphabates
// on number it uses ascii value not good at that
// reson is that it first convert array in string and then sort it

// let a = ["u","q","a","b","m","n"]
// console.log(a.sort());

// let b = [1,45,78,5,3,4]
// console.log(b.sort())



// Note --- mainly const valu cannot be change but in case of const arr we an change
// reason is array refrerences




// loops in javaScript

// for(let i = 0; i < 5; i++){
//   console.log("suraj is handsome boy");
// }

//  odd/even  number between 1 to 20


// console.log("they are odd number")
// for(let i = 1; i <= 20; i++){
  
//   if (i%2 != 0){
//     console.log(i);
//   }
// };
// console.log("they are even")
// for(let i = 1; i <= 20; i++){
 
//   if (i%2 == 0){
//     console.log(i);
//   }
// };


// table of 5

// for(let i = 1; i <= 10; i++){
//   console.log(5*i);
// }

// Table of 5 by using while loop

// let i = 1;
// while (i<=10){
//   console.log(5*i);
//   i++
// }



// movieGuessGame

// let movie = "avatar";
// let guess = prompt("enter movie name")


// if (guess == movie){
//   console.log("you guess it right");
// }
// else(
//   console.log("better luck next time")
  
// )

// note = this will be use only one in order to use it again and again we use loop


// let movie = "avatar";
// let guess = prompt("enter movie name")

// while((guess != movie) && (guess != "quit" )){
//   guess = prompt("wrong. check again")
// }


// Loop in Array usage

// let arr = ["sun","mun","tue","wed","thu","fri","sat"]

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// let i = 0;

// while (i<arr.length){
//   console.log(arr[i]);
//   i++
// }

// to print the same in reverse order

// let b = []   //created epmty array

// let arr = ["sun","mun","tue","wed","thu","fri","sat"]

// for(let i = 0; i < arr.length; i++){
//     b.push(arr[i])   // added the value of arr to empty array using push
//  }

// console.log(b)

// unshift me -add at start = (7) ['sat', 'fri', 'thu', 'wed', 'tue', 'mun', 'sun']
// push me -add at end =  ['sun', 'mun', 'tue', 'wed', 'thu', 'fri', 'sat']



// for of loop (as similar to python) -- similar to for loop working
// used to access collection without creating initialiser insted use name of collection

// let arr = ["sun","mun","tue","wed","thu","fri","sat"]

// for(x of arr){
//   console.log(x);
// }


// Object literals
// used to store key,value collection pair written between two curly braces
// no order is follow values are dynamic every time you execute
// to access specific value --- Objectname.key
// js automatic convert keys into string type and then uses it

// let student = {
// name: "suryakant",
// sirName: "dwivedi",
// age: 20,
// rollno:69,
// };

// console.log(student);
// console.log(student.name);

// to  add/update/delete value in objectLiterals

// let student = {
// name:"suryakant dwivedi",
// class:"12th",
// age:20,
// city:"delhi",
// gf:10
// }

// we are going to change the city name and add gender option

// student.city="khaga" //update
// student.gender="male" //add
// delete student.gf  //delete
// console.log(student);


// nested objects

// let info = {

// suraj : {
//   age:20,
//   height:184
// },
// anuj : {
//   age:17,
//   height:179
// },
// akku : {
//   age:3,
//   height:60
// },
// rishi : {
//   age: 11,
//   height:76
// },
// kushi : {
//   age:7,
//   height:62
// }

// }

// console.log(info);
// console.log(info.kushi.height)



// generate number betweeen 1 to 10

// let b = Math.floor((Math.random())*10)
// console.log(b);



// function in js
// syntax - functon functionname() {code}

// function hello(){
  
//   let a = prompt("enter your name");
//   console.log("hello",a);
// }
// hello();


// fuunction for a die roller

// function dieRoller() {
// let as = Math.floor(Math.random() * 6) + 1;
// console.log(as);
// }
// dieRoller();


// Function with arguments
// --values given to the function

// function priceTag (amt) {
// console.log(`price of your laptop is ${amt}`); 
// }
// priceTag(40000);

// function itm(name,price) {
// console.log(`${name} and the price is ${price}`);
// }
// itm("soya",62);
// itm("panner",200);

// function that gives the avg of three number

// function avg (a,b,c){
//   let m = (a+b+c)/3
//   console.log(m);
// }
// avg(2,2,5);

// function that sum no from 1 to n

// function sum(n) {
// let b = 0;
// for(let i = 0 ; i <= n ; i++){
//    b = b  + i;
// }
// console.log(b);
// }
// sum(6);


// function to concate all strings in the array
    
// let a = ["s","u","r","a","j"]

// function st(a){
// let b = '';
// for (let i = 0; i<a.length;i++){
//   b = b+a[i]
// }
// console.log(b);
// }
// st(a)


// Scope 
// --determine accesibility of variable,objects and funtionfromdifferent parts

// ---function : variable define inside function cannot acceces outside the function
// ---block  : variable define inside {} cannot acces  from  outside
// ---lexical  : variable define in a function aree accesible to function within it, reverse is not true

// Function expression -- name of funtion is not given

// const var = function () {
//  do something
// };


// var sum = function (x,y) {
// console.log(x+y); 
// }
// sum(1,2)


// this keyword
// --used when we have to access key of a object within the function
// --it inclue all the object and allow to acces it within the function


// let con = {

// name:"suraj",
// class:12,
// math:54,
// physics:82,
// chemistry:76,
// getAvg(){
// let a = (this.math+this.physics+this.chemistry)/3;   // if we not use this then functon cannot access value
// console.log(`the student ${this.name} of class ${this.class} score average of ${a}`);
// }
// }
// // console.log(con)
// console.log(con.getAvg())


// try & catch keyword

// --try: check the block of code tested for  error
// --catch keyword: execute the block of code if error occurs within try

// console.log("hi");
// console.log("hlo");
// try{
// console.log(a);  // give error as it is not define so that we use try else our program will not execute after the error

// }
// catch{
// console.log("a is not define"); //this will run if try got error and our whole program will run if try have no error then our program will run normally
// }
// console.log("bye");
// console.log("tata");


// Arrow function
// syntax -- var a = (args) => {//do code}

// var sum = (a,b) => {
// console.log(a+b);
// }

// sum(2,2)


// Note -- we can convert this code in one line using implicit return

// const sum = (a,b) => a+b ; //used when we have to return value only
// sum(2,2)  // check in browser by writing the same line

// (1)  setTimeout function
// syntax -- setTimeout(fun,time(milisec))
// this will work after time end and then function will execute

// console.log("hi");

// setTimeout(() => (
// console.log("handsome suraj")   // after 4 second this function will executed
// ),4000) 

// console.log("welcome ");

// First hi will print and then welcome after 4 sec setTimeout will executed


// (2) --setinterval function
// syntax -- setinterval(fun,time(milisec))
// this will work after time end and repet itself
// to stop it we will use -- clearInterval(id) alwase   store it in variavble (id)


// var id =  setInterval(() => {
//   console.log("handsome suraj");
// }, 3000);


// Map method
// -- use to acces value from array

// let arr = [1,2,3,4,5];
// let b = [] 
// for(let i = 0; i < arr.length; i++){
//    b = b+  2 * (arr[i]) + " "; 
// }
// console.log(b);        // this is done in basic approch  but ans is in string 

// console.log(typeof(b))

// Using map in arr

// let arr = [1,2,3,4,5];
// let duble = arr.map((i) => {
//   return 2*i;
// })
// console.log(duble);


// using filter in arr
// -- if the given condition is true then it will access th evalue else note

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let even = arr.filter((el) => {

//  return el % 2 == 0;
// })

// console.log(even);

// using every in arr
// -- if condition in the given function is true for all then it give true else false


// let arr = [1,2,3,4,5,6,7,8,9,10]
// let check = arr.every((el) => {
//  return el % 2 == 0;
// })
// console.log(check);  // false as there are odd number too



// using some in arr
// --opposite of every if any one is true in the condition then it gives true else false
// note-- simialr to above moving next

// using reduce in arr 
// --it takes 2 args 
// --.reduce(accumulator,Element)
// -- ualue of element gets in accumulator and this will be continue

// let arr = [1,2,3,4,5]

// let ans = arr.reduce((res,el) => {     // el = 1 | res = 1
//   return res+el;                       // el = 2 | res = (1)+2 = 3
// })                                     // el = 3 | res = (3)+3 = 6
//                                        // el = 4 | res = (6)+4 = 10
//                                        // el = 5 | res = (10)+5 = 15
// console.log(ans);


// finding max value in arr

// let max = 0
// let arr = [1,2,3,4,5]

// for(let i = 0;i < arr.length; i++){
//   if(arr[i]>max){
//     max = arr[i]
//   }
// }
// console.log(max);

// note -- we can use reduce for same

// let arr = [1,2,3,4,5]

// let max = arr.reduce((max,el) => {

// if (max > el)  {
//   console.log(max);
  
// }

// else {
//   console.log (el);
// }

// })
// console.log(max);



// check in the given array all are the multiple of 10 or not

// let arr = [10,20,30,40,50]

// let ans = arr.every((el) => {
//  return el % 10 == 0;
// })
// console.log(ans);


// find the minimum value

// let arr = [1,2,3,4,5]

// let min = arr.reduce((min,el) => {

// if (min<el){
//   return min;
// }
// else{
//   return el;
// }

// } )
// console.log(min);


// Default parameter
// --when the value is given to arguments with in braces

// function sum (a,b=3) {
//   return a+b;
// }

// console.log(sum(1));  //4
// console.log(sum(1,4));  //5  we can also change its value after


// spread
// // syntax -- ...array

// console.log(Math.max(1,2,3,4,5));  
// console.log(Math.min(1,2,3,4,5));

// in case of array

// let a = [1,2,3,4,5]
// console.log(Math.min(...a));




// GOING TO STUDY ABOUT DOM

// DOM STANDS FOR DOCUMENT OBJECT MODULE

// SELECTING ELEMENTS

// 1 - getElementById("id")  
// return the elemnts as object or null (if not founded)
// syntax - document.getElementById("id")

// used from inspect only

// document.getElementById("description");    it will give full p tag from start to end

//  let c = document.getElementById("description"); 
// console.log(c);   gives all the p tag  from start to end 
//  console.dir(c)  gives all the property of description
// document.getElementById("ab"); null as it not exist


// 2 - getElementByClassName / getElementByTagname (almost similar)
// return the elemnts as html collection  or empty collection (if not founded)
// syntax - document.getElementByClassName("className")

// document.getElementsByClassName("oldImg"); we will get html collection with object form

// HTMLCollection(3) [img.oldImg, img.olgImg, img.oldImg]    output
// 0:img.oldImg
// 1:img.oldImg
// 2:img.oldImg


// these are not the best way to use (next best)

// QUERY SELECTOR
// ALLOW US TO USE ANY CSS SELECTOR

// document.querySelector('p')  // select first p element
// document.querySelector('#muId')  // select first  element with id = muId
// document.querySelector('.myClass')  // select first  element with class = myClass
// document.querySelectorAll('p')  // select all p element


// ACCESSING  THE CONTENT OF HTML

// 1 - innerText   shows the  text that  VISIBLE ON THE screen
// 2 - innerHTML   shows the same text including  tags also
// 2 - textContent  shows how the text is wriitenin html file  but shows /n where line end folow by spaces


// let c = document.querySelector("p")
// // console.log(c)  

// console.log(c.innerText);   //normal text
// console.log(c.innerHTML);   // text with tags
// console.log(c.textContent);  //text with  sapces at the end


// we can also change the content of page using these property

// let c = document.querySelector("p")
// console.log(c.innerText = "hlo handsome");   
// console.log(c.innerHTML = "hlo handsome");
// console.log(c.textContent = "hlo handsome");

// console.log(c.innerText = "suraj <b>handsome</b>");  //  display - suraj <b>handsome</b>
// console.log(c.innerHTML = "suraj <b>handsome</b>");   // display - suraj handsome (handsome is bold)



// Manipulating Attributes
//  Objt.getAtribute("id") // to show id 
//Obj.setAttribute("id","value") //to change id

// let c = document.querySelector("img");

// console.log(c.getAttribute("id"));  //mainImg
// console.log(c.setAttribute("id","spiderImg"));  //this will change the id and the image will change (dimension)
// console.log(c.setAttribute("src","creation_3.jpeg"));  // change the src and img changes as source changes



// Manipulating styles
// 1 - obj.sty
// it add as inline css so not prefered a lot



// let c = document.querySelector("h1");
// c.style.color="red"; // changes the color to red from black
// c.style.marginLeft="30px"; // changes the margin

// let b  =  document.querySelectorAll(".box a");  

// for(let i = 0; i < b.length; i++){   // to change every a color
//   b[i].style.color="red";
// }



// 2 - CLASSLIST
// obj.classList
// here one class is definned in css which we can asses by this feature


// let c = document.querySelector("h1");
// console.log(c.classList);   // doesn't show anything as it doesn't have any class name in it


// a - classlist.add()  to add a class
// b - classlist.remove() to remove a class
// c - classlist.contain()  to check if class exist
// e - classlist.toggle()   to toggle between add and remove


// we had created a class green that has only property that change it to green

// let c = document.querySelector("h1");
// console.log(c.classList.add("green"));  heading color changes to green or
// console.log(c.setAttribute("class","green"));
// c.classlist.remove("green")  to remove green clase
// c.classlist.contain("green")
// c.toggle("green") if have green then remove and viceversa



// note - we can also use setAttribute for same but only one prorety can be use one at a time for example if we made another class-(size) that change the size of text then we can use classlist.add("size") so both class will apply but in setAttribute method the green will be remove and only size will be applicable then



// NAVIGATION

// 1 - parentElement
// 2 - children
// 3 - previous/nextSiblingElements

// let c = document.querySelector("h4");
// console.log(c.parentElement);   // div.box
// let c = document.querySelector(".box");
// console.log(c.children);   HTMLCollection(2) [ h4, ul]

// ADDING ELEMENTS 
// document.createElement("p") create para
// 1 - appendChild(Element)

// let c = document.createElement("h1");  create h1
// c.innerHTML="hlo suraj handsome";         give some text to h1
// let b = document.querySelector("body");     to update on
// b.appendChild(c);  visible at the last


// DOM EVENTS
// THEY ARE THE SIGNAL THAT SOMETHING IS DONE
// THEY ARE OF MANY TYPES

// 1 - onclick  -- when an element is clicked
// used as inline within html

// <button onclick="console.log('done')">click me</button>  -- in html for javascript
// let btn = document.querySelector("button");
// btn.onclick = function(){
//   alert("hlo handsooome")
// }

// let btn = document.querySelector("button");
// function say ()  {
//   console.log("hlo handsooome");
// }
// btn.onclick = say;


// whenever button will clicked  on console you can check that done  will also increase

// 2 - onmouseenter 
// -- whenever a mouse enter in the region the event occur

// let btn = document.querySelector("button");

// btn.onmouseenter = function() {

// console.log("done");

// }


// EVENTLISTENER
// SYNTAX - element.addEventListener(event,callback)
/// best way to do

// let btn = document.querySelector("button");

// btn.addEventListener("mouseenter",function(){
//   console.log("done");
// })


// ACTIVITY
// 1 - heading
// 2 - button 
// 3 - div to display color

// let btn = document.querySelector("button");


// btn.addEventListener("click",function(){

// let h = document.querySelector("h1");
// let random = randomColor();
// h.innerText = random; 

// let div = document.querySelector("div");
// div.style.backgroudColor = random;

// });


// function randomColor () {
//   let r = Math.floor(Math.random()*225);
//   let g = Math.floor(Math.random()*225);
//   let b = Math.floor(Math.random()*225);

//   let color = `rgb(${r},${g},${b})`;
//   return color;

// }



// let p =document.querySelector('p');
// p.addEventListener("click",function(){
//   console.log("clicked");
// })


// let box =document.querySelector('.box');
// box.addEventListener("mouseenter",function(){
//   console.log("you are inside");
// })


// let bo =document.querySelector('.box');
// bo.addEventListener("mouseleave",function(){
//   console.log("you are outside");
// })

// NOTE MediaKeyStatusMap,KEYDOWN ARE ALSO KEYWORD THAT CAN USE IN ADD addEventListener

// js is  single threaded language
// at a time only one command will run 


// TERMINAL

// ls-- list files
// clear -- clear screen
// pwd -- print working directory
// cd -- change directory
// cd.. -- back
// mkdir -- make directory
// manual command (man x) = gives all info about any command:(x) in this case

// touch-- use to creat file to as mkdir
// touch index.html



// BACKEND
//  node.js -- javascript runtime environment
// used for server building

// go to terminal and write note then enter u will be in node environment we can perform almost all js except domas it is made for browser only

// Export in different files

// module.export = 1 -- used to export 1 that is in rhs to file where require will call
// require("./name") -- used to access the value from name file

// module.export = "123";  (in file a)
// console.log(require("./a"));  path name of fle and 123 will print that is in second file

// let b = require("./dem.js");
// console.log(b);

// npm -- library of packages
// npm i (library name) -- to install library 
// then we will get some default file
// node module -- contains every installed dependency for your project  
// package lock .json -- it recod the exact version of every instal dependency including sub-dependency with versions
// package.json -- contain descriptive and functional metadata about a project, such as name,version,and dependency



// library vs framework

// library -- a collection of pre-written code that used to perform specific taskes.
// ex -- axios
// framewprk -- collection of pre-written code that provide a structure for developing software application
// ex -- express

// -- listen for upcoming request (post,get)
// EXPRESS
// -- a node.js web application framework that helpsus to make the application
// -- it is used for server-side programming
// -- npm i exress 


// working
// -- pass the request
// -- matches response with routs.  /xxx here xxx is a route
// -- response


// for working check the backend folder with index.js file

// const express = require("expres");   store power of express to a variable express too
// const app = express();     the express is a function so we use ()  and stored it in new variable app 

// port are logical endpoint of network connection used to exchange information btw web server & web client

// app.listen() -- used to get the request (meaning to listen only). it takes two input (port,function)



// app.listen(port,() =>
// console.log(`you are on the port ${port}`)
// let port = 3000;
// )

// output

// you are on the port 3000
// the arrow will be on nextline without blinking that means  it is continus repeating itself
// control + c is used to stop the server 
// on your laptop in any browser search localhost  rightnow you will not get any output as server cannot respond right now but visible on terminal to see it use 
// app.u se then inside it res.send() and then you will get the output on browser too


// app.use -- used to send the response 
// app.use((req,res) => {function}) have two aguments 
// within app.use res.send() is used to send the response only oen response can be send at a time from single app.use bx

// app.use((req,res) => {
//   res.send("done bro");
// })

//  ROUTING
//  -- accessing paths of your webpages 
//  -- app.get is use to use routes
// examples

// 1 -- normal screen
// app.get("/",(req,res) => {
//   res.send("you are on screen")
//   } );
  
// 2 -- localhost:3000/home when you will you will get this page only
// app.get("/home",(req,res) => {
// res.send("you are on home")
// } );


// 3 -- localhost:3000/profile when you will you will get this page only
// app.get("/profile",(req,res) => {
//   res.send("you are on profile")
//   } );


// 4 -- localhost:3000/pic when you will you will get this page only
//   app.get("/pic",(req,res) => {
//     res.send("you are on pic")
//     } );  



// -- if none of them is matches then error will ocure to solve this use * then this will present

// 5 -- localhost:3000/pic  you will you will get this page only if noting matches after slash
//   app.get("*",(req,res) => {
//     res.send("you are on wrong directory")
//     } );  

// NODEMON -- to not restart our server again & again whenever code changes use it 

// -- use nodemon file.js to run not workinginmy system

// here we can use varible while on the roots
//   app.get("/:name",(req,res) => {
//   console.log(req.params);       // gives the value of name insde terminal
//   res.send(`our name `)
//   } );  
// whenever you will write anything after / then get the outpt our name only note use any before salash if any before slash is use then we will get the route of that same page



// app.get("/:name",(req,res) => {
//   let a  =  req.params;
//   res.send(`our name  ${a}`);
//   } );  

// here the output is our name [object Object] 

// EJS(EMBEDED JAVASCRIPT TEMPLATES)
// -- it makes html page dynamic
// -- simple templating language used to create html markup using javascript
// -- we can use html as well as javascript both with special tags
// USING EJS

// app.set("view engine","ejs");

// app.get("/",(req,res) => {
//   res.render("home.ejs");});      // INSIDE RENDER A FILE IS SEND the file written inside (views) folder so that express will search it and render it 


// mainly res.send is use to send a string, array, boolean, obj, html tags text so res.render is used for full html page it is mainly html file created seprated file and use render 
// the difference is only to add render insted of send and add ejs using npm


// EJS SYNTAX
// 1 -- <%= %>   output the value into template(HTML ESCAPED)
// ex -- <h1> <%= 1+2 %></h1> here output will be 3 in h1 style
// <%= "suraj".toUpperCase() %>  on html page we will have SURAJ


// app.get("/rolldice",(req,res) => {
//   res.render("rolldice.ejs");   created a file rolldice.ejs inside views folder to get a random number
// })

// or we can chage it as follows

// app.get("/rolldice",(req,res) => {
//   let b =   Math.floor(Math.random()*6) + 1         assume as it cumes from a database
//     res.render("rolldice.ejs",{num : b});      we have pass an object with num as key and value as b.
//   })


// insde ejs <%= num %>     // this get value from object


// app.get("/ig/:username",(req,res) => {
// let {username} = req.params;          on browser write localhost:3000/ig/suraj you wil get suraj on terminal
// console.log(username)         
// });

// using through ejs 

// app.get("/ig/:username",(req,res) => {
//   let {username} = req.params;
//     res.render("instagram.ejs",{user:username});  
//   }); created a file instagram.ejs inside views folder to get a insta template contain 


// conditial statement in EJS
// refrence of rolldice file is taken num is the key  within it
 
// no equal to sign is placed between <% %> and every js line must contain opeaning and closing <% %>

// <% if (num == 6){ %>              contain opeaning and closing <% %>
//   nice rool it again              not contain as it is just html and will be executed if condition is true
//   <%}%>                           contain opeaning and closing <% %>
  
//  loop in ejs

// instagram is taken as reference

// app.get("/ig/:username",(req,res) => {
//   let follow = ["sun","anuj","rishi","akku","shivam","subham","lovekush"]
// let {username} = req.params;
//   res.render("instagram.ejs",{user:username,follow});
// });

// <%      for(let n of follow)   {  %>    
//   <ul>
//         <li> <%= n %></li>
//       </ul>
//         <%}%>


// GET AND POST REQUEST

// GET --- USED TO GET SOME RESPONSE
// DATA SENT IN QUERY STRINGS

// POST --- USED TO POST SOMETHING
// DATA SEND VIA REQUESTED BODY
