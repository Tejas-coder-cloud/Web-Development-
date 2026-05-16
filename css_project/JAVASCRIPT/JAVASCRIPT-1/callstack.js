/*
the below is an example of function hoisting where the function call is taken after the function ends even after it has been 
written above the function. However the same doesn't work for a variable .like consider the below example:
console.log(age)
var age=25
If we execute this code then the code will provide an output as undefined 
Since the value of age wasn't initialised then it prints undefined 
We won't get the output as undefined if we have declared age as let or const 
In the case of let or const we will get a reference error
function hoisting --> possible
class hoisting --> impossible 
variable hoisting--> possible only with var keyword else not possible
const obj =new sayName();
class sayName
{
}
this will provide a reference error
*/
sayName("Tejas")
function sayName(name)
{
    console.log(name)
}
let greet=function()
{
    console.log("Greetings of the day")
}
greet();
function greetme(greet,fullname)
{
    console.log("Hello",fullname)
    greet()
}
greetme(greet,"Tejas")
function solve(number)
{
     return function(number)
     {
        return number**2
     }
}
let ans = solve(5)
let finalans=ans(10)
console.log(finalans)
const arr=[
    function(a,b)
    {
        return a+b
    },
    function(a,b)
    {
        return a-b
    },
    function(a,b)
    {
        return a*b
    }
]
let ans1=arr[0]
let finalans1=ans1(10,5)
console.log(finalans1)
