import React from 'react';
import style from './layout.module.css';
import Header from './header';
import Footer from './footer';

// eslint-disable-next-line react/prop-types
export default ({ children }) => (
  <div className={style.layoutroot}>
    <Header className={style.header} />
    <main className={style.main}>
      {children}
    </main>
    <Footer className={style.footer} />
  </div>
);
