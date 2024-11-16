import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {


  const handleChange = (e) => {

    const setterSelector = { name: setName, phone: setPhone, email: setEmail };
    setterSelector[e.target.name](e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="name" name="name" value={name} onChange={handleChange} type="text"></input>
        <input placeholder="phone" name="phone" value={phone} onChange={handleChange} type="number" pattern="\d{6,}"></input>
        <input placeholder="email" name="email" value={email} onChange={handleChange} type="email"></input>
        <button type="submit" style={{ backgroundColor: '#1a8bdb', padding: '10px 20px', color: 'white', borderRadius: '5px', border: 'none' }}>Submit button</button>
      </form >


    </>
  );
};

