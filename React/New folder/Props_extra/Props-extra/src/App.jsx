
import { useState } from 'react'
import './App.css'
import Props from './components/Props'
import Button from './components/Button';

function App() {
 const[count,setCount]=useState(0);
 function handleclick()
 {
  setCount(count+1);
 }

  return (
    <div>
      <h1>Count is: {count}</h1> {/* Added this so you can see it work! */}
        <Button incrementcount={handleclick}
        text="Click me"/>
    {/* <Props name='Tejas'>
      <div>Best website</div>
      <h1>Nice </h1>
    </Props>
    <Props children="Mai ek children hu">
      What is the time?
    </Props> */}
        
    </div>
  )
}

export default App
