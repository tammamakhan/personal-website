import React, { useState } from "react";
import { getContactInfo } from "../services/contactService";

function Contact() {
  const [contactInfo] = useState(getContactInfo());

  return (
    <div className="centerContainer">
      {contactInfo.map((info) => (
        <div key={info.label}>
          <h3>{info.label}</h3>
          <p>{info.link}</p>
        </div>
      ))}
    </div>
  );
}

export default Contact;
