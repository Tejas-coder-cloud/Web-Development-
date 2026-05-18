import React, { useContext, useState } from 'react'
// import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user=useContext(ThemeContext);
    function handleclick()
    {
      if(theme=='light')
      {
        setTheme('dark');
      }
      else
      {
        setTheme('light');
      }

    }
    const {theme,setTheme}=useContext(ThemeContext);
  return (
    <div>
      <button onClick={handleclick}> Change Theme</button>
    </div>
  )
}

export default ChildC
