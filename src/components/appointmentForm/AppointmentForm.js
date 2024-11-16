import React from "react";
import { ContactPicker } from '../../components/contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {


  const selector = { title: setTitle, date: setDate, time: setTime, contact: setContact }

  const handleChange = (e) => {
    console.log(e.target.name)
    selector[e.target.name](e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" value={title} onChange={handleChange} />
        <input type="text" placeholder="Date" name="date" value={date} onChange={handleChange} />
        <input type="text" placeholder="Time" name="time" value={time} onChange={handleChange} />
        <ContactPicker contacts={contacts} handleChange={handleChange} value={contact} />
        <button type="submit" style={{ backgroundColor: '#1a8bdb', padding: '10px 20px', color: 'white', borderRadius: '5px', border: 'none' }}>Submit button</button>
      </form>
    </>
  );
};
