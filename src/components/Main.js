import React from "react";

import api from "../utils/Api.js";
import Card from "./Card.js";

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
    api.getCards().then((res) => {
      setCards(res);
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
              <Card
                card={card}
                key={card._id}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
