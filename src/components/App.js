import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);
  React.useEffect(() => {
    api.getCards().then((res) => {
      setCards(res);
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
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    console.log("qwe");
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }
  function handleUpdateUser(data) {
    console.log("qwe");
    console.log(data);

    api.setUserInfo(data).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    });
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        {/*  Попап редактирования prfile__info  */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
