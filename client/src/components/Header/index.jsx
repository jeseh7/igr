import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
//import logoImage from './controller.png';//
import LoginModal from "./login";
import SignUpModal from "./sign-up";

const Header = () => {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <header className="header is-shadow">
      <div className="navbar-brand">
        {Auth.loggedIn() ? (
          <div>
            <Link
              onClick={logout}
              className="logo navbar-item has-text-weight-bold is-size-3"
            >
              Logout
            </Link>
          </div>
        ) : (
          <>
            {/*<img src={logoImage} alt="logo" />*/}
            <Link
              to="/"
              className="logo navbar-item has-text-weight-bold is-size-3"
            >
              IGR
            </Link>
            <div className="btns navbar-end">
              <LoginModal />
              <SignUpModal />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
