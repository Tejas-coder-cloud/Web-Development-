import React from 'react'
import Tejasphoto from '../assets/Tejasphoto.jpg'
import './UserCards.css'
const UserCards = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name' >{props.name}</p >
      <img id= 'user-image' src={Tejasphoto} alt="Rendering...." />
      <p id='user-description'>{props.desc} </p>
      
    </div>
  )
}

export default UserCards
