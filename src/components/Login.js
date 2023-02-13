import React from "react";

function Login() {
  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form">
        <label className="auth__label">
          <input placeholder="Email" className="auth__input"></input>
          <span className="popup__input-error" />
        </label>
        <label className="auth__form">
          <input placeholder="Пароль" className="auth__input"></input>
          <span className="popup__input-error" />
        </label>
        <button type="submit" className="auth__button-save">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
