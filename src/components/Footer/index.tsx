import './Footer.css';
import React from 'react';
import {Github, LinkedIn} from '../Icons';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a href="https://github.com/jhenriquez" target="_blank" rel="noopener noreferrer">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/juliohenriquez/" target="_blank" rel="noopener noreferrer">
        <LinkedIn />
      </a>
    </div>
  );
}

export default Footer;
