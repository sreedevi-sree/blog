import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <address>
        <LocationOnIcon />    17,Puliadi Street <br />
        Vadasery<br />
        Nagercoil<br />
        kanyakumari<br />
        629001<br />
        <PhoneIcon />  8072962127<br />
        <EmailIcon />  sreedevi04@gmail.com
        <div className="icons">
          <WhatsAppIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </address>
    </div>
  );
}
