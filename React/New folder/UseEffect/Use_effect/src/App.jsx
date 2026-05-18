import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total,setTotal]=useState(1);
  /*
    first--> useeffect function
    second--> cleanup function
    third--? dependency array
    variation 1
    runs on every render
      useEffect(() => {
      alert("Will run on each render ")
      })
      Variation 2
      that runs on first render only 
      useEffect(() => {
      alert("Will run on first render ")
      },[])
      variation 3:
      runs when count is changed
      useEffect(() => {
      alert("Will run untill count is changed ")
      },[count])
      variation 4:
      Multiple dependencies 

   */
      useEffect(() => {
      alert("Will run untill count is changed ")
      },[count,total])
    
   

  
   function handleclick()
   {
     setCount(count+1);
     
   }
   function handleTotal()
   {
    setTotal(total+1);
   }
  return (
   <div>
    <button onClick={handleclick}>Click me</button>
    <br/>
    Count is: {count }
    <br/>
   <button onClick={handleTotal}>Click me</button>
    <br/>
    Count is: {total }
   </div>
  )
}

export default App
