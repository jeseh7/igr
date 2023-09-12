import React, { useState } from 'react';

const LoginModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <>
      <button id="login-btn" className="btn has-text-weight-bold" onClick={openModal}>
        Login
      </button>

      <div className={`modal ${isVisible ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <h1 className="modal-card-title">Login</h1>
            <button className="delete" aria-label="close" onClick={closeModal}></button>
          </header>
          <section className="modal-card-body">
            
            <form>
            <p className="username">Username</p>
            <input className="input" type="text" placeholder="Username" />
            <p className="password">Password</p>
            <input className="input" type="password" placeholder="Password" />
            <button>Login</button>
            </form>

          </section>
        </div>
      </div>
    </>
  );
};

export default LoginModal;