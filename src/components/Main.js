import avatar from "../images/avatar.png";

function handleEditAvatarClick() {
  console.log("qwe");
  document.querySelector(".popup_edit_avatar").classList.add("popup_opened");
}
function handleEditProfileClick() {
  document
    .querySelector(".popup_edit_profile-info")
    .classList.add("popup_opened");
}
function handleAddPlaceClick() {
  document.querySelector(".popup_add_card").classList.add("popup_opened");
}

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box">
          <img src={avatar} alt="Аватар" className="profile__avatar" />
          <button
            onClick={handleEditAvatarClick}
            className="profile__avatar-edit-button"
            aria-label="Загрузить новый аватар"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Имя</h1>
          <button
            onClick={handleEditProfileClick}
            className="profile__info-edit-button"
            type="button"
            aria-label="Редактировать профиль"
          />
          <p className="profile__profession">Немного о себе</p>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="profile__add-button"
          type="button"
          aria-label="Добавить картинку"
        />
      </section>
      <section className="cards">
        <ul className="cards__list" />
      </section>
    </main>
  );
}

export default Main;
