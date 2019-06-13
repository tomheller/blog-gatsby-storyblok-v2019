import React from 'react';
import * as dateformat from 'dateformat';
import propTypes from 'prop-types';
import style from './footer.module.css';

const Footer = ({ className }) => {
  const year = dateformat(Date.now(), 'yyyy');
  return (
    <footer className={`${className} ${style.footer}`}>
      <p>
        <span>Find me on:</span><br />
        <a href="https://twitter.com/Haroldchen">Twitter</a> | <a href="https://github.com/TomHeller">Github</a>
      </p>
      <p>
        &copy; {year} Thomas Heller
      </p>
    </footer>
  );
};

Footer.propTypes = {
  className: propTypes.string.isRequired,
};

export default Footer;
