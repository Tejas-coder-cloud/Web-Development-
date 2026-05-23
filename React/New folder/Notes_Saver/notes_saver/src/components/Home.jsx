import React from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { updatetopaste } from '../redux/notes_saver';
import { addtopaste } from '../redux/notes_saver';
import { useDispatch } from 'react-redux';

const Home = () => {
  const [title,setTitle]=useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const PasteId = searchParams.get("PasteId")
  
  function createPaste()
  {
     const paste={
           title:title,
           content:value,
           _id:PasteId || Date.now().toString(36),
           createdAt:new Date().toISOString(), 
     }
  }
  const dispatch = useDispatch();
  if (PasteId) {
    dispatch(updatetopaste(paste))
  }
  else{
    dispatch(addtopaste(paste))
  }
  setTitle('');
  setValue('');
  setSearchParams({});
  return (
    <div>
    <div className='flex flex-row gap-9 place-content-between'>
      <input
      className='p-2 rounded-2xl mt-2
      w-[60%]'
       type='text'
       placeholder='Enter title'
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       >

      </input>
      <button className='p-2 rounded-2xl mt-2' onClick={createPaste}>
        {
          PasteId ? "Update Paste":"Create my Paste"
        }
      </button>
    </div> 
    <div className='mt-8' >
      <textarea
       className='rounded-2xl mt-4,min-w-[500px] p-4 w-[60%]'
       value={value}
       placeholder='Enter content here'
       onChange={(e)=>{setValue(e.target.value)}}
       rows={20}
      />
    </div>
    </div>
  )
}

export default Home
