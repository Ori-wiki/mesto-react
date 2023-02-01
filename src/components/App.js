import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWihtForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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
      <PopupWihtForm
        title="Редактировать профиль"
        name="edit_profile-info"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      ></PopupWihtForm>
      {/*Попап добавления новой карточки card*/}
      <PopupWihtForm
        title="Новое место"
        name="add_card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      ></PopupWihtForm>
      {/* Попап редактирования аватара */}
      <PopupWihtForm
        title="Обновить аватар"
        name="edit_avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      ></PopupWihtForm>
      {/* Попап открытой фотографии */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
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
    </div>
  );
}

export default App;
