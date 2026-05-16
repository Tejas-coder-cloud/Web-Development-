/*
Synchronous Code:
In synchronous code, tasks are performed one after the other. Each task must complete before the next one begins. 
Synchronous code is blocking, meaning that the execution of subsequent code is halted until the current task finishes.
Example of Synchronous Code:
console.log("Start");
console.log("Middle");
console.log("End");
These are executed in order: "Start", "Middle", and then "End".
These are examples of synchronous operations because each operation must complete before the next one starts.
An example of asynchronous code is setTimeout:
setTimeout(function() {
    console.log("This is asynchronous");
}, 1000);
console.log("This is synchronous");
In this example, "This is synchronous" is logged immediately, while "This is asynchronous" is logged after a delay of 1 second.
Blocking Code:
Blocking code refers to operations that prevent further execution until they are completed.
For eg
1. A function that performs a time-consuming calculation.
function computeFactorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * computeFactorial(n - 1);
}
console.log("Start");
let result = computeFactorial(5); // Blocking operation
console.log("Factorial:", result);
console.log("End");
In this example, the computeFactorial function is a blocking operation.
The program waits for the factorial calculation to complete before moving on to the next console.log statement.
Event loop
1. Call Stack : 
definition : It is a data structure that keeps track of the function calls in a program.
2. Web APIs: These are browser-provided APIs that allow JavaScript to interact with the browser environment, such as setTimeout, fetch, and DOM manipulation.
3. Callback/Task Queue: It is a data structure that holds callbacks (functions) that are ready to be executed after an asynchronous operation completes.
Promises in Js 
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
It allows you to write asynchronous code in a more manageable way, avoiding callback hell.
States of a Promise:
1.Pending: The initial state of a Promise. The operation is still ongoing.
2.Fulfilled: The operation completed successfully, and the Promise has a resulting value.
3.Rejected: The operation failed, and the Promise has a reason for the failure.
Creating a Promise:
let myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating success or failure
    if (success) {
        resolve("Promise fulfilled successfully!");
    } else {
        reject("Promise rejected due to an error.");
    }
});
myPromise
*/
// let mypromise=new Promise((resolve,reject)=> {
//     console.log("Tejas");
// });
// let mypromise=new Promise((resolve,reject)=> {
//     console.log("Tejas");
//     resolve(1001);
// });
// let mypromise=new Promise((resolve,reject)=> {
//     console.log("Tejas");
//     reject(new Error("Internal Server Error"));
// });
// function sayName()
// {
//     console.log("Tejas");
// }
// setTimeout(sayName,10000);
// let firstPromise=new Promise((resolve,reject)=>{
//     setTimeout(function sayName()
// {
//     console.log("Tejas");
// },15000);
// resolve(1001);
// });
// let promise1=new Promise((resolve,reject)=>
// {
//     let success=false;
//     if(success)
//     {
//         resolve("Promise Fulfilled");
//     }
//     else
//     {
//         reject("Promise pending");
//     }
// });
// promise1.then((message)=>
// {
//     console.log("Then ka next is Them"+message);
// }
// ).catch((error)=>
// {
//     console.log("Internal Server Error "+error);
// });
// promise1.then((message)=>
// {
//     console.log("Message: "+message)
//     return "Second message"
// }).then((message)=>
// {
//     console.log("Message: "+message)
//     return "third message"
// }).catch((error)=>
// {
//     console.error(error)
//     return "new error"
// }).finally((message)=>
// {
//     console.log("Main toh hamesha chalta hu chahiye reject ho ya resolve ")
// })
// The above is an example of Promise chaining 
let promises0=new Promise((resolve,reject)=>
{
    setTimeout(resolve,1000,"Hua resolve aaj0")
});
let promises1=new Promise((resolve,reject)=>
{
    setTimeout(resolve,2000,"Hua resolve aaj1")
});
let promises2=new Promise((resolve,reject)=>
{
    setTimeout(reject,3000,"Hua resolve aaj2")
});
Promise.all([promises0,promises1,promises2]).then((values)=>
{
    console.log(values);
}).catch((error)=>
{
    console.error("error: "+error);
})