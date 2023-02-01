import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWihtForm from "./PopupWithForm.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarClick(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    console.log(setAddPlaceClick);
    setEditProfileClick(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setAddPlaceClick(!isAddPlacePopupOpen);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      {/*  Попап редактирования prfile__info  */}
      <PopupWihtForm
        title="Редактировать профиль"
        name="edit_profile-info"
        isOpen={isEditProfilePopupOpen}
      />
      {/*Попап добавления новой карточки card*/}
      <PopupWihtForm
        title="Новое место"
        name="add_card"
        isOpen={isAddPlacePopupOpen}
      />
      {/* Попап редактирования аватара */}
      <PopupWihtForm
        title="Обновить аватар"
        name="edit_avatar"
        isOpen={isEditAvatarPopupOpen}
      />
      {/* Попап открытой фотографии */}
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
      {/* Попап с подверждением удаления карточки */}
      <div className="popup popup_confrim">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <form
            name="delete-form"
            action="#"
            className="popup__form form"
            noValidate
          >
            <button
              type="submit"
              className="popup__button popup__button-save popup__button-confrim"
            >
              Да
            </button>
          </form>
          <button
            type="button"
            className="popup__button-close"
            aria-label="Поставить лайк"
          />
        </div>
      </div>
      {/*Template card*/}
      <template className="card_template" />
    </div>
  );
}

export default App;
