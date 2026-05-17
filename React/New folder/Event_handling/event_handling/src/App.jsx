import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function handleClick()
  {
    alert("I am clicked");

  }
  function handleMouse()
  {
    alert("Mouse is pointing towards para ")
  }
  function handleinput(e)
  {
    console.log("Input value changed",e.target.value);

  }
  function handlesubmit(e)
  {
    e.preventDefault();
    alert("Do you want to submit the form")
  }

  return (
    <div>
      <button onClick={()=>alert("Button got clicked ")}>
        Click me

      </button>
      {/* <form onSubmit={handlesubmit}>
        <input type='text' onChange={handleinput}/>
        <button type='submit' >Submit </button> */}
      {/* </form> */}
      {/* <p onMouseOver={handleMouse} style={{color:"red",border:"2px solid black"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi.

      </p>
      <button onClick={handleClick}>
        Click me 
      </button> */}

    </div>
  )
}

export default App
