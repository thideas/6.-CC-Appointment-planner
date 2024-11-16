import React from "react";

export const ContactPicker = ({ contacts, value, handleChange }) => {
  return (
    <>
      <select name="contact" value={value} onChange={handleChange}>
        <option value="">No contact selected</option>
        {contacts.map(item => <option value={item.name}>{item.name}</option>)}
      </select>
    </>
  );
};
