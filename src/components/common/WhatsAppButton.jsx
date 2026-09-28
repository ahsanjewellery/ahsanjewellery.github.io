import React from 'react';
import '../../styles/whatsapp-float.css'; // Apni CSS file ka path yahan dein

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/923000000000?text=Hi%20Ahsan%20Jewellery,%20I%20have%20an%20inquiry.";
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      title="Chat with us on WhatsApp"
    >
      💬
    </a>
  );
};

export default WhatsAppButton;