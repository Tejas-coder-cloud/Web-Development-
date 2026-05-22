import { useState } from 'react'
import './App.css'
import Child from './components/Child';
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleclick = useCallback(() => {
    setCount(count + 1);
  },[count]);

  return (
    <div>
      <div>
        Count: {count}
      </div>
      <br /> <br />
      <div>
        <button onClick={handleclick}> Click me to increment</button>
        <br /> <br />
      </div>
      <div>
        <Child
          buttonname="Click me"
          handleclick={handleclick}
        />
      </div>
      <br /> <br />
    </div>
  )
}

export default App
