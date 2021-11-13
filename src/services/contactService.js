import linkedin from "../logos/linkedin.png";
import email from "../logos/email.png";
import phone from "../logos/phone.png";

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

const contactInfoObject = {
  getContactInfo,
};

export default contactInfoObject;
