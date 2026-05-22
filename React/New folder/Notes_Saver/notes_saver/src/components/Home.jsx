import React from 'react'
import { useState } from 'react'

const Home = () => {
  const [title,setTitle]=useState('');
  return (
    <div>
      <input
      className='flex flex-row gap-4 palce-content-evenly'
       type='text'
       placeholder='Enter title'
       value={title}
       onChange={setTitle(e.target.value)}
       >

      </input>
    </div>
  )
}

export default Home
