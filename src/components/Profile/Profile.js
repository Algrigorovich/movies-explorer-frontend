import "./Profile.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isError, setEserror] = useState(false);

  const handleClickError = (e) => {
    e.preventDefault();
    setEserror(true);
  };
  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <section className="profile">
      <div className="profile__container page__container">
        <h1 className="profile__header">Привет, Александр!</h1>
        <form className="profile__form">
          <label className="profile__label">
            Имя
            <input required minLength="2" disabled className="profile__input" type="text" defaultValue="Александр" />
          </label>
          <label className="profile__label">
            E-mail
            <input required disabled className="profile__input" type="email" defaultValue="pochta@yandex.ru" />
          </label>
          {!isClicked ? (
            <>
              <button className="profile__btn profile__btn_edit" type="button" onClick={handleClick}>
                Редактировать
              </button>
              <Link to="/" className="profile__btn profile__btn_log-out">
                Выйти из аккаунта
              </Link>
            </>
          ) : (
            <>
              {isError ? <p className="profile__error-submit">При обновлении профиля произошла ошибка.</p> : ""}
              <button
                type="submit"
                className={`form__btn profile__btn-save ${isError ? "form__btn_disabled" : ""}`}
                onClick={handleClickError}
              >
                Сохранить
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Profile;
