import React from 'react';
import ContactBackground from '../components/ContactBackground';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className = "relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />
      <ContactBackground />
      <ContactForm />
    </div>
  );
};

export default Contact;