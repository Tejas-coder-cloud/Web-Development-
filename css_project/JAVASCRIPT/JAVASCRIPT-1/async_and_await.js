/*
Async-await helps you to use your asynchronous code as synchronous code 
In web development, the Fetch API is a modern, powerful interface used to make network requests (like getting data from a server) directly from the browser.
It provides a more flexible and feature-rich replacement for the older XMLHttpRequest (AJAX) method.
Async-await helps you to handle promises in an efficient way 
Async function always returns a promise
json placeholder--> fetch api 
*/
// async function getdata()
// {
//     setTimeout(function() {
//         console.log("I am in settimeout block");
//     },3000)
// }
// getdata();
async function getdata()
{
    // get request--> async 
    let response= await fetch('https://jsonplaceholder.typicode.com/posts');
    // parse json--> async
    let data=await response.json();
    console.log(data);
}
getdata();
/*
scenario
prepare url /api  endpoint--> sync
fetch data--> network call--> async--> await 
process data--> sync
await helps to control the flow of execution unless the code which is marked as await 
doesn't  execute completely 
You can mark a part of code as await only in async functions
*/
