import React from "react";
import ContactCard from ". /ContactCard";

const ContactList = (props) => {
     console.log(props);

     const renderContactlist = props.contacts.map((contact) => {
     return <ContactCard contact={contact}></ContactCard>;
     });
     return <div className="ul celled list">{renderContactList}</div>
};
export default Contactlist;