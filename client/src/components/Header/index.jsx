import React from 'react';
import logoImage from './controller.png'; // Placeholder

const Header = () => {
  return (
    <header className="header is-shadow">
      <div className="navbar-brand">
        <img src={logoImage} alt="logo" />
        <a href="index.html" className="logo navbar-item has-text-weight-bold is-size-3">IGR</a>
        <div className="btns navbar-end">
          <button id="login-btn" className="btn has-text-weight-bold">Login</button>
          <button id="sign-btn" className="btn has-text-weight-bold">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
