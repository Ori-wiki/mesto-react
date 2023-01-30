import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        {/*  Попап редактирования prfile__info  */}
        <div className="popup popup_edit_profile-info">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="profileForm" className="popup__form" noValidate>
              <fieldset className="popup__field">
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
                <button
                  type="submit"
                  className="popup__button popup__button-save"
                  disabled={true}
                >
                  Сохранить
                </button>
              </fieldset>
            </form>
            <button
              type="button"
              className="popup__button-close"
              aria-label="Закрыть форму редактирования"
            />
          </div>
        </div>
        {/*Попап добавления новой карточки card*/}
        <div className="popup popup_add_card">
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <form name="cardForm" className="popup__form" noValidate>
              <fieldset className="popup__field">
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
                <button
                  type="submit"
                  className="popup__button popup__button-save"
                  disabled={true}
                >
                  Создать
                </button>
              </fieldset>
            </form>
            <button
              type="button"
              className="popup__button-close"
              aria-label="Закрыть форму добавления"
            />
          </div>
        </div>
      </div>
      {/* Попап редактирования аватара */}
      <div className="popup popup_edit_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="profileFormAvatar" className="popup__form" noValidate>
            <fieldset className="popup__field">
              <label className="popup__form-field">
                <input
                  name="avatarLink"
                  id="avatar-link-input"
                  placeholder="Ссылка на картинку"
                  required
                  maxLength={200}
                  className="popup__input popup__input_data_card-link"
                  type="url"
                />
                <span className="popup__input-error avatar-link-input-error" />
              </label>
              <button
                type="submit"
                className="popup__button popup__button-save"
                disabled={true}
              >
                Сохранить
              </button>
            </fieldset>
          </form>
          <button
            type="button"
            className="popup__button-close"
            aria-label="Закрыть форму редактирования"
          />
        </div>
      </div>
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
    </>
  );
}

export default App;
