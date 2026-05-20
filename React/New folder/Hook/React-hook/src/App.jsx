import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form"

function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit, watch, formState: { errors,isSubmitting } } = useForm();
  async function onSubmit(data)
  {
    await new Promise((resolve)=> setTimeout(resolve,5000));
    console.log("Form submitted",data);
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      
        <label >
         First Name:  </label>
        <input type="text" {...register('Firstname', { 
          required: true, maxLength: 20 ,minLength: {value:4,message:"Minimum 4 letters required"}})} />
          {errors.Firstname && <p className='errorclass'> {errors.Firstname.message}</p>}
      </div>
      <div>
        <br/>
        <label >
         Middle Name:  </label>
        <input type="text" {...register('Middlename')} />
      </div>
      <br/>
         <div>
        <label >
         Last Name:  </label>
        <input type="text"{...register('Lastname', { 
          pattern:{
            value: /^[A-Za-z]+$/i,
            message:"Last name is not as per regex"
          }
           })} />
           {errors.Lastname && <p className='errorclass'>{errors.Lastname.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} 
       value={isSubmitting ?"Submitted" : "Submit"}/>
    </form>
    // <div>
    //  Hello Jee
    // </div>
  )
}

export default App
