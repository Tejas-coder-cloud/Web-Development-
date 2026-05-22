import { useEffect, useState ,useRef} from 'react'

import './App.css'

function App() {
//   const [count, setCount] = useState(0);
//   let val=useRef(0);
//   let btnRef=useRef();
//  function handleClick()
//  {
//    val.current=val.current+1;
//    console.log("Value of val is: ",val);
//   setCount(count+1)
//  }
//  function changecolor()
//  {
//    btnRef.current.style.backgroundColor='orange'
//  }
//  useEffect(()=>
// {
//   console.log("I am rendered again")
// })
let timeRef=useRef(null)
const [time,setTime]=useState(0);
function startTimer()
{
  timeRef.current=setInterval(()=>{setTime(time=>time+1)},1000);

}
function stopTimer()
{
  clearInterval(timeRef.current)
  timeRef.current=null
}
function resetTimer()
{
  stopTimer();
  setTime(0);

}
  return (
 
     <div>
      {/* <button  ref= {btnRef} onClick={handleClick}> Increment
      </button>
      <br />
      <button  onClick={changecolor}> Change color of 1st button</button>
      <br />
      <div>Count : {count}</div> */}
      <h1> Stopwatch: {time} seconds</h1>
      <button onClick={startTimer}> start</button>
      <br /> <br />
      <button onClick={stopTimer}> stop</button>
      <br /> <br />
      <button onClick={resetTimer}> reset  </button>
     </div>
  )
}

export default App
