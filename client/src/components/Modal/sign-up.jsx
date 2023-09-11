import React, { useState } from 'react';

const SignUpModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <>
      <button id="sign-btn" className="btn has-text-weight-bold" onClick={openModal}>
        Sign Up
      </button>

      <div className={`modal ${isVisible ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <h1 className="modal-card-title">Sign Up</h1>
            <button className="delete" aria-label="close" onClick={closeModal}></button>
          </header>
          <section className="modal-card-body">
            
            <form>
            <p class="email">Email</p>
            <input className="input" type="text" placeholder="example@mail.com" />
            <p className="username">Username</p>
            <input className="input" type="text" placeholder="Username" />
            <p className="password">Password</p>
            <input className="input" type="text" placeholder="Password" />
            <button>Login</button>
            </form>

          </section>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;