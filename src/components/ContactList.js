import React from "react";
import ContactCard from ". /ContactCard";

const ContactList = (props) => {
     console.log(props);

  const deleteContactHandeler = (id) => {
    props.getContact(Id);
  };
    const renderContactlist = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandeler={deleteContactHandeler} key={ contact.id}/>;
  });
  return <div className="ui called list">{renderContactList}</div>
};

export default Contactlist;
