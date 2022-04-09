import React from 'react';

function Header() {
  return (
    <div className='ui menu'>
        <div className='ui container center'>
          <h2 className="ui center aligned icon header">
            <i className="address book icon" style={{marginTop:'10px' , color:"darkGreen"}}></i>
            Contacts Manager
          </h2>
        </div>
    </div>
  )
}

export default Header;