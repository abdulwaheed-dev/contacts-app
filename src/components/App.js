import React, {useState} from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {  

  const contacts = [
    {
      id:"1",
      "name":"AbWaheed",
      "email":"abdulwaheed@gmail.com"
    },
    {
      id:"2",
      "name":"User-x",
      "email":"user-x@gmail.com"
    },
    {
      id:"3",
      "name":"User-y",
      "email":"user-y@gmail.com"
    },
    {
      id:"4",
      "name":"User-z",
      "email":"user-z@gmail.com"
    },
    {
      id:"5",
      "name":"User-l",
      "email":"user-l@gmail.com"
    }
  ]

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
