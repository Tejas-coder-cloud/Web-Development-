/*
for creating a closure you require a function and data required 
required data is also known as lexical scope or surronding state 



*/
let name="Manish";
function outerfunction() {
  let name = "Tejas"; // let --> block scoped
  function innerfunction() {
    let name="Tejas1"
    console.log(name); 
  }
  return innerfunction;
}
let inner=outerfunction();
inner();