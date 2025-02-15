import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { AboutIcons } from "../styles/AboutStyles";

const AboutContact = () => {
  return (
    <AboutIcons>
      <a href="mailto:jiangr0421@gmail.com">
        <FaEnvelope /> jiangr0421@gmail.com
      </a>
      <a href="tel:+16466732245">
        <FaPhoneAlt /> +1 646-673-2245
      </a>
      <a
        href="https://github.com/Ryanj-code"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> github.com/Ryanj-code
      </a>
      <a
        href="https://linkedin.com/in/ryan-jiang-cs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin /> linkedin.com/in/ryan-jiang-cs
      </a>
    </AboutIcons>
  );
};

export default AboutContact;
