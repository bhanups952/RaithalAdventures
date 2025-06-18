import React from 'react';

const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4064.447406213844!2d78.60373037607783!3d30.81806518150268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39088b26136af7d3%3A0x2b6432eeab6adf5d!2sRaithal%20Barbeque%20Homestay!5e1!3m2!1sen!2sin!4v1750239593495!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Raithal Barbeque Homestay Location"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
