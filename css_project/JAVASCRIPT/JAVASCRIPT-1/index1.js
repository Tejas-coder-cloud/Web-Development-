/* Array
Any program in Javascript has been allocated memory in either of these 2 ways:
1.Stack memory 
2.Heap Memory
All the primitive data types occupy stack memory 
ALL the reference types use heap memory 
reference types are : Array,Function,Object
Suppose we consider an Array it consists of some data 
the data is stored in heap but its reference is made using a pointer which is stored in stack memory
Object--> A collection of key-value pairs 
There are 2 ways of creating arrays:
1.Normal Array
2.Array constructor
semicolon is redundant in js
Array methods:
push--> takes one argument to append the argument
pop--> Removes the last element of the array 
shift--> Removes the first element of the array
unshift--> Adds the element to first place of the array
slice--> Used for creating new array with the help of one array
splice--> Used for replacing a particular element
map--> Takes one argument as a function and returns values based on the function
filter--> same as map 
reduce --> somewhat like map,filter takes two arguments 
1.acc(accumulator)
2.curr(current)
acc is initially 0 if not declared
sort--> sorts the array in ascending order
indexOf-->returns the index of the element 
length--> returns the length of array
*/
// let obj={
//     name:"Tejas",
//     age :"19",
//     greet:function()
//     {
//         console.log("How are you ?")
//     }
// }
// console.log(obj)
// obj.greet();
// console.log(typeof(obj))
// let obj2=obj --> shallow copy
array=[[[1,2,3,4,5]]]
console.log(array)
let name=new Array(10,20,50)
// name.pop() // Array constructor 
// console.log(name)
// name.unshift("Varun")
// console.log(name)
// console.log(name.slice(1,2))
// name.splice(1,2,"Rohan")
// console.log(name)
let ansArray=name.map((number)=>
{
  return number**3
}
)
console.log(ansArray)
let array1=[10,90,80,60]
let sum=array1.reduce((acc,curr)=>
{
    return acc+curr
    /*
    acc=0,curr=10
    acc=10,curr=90
    acc=100,curr=80
    acc=180 ,curr=60
    acc=240
    */
})
console.log(sum)
array1.sort((a,b)=>
    b-a)
console.log(array1)
console.log(array1.indexOf(10))
array1.forEach((value,index)=>
{
    console.log("number:",value,"Index: ",index)
})
let obj={
    "name":"Tejas",
    "age": 19
}
for(let value in obj)
{
    console.log(obj[value])
}
for(let value of array1)
{
    console.log(value)
}
