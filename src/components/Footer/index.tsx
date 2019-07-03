import './Footer.css';
import React from 'react';
import {Github, LinkedIn} from '../Icons';
import {Link} from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Link to="#">
        <Github />
      </Link>
      <Link to="#">
        <LinkedIn />
      </Link>
    </div>
  );
}

export default Footer;
