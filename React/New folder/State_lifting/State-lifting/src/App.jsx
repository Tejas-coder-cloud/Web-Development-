import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
function App()
{
  // create state
  // manage state
  //change state
  // Will sync each child
  const[ name,setName]=useState('');
  return(
    <div>
      <Cards name={name} setName={setName}/>
      <p>I am inside parent component and the value of name is {name} </p>
    </div>

  )
}
export default App