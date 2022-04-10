import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

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
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
