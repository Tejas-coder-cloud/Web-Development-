// var age=25;
// if(true)
// {
//     console.log(age)
// }
// function solve()
// {
//     var age=25;
//     console.log(age);
// }
// solve()
/*var a=20;
var a=30;
this is possible 
if we do console.log(a) then we will get 30 as a was initialised as 30 at the end
var is not block scoped 
It means that you can use the variable declared with var out of a particular block 
{
var age =25
}
console.log(age)
*/
/*
let age=24;
let age=28;
this is not possible means you can't redeclare  a single variable 
but 
let age=24;
age=28;
this is possible we can change the value of the variable
 */
// const a=20;
// a=null;
// a=true;
// delete a;
/* this is a dynamically typed language means you don't declare the type of a variable
also one can assign multiple values to a variable 
*/
/*
Using the typeof keyword we can access the type of a variable 
Data types in JavaScript:
Primitive Data Types:
1.Number: Contains integer and floating point numbers eg.1,2.14.It can store only numbers between [-(2*53-1) to (2*53-1)]
2.String: Contains sequence of characters: "Tejas","Pratyush"
3.Boolean: True or False
4.Null:
5.Undefined:
6.BigInt:
7.Symbol:
Non-Primitive Data Types:
*/
/*
operators 
arithmetic operators:
+,-,*,**,/,% 
assignment operators
comparison (relational) operators
logical operators 
bitwise operators
cnditional operators 
 operators
switch case and else if ladder is same as c++
Anything written in ` ` is considered to be a template string
*/
// let a=5;
// console.log(++a);
// console.log(++a);
// ternary operator:
// let age=25;
// let str=age>=18?"Eligible for voting":"Not eleigible for voting";
// console.log(str)
// console.log(false||7||3||6)
// let f=15;
// if (f=1)
// {
//     console.log(1);
// }
// else if (f=2)
// {
//     console.log(1);
// }
// else 
// {
//     console.log(1);
// }
// for(let i=5;i<10;i++)
// {
//     console.log(i)
// }
// let i=5;
// while(i<10)
// {
//     console.log(i*i);
//     i++;
// }
// let g=5;
// do
// {
//     console.log(g**3);
//     g++;
// }while(g<7);
// let str=`Tejas 
// Dhatrak`;
// console.log(str)
// let str1=new String("Babbar");
// console.log(str1)
// let op1="English";
// let op2="Hindi";
// let total=`${op1} ${op2}`;
// console.log(total);
// console.log(total.length);
// console.log(total.toLowerCase());
// console.log(total.toUpperCase());
// console.log(total.substring(2));
// console.log(total.substring(2,5));
// console.log(total.split(' '));
// console.log(total.replace("E","R"))
/*
var cannot work in block scope 
let and const can work in block , function ,global scoped 
Functions:
General Format :
function function_name(arguments(may or may not))
{
// code to be executed 
}
*/
// function sayName()
// {
//     console.log("Tejas")
// }
// sayName();
// function getSum(a,b,c)
// {
//     sum=a+b+c;
//     return sum;
// }
// let a=getSum(2,31,4);
// console.log("Printing sum: ",a);
// let multiplication=function(a,b)
// {
//     return a*b;
// }
// console.log(multiplication(4,5));
// arrow functions:
let arrow=(x,y)=>
{
    return x**y;
}
console.log(arrow(2,3));