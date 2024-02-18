import React from 'react';
import '../App.css';
import '../Project_Filter.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  

const Footer = () => (
  <footer className="footer">
    <a href="mailto:keriannwilkins@gmail.com" className="footer__link">
      Email Me
    </a>
    <ul className="social-list">
      <li className="social-list__item">
        <a className="social-list__link" href="https://github.com/kwilkinz">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li className="social-list__item">
        <a className="social-list__link" href="https://www.linkedin.com/in/keri-ann-wilkins/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul> 
  </footer>
);

export default Footer;