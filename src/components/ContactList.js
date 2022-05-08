import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  //console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  let contacts = [
    {
      name: "waheed",
      email: "abc@gmail.com",
    },
    {
      name: "waheed1",
      email: "abcd@gmail.com",
    },
  ];

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="ui celled list">
      <h2>Contacts List</h2>
      {renderContactList}
    </div>
  );
}

export default ContactList;
