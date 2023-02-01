import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="card">
      <div
        className="card__list-img"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      ></div>
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
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
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
