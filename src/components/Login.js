import React from "react";

function Login() {
  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form">
        <label className="login__label">
          <input placeholder="Email" className="login__input"></input>
          <span className="popup__input-error" />
        </label>
        <label className="login__form">
          <input placeholder="Пароль" className="login__input"></input>
          <span className="popup__input-error" />
        </label>
        <button type="submit" className="login__button-save">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
