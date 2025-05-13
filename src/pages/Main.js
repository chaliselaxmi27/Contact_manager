import React, { useState } from "react";
import ContactAdder from "../components/ContactAdder";
import Contacts from "../components/Contacts";
import NavBar from "../components/NavBar";

const Main = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contact, setContact] = useState(getContacts ? getContacts : []);

  const contacthandler = (contactdata) => {
    const allcontact = [contactdata, ...contact];
    setContact(allcontact);
    localStorage.setItem("contacts", JSON.stringify(allcontact));
  };
  const clearhandler = () => {
    localStorage.clear();
    setContact([]);
  };

  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactadded={contacthandler} />
        <div className="contactmap">
          <h5>CONTACTS LIST</h5>

          {contact.map((data) => (
            <Contacts key={data.id} data={data} />
            
          ))}
          
        </div>
        <button onClick={clearhandler}>clear all contacts</button>
      </div>
    </>
  );
};

export default Main;
