import React from "react";

function ImagePopup(props) {
  return (
    <div className="popup popup_open_img">
      <div className="popup__fullScreen">
        <figure className="popup__image-figure">
          <img className="popup__image" alt="Фото в попапе из карточки" />
          <figcaption className="popup__image-subtitle" />
        </figure>
        <button
          type="button"
          className="popup__button-close"
          aria-label="Закрыть фотографию"
        />
      </div>
    </div>
  );
}

export default ImagePopup;
