import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form"

function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <div>
     Hello Jee
    </div>
  )
}

export default App
