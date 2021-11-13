import React from "react";

const ContactItem = ({ label, link, description, image }) => {
  return (
    <div className="card border-0 bg-light centered">
      <img
        src={image}
        className="card-img-top roundImg"
        alt="Contact Logo"
      ></img>
      <div className="card-body">
        <h4 className="card-title">{label}</h4>
        {link && (
          <a href={link} className="card-text">
            {link}
          </a>
        )}
        {description && <p className="card-text">{description}</p>}
      </div>
    </div>
  );
};

export default ContactItem;
