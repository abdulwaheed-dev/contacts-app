import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import { uuid } from "uuidv4";
import { v4 as uuid } from "uuid";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";
import NavBar from "./NavBar";
import NotFound from "./NotFound";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
    console.log(contact);
  };

  const removeContactHandler = (id) => {
    const newcontactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newcontactList);
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrievedContacts) setContacts(retrievedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="contactList" element={<ContactList />} />
        <Route path="addContact" element={<AddContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
  );
}

export default App;
