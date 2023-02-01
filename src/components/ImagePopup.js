import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_open_img ${props.card.link && "popup_opened"}`}
    >
      <div className="popup__fullScreen">
        <figure className="popup__image-figure">
          <img
            className="popup__image"
            alt={props.card.name}
            src={props.card.link}
          />
          <figcaption className="popup__image-subtitle">
            {props.card.name}
          </figcaption>
        </figure>
        <button
          type="button"
          className="popup__button-close"
          aria-label="Закрыть фотографию"
          onClick={props.onClose}
        />
      </div>
    </div>
  );
}

export default ImagePopup;
