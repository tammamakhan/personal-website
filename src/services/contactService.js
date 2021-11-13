import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import phone from "../images/phone.png";

const contactInfo = [
  {
    label: "E-mail",
    description: "tammam.a.khan@gmail.com",
    image: email,
  },
  {
    label: "Phone",
    description: "+1 (408) 506-0329",
    image: phone,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/tammam-khan17/",
    image: linkedin,
  },
];

export function getContactInfo() {
  return contactInfo;
}

const contactServiceObject = {
  getContactInfo,
};

export default contactServiceObject;
