import React, {useState} from 'react';

function AddContact() {

  return (
    <div className='ui main'>
        <h2>Add New Contact</h2>
        <form className='ui form'>
            <div className='field'>
                <label>Name</label>
                <input type="text" name="name" placeholder='Enter your Name' />
            </div>
            <div className='field'>
                <label>Email</label>
                <input type="text" name="email" placeholder='Enter your Email' />
            </div>
            <button className='ui button blue'>Add Contact</button>
        </form>
    </div>
  )
}

export default AddContact;