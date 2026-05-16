/*
If the html code is converted into the java script object and then this js object is known as document
then this entire model is known as document object model 
any thing written between the angular brackets(<>) is a sequence of characters(string)
but then this code is  nothing but a collection of tags 
there is a concept known as tokenizer which converts it into nodes just like a tree structure 
if you want to open a new window then we can write window.open() in the console tab of  browser after right clicking using 
mouse and then clicking on inspect 
If I want to close the window then we can write window.close()
There is a window object  which is present at the top of the root element 
Now this root element is the variable which has a global scope
all the variables whether they are global scoped or block scoped come under this window object 
You can treat anything as a  window say the browser which you open on google can also be considered as window
as you type document  the console window by inspeting the entire window then you get the entire html content 
of the page
If there are two tags say one is inner tag and another is outer tag 
say eg.
<html>
<head> 
I am tejas
</head>
</html>
so here html is outer tag also known as the parent tag 
and head tag is an inner tag also known as the child tag 
so what happens is the tokenizer creates a graph structure where html acts as the parent node and all the 
tags embedded in it are known as child nodes 
The window object comprises of 3 major elements :
1. DOM(Document Object Model)
2.BOM(Browser Object Model)
3. JS core feature =s like math , array etc.
Now let's talk about BOM (Browser Object Model) 
Whatever interaction we have with the browser leaving the html code eg. navigation , search history comes under the BOM
It is a like a path for communication with the browser 
If one wants to chnge the html content using js then it can be done by accessing the id or classname or tagname 
If one needs to acces a particular element by id then we can simply write in the console tab 
document.getElementsById("id_name")
If one needs to acces a particular element by classname then we can simply write in the console tab 
document.getElementsByClassName("class_name")
If one needs to acces a particular element by tagname then we can simply write in the console tab 
document.getElementsByTagName("tag_name")
Queryselector acts as a universal method used to access element by tagname,classname,idname 
for id use #
for class use .
for tag use tagname 
document.querySelector("#firstPara")
querySelector() method has a drawback say you have 5 tags with the same class name or id and you use the querySelector method 
then the querySelector method returns only the first object assosciated with the class name or id name 
To avoid such things to occur  we can use querySelectorAll() method so that we could get all the objects 
associated with the particualr tagname or class name or idname 
using the let keyword we can assign the value $0 and using the innerHTML we can get the code inside the para variable 
basically innerHTML attribute is used for updating the content of html 
let p=document.getelementById('firstPara')
p.innerHTML='<p>"hello jee kaise ho saare"</p>'
for updating the content there are 4 ways :
innerHTML 
outerHTML 
innerText
textContent
innertext checks how your code is displayed to the user 
textcontent will enter how you have written the html code 
For adding code  first we create a chid using the createElement .Here we are basically creating a tag of the html 
in the html tag we add the content using the textcontent attribute if we want to add the content then we 
first create an object of the parent tag means we create an object of the tag where we are inserting the content 
parent_tag_object.appendChild(child_object)
the above is the way through which we actually add the content . The content are added at the end 
If you want to add the element in a specific location with respect to a parent tag 
then we have a method known as insertAdjacentHTML('position',element_to_be_added)
position=beforebegin,afterbegin,beforeend,afterend 
document.querySelector('#fdiv')
element.textContent
let element=document.querySelector('#fdiv')
element.innerText
let fheading=document.createElement("h1")
fheading
fheading.textContent="My name is Love Babbar"
let bodyTag=document.querySelector('body')
let element=document.querySelector('#fdiv')
undefined
let mydiv=document.querySelector('#mydiv')
undefined
mydiv
<div id=​"mydiv">​<p>​First​</p>​<h1>​Second​</h1>​<p>​Third ​</p>​</div>​
let newElement=document.createElement('span')
undefined
newElement.textContent="THis is Tejas"
'THis is Tejas'
newElement
<span>​THis is Tejas​</span>​
mydiv.insertAdjacentElement('beforebegin',newElement)

*/