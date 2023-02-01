import React from "react";

import avatar from "../images/avatar.png";

import api from "../utils/Api.js";

function Main(props) {
  const [userName, setUserName] = React.useState("Имя");
  const [userDescription, setUserDescription] =
    React.useState("Немного о себе");
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  }, []);
  React.useEffect(() => {
    console.log(api);
    api.getCards().then((res) => {
      setCards(res);
      console.log(cards);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box">
          <div
            // src={userAvatar}
            alt="Аватар"
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar-edit-button"
            aria-label="Загрузить новый аватар"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__info-edit-button"
            type="button"
            aria-label="Редактировать профиль"
          />
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="Добавить картинку"
        />
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <li className="card">
                <div
                  className="card__list-img"
                  style={{ backgroundImage: `url(${card.link})` }}
                ></div>
                <div className="card__info">
                  <h2 className="card__title">{card.name}</h2>
                  <button
                    type="button"
                    title="Удалить карточку"
                    className="card__delete-button"
                  />
                  <div className="card__box">
                    <button
                      type="button"
                      className="card__like-button"
                      aria-label="Поставить лайк"
                    />
                    <span className="card__like-counter">
                      {card.likes.length}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
