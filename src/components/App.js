import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contact = [
    {
      id: "1",
      name: "Yashal",
      email: "yashaal@gmail.com",
    },
    {
        id: "2",
        name: "Ali",
        email: "alii@gmail.com",
      },
  ];

  return (
    <div className="ui container">
     <Header />
     <AddContact />
     <ContactList contacts= {contacts} />
   </div>
  );
}

export default App;
