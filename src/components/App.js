import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import AddContact from "./AddContact";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";
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
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ContactList
              contacts={contacts}
              getContactId={removeContactHandler}
            />
          }
        />
        <Route
          path="addContact"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
  );
}

export default App;
