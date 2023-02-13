import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
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
          Зарегистрироваться
        </button>
      </form>
      <p className="auth__paragraph">
        Уже зарегистрированы?{" "}
        <Link className="auth__link" to="/sign-in">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
