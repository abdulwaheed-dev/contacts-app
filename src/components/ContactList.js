import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

function ContactList(props) {
  //console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  // let contacts = [
  //   {
  //     id: 1,
  //     name: "waheed",
  //     email: "abc@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "waheed1",
  //     email: "abcd@gmail.com",
  //   },
  // ];

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <h2>
        Contacts List
        <Link to="/addContact">
          <button className="ui button blue" style={{ float: "right" }}>
            Add New Contact
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
}

export default ContactList;
