/*
events --> they are nothing but announcements 
monitorEvents(document)--> helps to  list all the events of the website/webpage as you scroll or click  
unmonitorEvents(document)--> disables the above function 
fpara.removeEventListener(event_name,function_name)--> used to remove the event listener
The function  used for removing the EventListener must be the same as the one used for adding it 
The most optimal way of doing this is to define a function before adding an EventListener and then writing the name of the 
function while adding and remove the same event listener
We can't just write the same body of the function in while adding and removing as the same function would be considered 
as two different objects 
Phases of Event:
Capturing phase 
At-target phase 
Bubbling phase
Event Object 
Default actions
function changeText(event)
{
    console.log(event);
    let fpara=document.getElementById('fpara');
    fpara.textContent="Hello Babbar";
}
let fpara=document.getElementById('fpara');
fpara.addEventListener('click',changeText);
Avoiding too many listener 

*/
// let anchorelement=document.getElementById('fanchor');
// function no_default(event)
// {
//     event.preventDefault();
//     anchorelement.textContent="Click done bhai";
// }
// anchorelement.addEventListener('click',no_default);
function clicked(event)
{
    if(event.target.nodeName ==='SPAN')
    {
        alert("You have clicked on para:" + event.target.textContent);
    }
}
// let paras=document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++)
// {
//     let para=paras[i];
//     console.log("event added ")
//     para.addEventListener('click',clicked);
// }
let mydiv=document.getElementById('wrapper');
document.addEventListener('click',clicked)

