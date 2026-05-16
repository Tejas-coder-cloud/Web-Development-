// console.log("Tejas")
/* 
objects in javascript are dynamic in nature . They cabn be changed at runtime means they are mutable 
The below  is an example of this:
object cloning is nothing but creating two objects in js where each object refers to the same memory
like if we write :
let obj ={value:12}
let b=obj
then it wouuldn't clone obj instead the b object will refer to the same memory 
to fix this 
we use ... ( spread operator )
for object cloning we have three methods ,they are as follows:
1.spread operator ... let variable_name={...src}
2. assign method --> let variable_name=object.assign(dest,src)
3.Iteration 
*/
let obj={
    age:25,
    wt:80,
    ht:170
}
console.log(obj)
obj.color="white"
console.log(obj)
let src={age:24}
let dest={...src}
src.age=25
console.log(src," ",dest)
let src1={age:29}
let dest1=Object.assign({},src1,src)
console.log(dest1)
let dest2={}
for(let key in src)
{
    let newkey=key
    let newValue=src[key]
    dest2[newkey]=newValue
}
console.log(dest2)
/*
compile time error --> the error which will be displayed before the code is executed :
1.Syntax error:
console.log(1  
here the closing bracket is not provided so it gives a compile time error
Runtime error --> The errors which are detected only when te code is executed 
console.log(x)
a reference error will be passed stating  that x is not defined 
for error handling we use a try-catch block 
If you wanna create your custom errors then we use a keyword named throw 

*/
// try 
// {
//  console.log(x)
// }
// catch(e)
// {
//     console.log("I am inside catch block ")
//     console.log("Your error is ",e)
// }
// finally
// {

// }
// try 
// {
//     // Runtime error 
//    console.log(x)
// }
// catch(e)
// {
//    throw new Error("pehle print kardo aur error do")

// }
let error_code=100
if(error_code==100)
{
    throw new Error("Invalid Json")
}