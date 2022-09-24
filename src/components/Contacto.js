import React from "react";

export const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>

      <div className="contact-form">
        <form
          action=""
          method="POST"
        >
          <div className="form-input-container">
            <div className="input-container">
              <div className="text-input">NOMBRE:</div>
              <input type="text" name="name" className="input" required />
            </div>
            <div className="input-container">
              <div className="text-input">LOCALIDAD:</div>
              <input type="text" name="local" className="input" required />
            </div>
            <div className="input-container">
              <div className="text-input">E-MAIL:</div>
              <input type="email" name="email" className="input" required />
            </div>
            <div className="input-container">
              <div className="text-input">CELULAR:</div>
              <input type="tel" name="phone" className="input" required />
            </div>
            <div className="input-container">
              <div className="text-area">MENSAJE:</div>
              <textarea name="mesage" className="textarea" required></textarea>
            </div>
          </div>
          <div className="form-btn-container">
            <button type="submit">
              <i className="far fa-paper-plane"></i>
              <span>ENVIAR</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
