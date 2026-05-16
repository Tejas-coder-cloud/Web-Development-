/*
ERROR HANDLING 
WE HAVE TWO TYPES OF ERRORS:
1. COMPILE TIME ERROR : THIS TYPE OF ERROR IS CATCHED WHEN THE CODE IS BEING CONVERTED INTO MACHINE READABLE FORMAT
2.RUN TIME ERROR : THIS TYPE OF ERROR IS ONLY DETECTED DURING THE EXECUTION OF THE CODE 
THROW KEYWORD HELPS US TO THROW OUR OWN USER DEFINED ERROR 
GOVT ERROR CODE LIST - GOV EWAY API ERROR CODE 

*/
try{
    console.log("Try block starts here ")
 console.log(x)
 // error--> reference error
 console.log("try block ends here ")
 //a
 //b
 //c
}
catch(e)
{
    // fall back mechanism
    // retry logic
    // logging
    console.log("The catch block starts here")
    console.log("Your error is ",e)
}
finally{
    console.log("I will run everytime, as I am in finally block")
}
try
{
    console.log(y)
}
catch{
    throw new Error("Pehle declare toh kardo ")
}