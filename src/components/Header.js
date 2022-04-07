import React from 'react';

function Header() {
  return (
    <div className='ui menu'>
        <div className='ui container center'>
          <h2 class="ui center aligned icon header">
            <i class="address book icon" style={{marginTop:'10px' , color:"darkGreen"}}></i>
            Contacts Manager
          </h2>
        </div>
    </div>
  )
}

export default Header;