import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contact";
  const [contants, setContacts] = useState([]);

    const addContactHandeler = (contact) => {
      consoul.log(contact);
      setContacts([...contacts, contact])
    };

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
    }, [contacts]);
    return (
    <div className="ui container">
     <Header />
     <AddContact addContactHandeler={addContactHandeler}/>
     <ContactList contacts= {contacts} />
   </div>
  );
}

export default App;
