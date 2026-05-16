/*
Here we will talk about what is the difference two codes
which code is faster and which one is slower ?
How can you write your code in a more efficient manner 
How to enhance the performance of your code ?
There is a standard way of measuring the performance of your code that is
performance.now()
It returns the time in milliseconds from the starting of the webpage load to the current code execution
reflow and repaint 
1. Reflow (Layout)
Reflow is the process where the browser calculates the position and size of all elements in the document.
Because the web uses a "flow" layout, changing one element can trigger a chain reaction that forces the browser to re-calculate the geometry of its children, siblings, and parents.
Repaint occurs when changes are made to an element's appearance that do not affect its layout or geometry. 
The browser simply "re-paints" the pixels on the screen.
code 1 took 100 reflows and repaints
code 2 took only 2 reflows and repaints
This occured because in code 2 we created a div element and appended all the paragraph elements to that div
and finally appended that div to the body
while in code 1 we appended each paragraph element directly to the body
due to which each time a paragraph was added a reflow and repaint was triggered
due to which the performance of code 1 decreased drastically
Document Fragment 
A DocumentFragment is a minimal document object that has no parent. 
It is used as a lightweight version of Document to store a segment of a document structure comprised of nodes just like a standard document.
It is used to build a subtree of nodes that can then be appended to the document in a single operation,
thus minimizing reflows and repaints.
DF doesn't take any reflows and repaints until it is appended to the main DOM

*/
// code 1
// const start=performance.now();
// for(let i=1;i<=100;i++)
// {
//     let para=document.createElement('p');
//     para.textContent="This is para number" +i;
//     document.body.appendChild(para); 
// }
// const end=performance.now();
// total_time=end-start;
// console.log("Time taken by code 1 is: " + total_time);
// code 2
// const t1=performance.now();
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++)
// {
//     let para=document.createElement('p');
//     para.textContent="This is para number" +i;
//     mydiv.appendChild(para);

// }
// document.body.appendChild(mydiv);
// const t2=performance.now();
// t=t2-t1;
// console.log("Time taken by code 2 is: "+t)
// best code 
const t1=performance.now();
let fragment=document.createDocumentFragment();
for(let i=1;i<=100;i++)
{
    let para=document.createElement('p');
    para.textContent="This is para number "+i;
    fragment.appendChild(para);
}
// The below line takes only one reflow and repaint 
document.body.appendChild(fragment);
const t2=performance.now();
t=t2-t1;
console.log("Time taken by the best code is: "+t);