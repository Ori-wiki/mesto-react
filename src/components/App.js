import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      console.log(currentUser);
      setCurrentUser(res);
    });
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarClick(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setEditProfileClick(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setAddPlaceClick(!isAddPlacePopupOpen);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setEditAvatarClick(false);
    setEditProfileClick(false);
    setAddPlaceClick(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {/*  Попап редактирования prfile__info  */}
      <PopupWithForm
        title="Редактировать профиль"
        name="edit_profile-info"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__form-field">
          <input
            name="name"
            id="name-input"
            placeholder="Имя"
            required
            minLength={2}
            maxLength={40}
            className="popup__input popup__input_data_name"
            type="text"
          />
          <span className="popup__input-error name-input-error" />
        </label>
        <label className="popup__form-field">
          <input
            name="profession"
            id="profession-input"
            placeholder="Профессия"
            required
            minLength={2}
            maxLength={200}
            className="popup__input popup__input_data_profession"
            type="text"
          />
          <span className="popup__input-error profession-input-error" />
        </label>
      </PopupWithForm>
      {/*Попап добавления новой карточки card*/}
      <PopupWithForm
        title="Новое место"
        name="add_card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <label className="popup__form-field">
            <input
              name="cardName"
              id="card-name-input"
              placeholder="Название"
              required
              minLength={2}
              maxLength={30}
              className="popup__input popup__input_data_card-name"
              type="text"
            />
            <span className="popup__input-error card-name-input-error" />
          </label>
          <label className="popup__form-field">
            <input
              name="cardLink"
              id="card-link-input"
              placeholder="Ссылка на картинку"
              required
              maxLength={200}
              className="popup__input popup__input_data_card-link"
              type="url"
            />
            <span className="popup__input-error card-link-input-error" />
          </label>
        </>
      </PopupWithForm>
      {/* Попап редактирования аватара */}
      <PopupWithForm
        title="Обновить аватар"
        name="edit_avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__form-field">
          <input
            name="avatarLink"
            id="avatar-link-input"
            placeholder="Cсылка на картинку"
            required
            maxLength={200}
            className="popup__input popup__input_data_card-link"
            type="url"
          />
          <span className="popup__input-error avatar-link-input-error" />
        </label>
      </PopupWithForm>
      {/* Попап открытой фотографии */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      {/* Попап с подверждением удаления карточки */}
      {/* <div className="popup popup_confrim">
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
      </div> */}
    </div>
  );
}

export default App;
