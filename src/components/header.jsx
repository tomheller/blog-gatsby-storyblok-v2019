import { StaticQuery, graphql } from 'gatsby';
import propTypes from 'prop-types';
import React from 'react';
import style from './header.module.css';

const Header = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        storyblokSpace {
          name
        }
      }
    `}
    render={data => (
      <div className={`${className} ${style.header}`}>
        <div style={{ maxWidth: '75ch' }}>
          <p className={style.pageTitle}>
            <a href="/">{data.storyblokSpace.name}</a>
          </p>
        </div>
      </div>
    )}
  />
);

Header.propTypes = {
  className: propTypes.string.isRequired,
};

export default Header;
