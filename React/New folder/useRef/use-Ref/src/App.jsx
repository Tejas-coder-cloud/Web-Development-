import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let val=1;
 function handleClick()
 {
   val=val+1;
   console.log("Value of val is: ",val);
  setCount(count+1)
 }
 useEffect(()=>
{
  console.log("I am rendered again")
})
  return (
 
     <div>
      <button onClick={handleClick}> Increment
      </button>
      <br />
      Count : {count}
     </div>
  )
}

export default App
