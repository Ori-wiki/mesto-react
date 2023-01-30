function PopupWihtForm(props) {
  return (
    <div className={`popup popup_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.name}</h2>
        <form name={props.name} className="popup__form" noValidate>
          {props.children}
          <button
            type="submit"
            className="popup__button popup__button-save"
            disabled={true}
          >
            Сохранить
          </button>
        </form>
        <button
          type="button"
          className="popup__button-close"
          aria-label="Закрыть форму"
        />
      </div>
    </div>
  );
}

export default PopupWihtForm;
