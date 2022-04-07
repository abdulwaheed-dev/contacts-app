import React from 'react';
import user from '../images/user.png'

function ContactCard(props) {
  const {id, name, email} = props.contact;
  return (
    <div className='item'>
        <img className='ui image avatar' src={user} alt="userImage"/>
        <div className='content'>
          <div className='header'>{name}</div>
          <div>{email}</div>
        </div>
        <i className='trash alternate outline icon' style={{color:"red" , float:"right", marginRight:"20px", marginTop:"10px"}}></i>
      </div>
  )
}

export default ContactCard;