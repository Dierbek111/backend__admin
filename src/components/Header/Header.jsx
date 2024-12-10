import s from './Header.module.scss';
import React from 'react';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.logo}>Brand</div>
        <nav className={s.nav}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className={s.ctaButton}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
