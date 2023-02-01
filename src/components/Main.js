import React from "react";

import avatar from "../images/avatar.png";

function Main(props) {
  console.log(props.name);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box">
          <img src={avatar} alt="Аватар" className="profile__avatar" />
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar-edit-button"
            aria-label="Загрузить новый аватар"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Имя</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__info-edit-button"
            type="button"
            aria-label="Редактировать профиль"
          />
          <p className="profile__profession">Немного о себе</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="Добавить картинку"
        />
      </section>
      <section className="cards">
        <ul className="cards__list" />
      </section>
    </main>
  );
}

export default Main;
