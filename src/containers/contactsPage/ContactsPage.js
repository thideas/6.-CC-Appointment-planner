import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  let [name, setName] = useState('');
  let [phone, setPhone] = useState('');
  let [email, setEmail] = useState('');
  let [duplicate, setDuplicate] = useState(false)







  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if (!duplicate && name && phone && email) {
      addContact(name, phone, email);
      setName('');
      setPhone('')
      setEmail('')
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if (contacts.length > 0) {
      const names = contacts.map(i => i[name]);
      names.findIndex(item => name === item) > -1 ? setDuplicate(true) : setDuplicate(false);
    }

  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arrOfObj={contacts} />
      </section>
    </div>
  );
};
