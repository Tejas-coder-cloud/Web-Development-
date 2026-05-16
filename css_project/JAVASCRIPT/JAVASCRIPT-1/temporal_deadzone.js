/*
temporal dead zone is nothing but one should use let and const in the js file instead of var
because it helps in predicting whether a varibale is declared or not 
since var doesn't support block scope
by default all variables of a class are public
using '#' we can declare a variable as private 
getters and setters means the methods of a class declared with get and set are not actual functions
they are accessed in the same way as that of an attribute 
*/
function sayName(name="prabhu deva")
{
    console.log("Printing the name: ",name)
}
sayName()
class Human{
    age=25
    height=180
    #wt=80
    constructor(newAge,newHeight) {
        this.age=newAge
        this.height=newHeight        
    }
    walking()
    {
        // return console.log("I am walking",this.#wt)
         return `I am walking,${this.#wt}`
    }
    running()
    {
        console.log("I am running")
    }
    get fetchweight()
    {
        return this.#wt
    }
    set modifyweight(val)
    {
        this.#wt=val

    }
}
let obj=new Human(50,160)
console.log(obj.age)
// console.log(obj.walking())
// obj.modifyweight=23
// obj.fetchweight
// console.log(obj.height)
// console.log(Math.PI)
// console.log(Math.max(60,30,10))
// console.log(Math.ceil(1.4))
// console.log(Math.floor(1.2))
// console.log(Math.random())
let date=new Date()
new Date()
console.log(date)
let newDate=new Date(2006,7,6,8)
console.log(newDate)
