// JS DOM Manipulation
// there is a global object named window in javascript .The browser creates this global object 
// DOM --> Document Object Model
/*
window is the top level object
window.open()
window.close()
window.console.log("Tejas")
let paraelement=document.getElementById("#sPara")->error
let paraelement=document.getElementById("sPara")
undefined
paraelement
<p id=​"sPara" style=​"background-color:​ orange ;​ padding:​0.9rem;​">​ Second Para ​</p>​
console.log(paraelement.style);
If you wanna change style of a javascript then its syntax is as follows:
element_name.style.property_name=value 
for eg . 
paraelement.style.backgroundColor='brown';
for this you need to first fetch the element by using the getElementById or other functions 
let secondelement=document.getElementById('SecondDiv');
secondelement.style.cssText--> This helps in accessing all the style properties which one has applied to the element also we can change the properties
The diff. between cssText and style is that style fetches only one property while 
if we wanna fetch multiple properties then we can do it with the help of cssText
let firstelement=document.querySelector('#firstdiv')
undefined
firstelement
<div id=​"firstdiv" style=​"background-color:​ rgb(34, 220, 233)​;​ padding:​ 2rem;​">​…​</div>​
firstelement.setAttribute('class','divclass');
undefined
firstelement
firstelement.setAttribute('style','padding:0.1rem')
id_name.className helps to access the class assigned to a tag
id_name.className="class_name" helps in assigning a class to a tag 
classList attribute provides an array of classes assigned to a variable 
let fpara=document.querySelector('#fpara');
undefined
fpara
<p id=​"fpara" style=​"background-color:​ rgb(5, 204, 55)​;​ padding:​1rem;​" class=​"goku vegeta">​ First Para ​</p>​
fpara.classList
DOMTokenList(2) ['goku', 'vegeta', value: 'goku vegeta']
fpara.classList.add('thirdclass');
undefined
fpara.classList
DOMTokenList(3) ['goku', 'vegeta', 'thirdclass', value: 'goku vegeta thirdclass']
fpara.classList.remove('thirdclass');
undefined
fpara.classList
DOMTokenList(2) ['goku', 'vegeta', value: 'goku vegeta']
fpara.classList.toggle('vegeta');
false
fpara.classList
DOMTokenList ['goku', value: 'goku']
fpara.classList.contains('vegeta')
false
fpara.classList
DOMTokenList ['goku', value: 'goku']
add--> adds a new class
remove--> removes an existing class
toggle->> if a class is present then it will remove else it will add
contains --> checks whether a class is present or not 
*/
let mydiv=document.querySelector('#mydiv')
let newElement=document.createElement('span')
newElement.textContent="This is Tejas"
mydiv.insertAdjacentElement('afterbegin',newElement)
let parent=document.querySelector('#mydiv')
let child=document.querySelector('#fpara')
parent.removeChild(child)



