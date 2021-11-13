import React, { useState, useEffect } from "react";
import { getContactInfo } from "../services/contactService";
import ContactItem from "./common/contactItem";
import PageDescription from "./common/pageDescription";
import PageTitle from "./common/pageTitle";
import Sources from "./common/sources";

function Contact() {
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    setContactInfo(getContactInfo());
    return () => {};
  }, []);

  return (
    <div className="centerContainer">
      <div className="container" style={{ paddingBottom: 5 }}>
        <PageTitle title="Contact me" />
        <PageDescription description="Want to get in touch? Here's a few ways you can reach out to me..." />
        <hr />
      </div>
      <div className="row">
        {contactInfo.map((info) => (
          <div className="col" key={info.label}>
            <ContactItem
              label={info.label}
              link={info.link}
              description={info.description}
              image={info.image}
            />
          </div>
        ))}
      </div>
      <Sources />
    </div>
  );
}

export default Contact;
