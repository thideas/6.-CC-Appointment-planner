import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointments, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointments(title, contact, date, time);
    setTitle('')
    setContact('')
    setDate('')
    setTime('')

  };

  return (
    <div>
      <section>
        <h2>Add Appointments</h2>
        <AppointmentForm contacts={contacts} title={title} contact={contact} date={date} time={time} setTitle={setTitle} setDate={setDate} setTime={setTime} setContact={setContact} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList arrOfObj={appointments} />
      </section>
    </div>
  );
};