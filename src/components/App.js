import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contents, setContacts] = useState([]);

    const addContactHandeler = (contact) => {
      consoul.log(contact);
    }
    return (
    <div className="ui container">
     <Header />
     <AddContact addContactHandeler={addContactHandeler}/>
     <ContactList contacts= {contacts} />
   </div>
  );
}

export default App;
