import "./Profile.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hook/formValidation";
import { setUserInfoToStorage, getUserInfoFromStorage } from "../../utils/localStorage";

const Profile = ({ onLogout, onProfileEdit, responseMsg, isLoadingForm }) => {
  const currentUser = getUserInfoFromStorage;

  const [defaultValues, setDefaultValues] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const { errors, values, isValid, handleChange, resetForm } = useFormWithValidation(currentUser);

  const [inputState, setInputState] = useState(false); // проверяем нажимали ли на редактирование
  const [isSameData, setIsSameData] = useState(true); // проверяем те же ли данные
  const [message, setMessage] = useState("");

  // Скрываем сообщение об успешном изменении данных профиля
  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(""), 2000);
    }
  }, [message]);

  useEffect(() => {
    if (currentUser) {
      setDefaultValues(defaultValues);
      setUserInfoToStorage(defaultValues);
    }
  }, [defaultValues, currentUser]);
  console.log(currentUser)
  useEffect(() => {
    const newIsSameData = values.name === currentUser.name && values.email === currentUser.email;

    setIsSameData(newIsSameData);
  }, [values, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm(values);
    setUserInfoToStorage(values);
    onProfileEdit(values);
    setInputState(false);
    setMessage("Данные успешно изменены!");
  };

  const handleChangeInfo = (e) => {
    e.preventDefault();
    setInputState(true);
  };

  return (
    <section className="profile">
      <div className="profile__container page__container">
        <h1 className="profile__header">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <label className="profile__label">
            Имя
            <input
              required
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
              minLength="2"
              disabled={!inputState || isLoadingForm}
              name="name"
              className="profile__input"
              type="text"
              onChange={handleChange}
              value={values.name || ""}
            />
          </label>
          <p className={`profile__input-error ${errors.name ? "profile__input-error_visible" : ""}`}>{errors.name}</p>
          <label className="profile__label">
            E-mail
            <input
              required
              disabled={!inputState || isLoadingForm}
              className="profile__input"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email || ""}
            />
          </label>
          <p className={`profile__input-error ${errors.email ? "profile__input-error_visible" : ""}`}>{errors.email}</p>
          <p className={`profile__error-submit ${responseMsg || message ? "profile__error-submit_visible" : ""}`}>
            {responseMsg || message}
          </p>
          {!inputState ? (
            <button className="profile__btn profile__btn_edit" type="button" onClick={handleChangeInfo}>
              Редактировать
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isValid || isSameData || isLoadingForm}
              className={`form__btn profile__btn-save ${!isValid || isSameData ? "form__btn_disabled" : ""}`}
            >
              Сохранить
            </button>
          )}

          <Link to="/" className="profile__btn profile__btn_log-out" onClick={onLogout}>
            Выйти из аккаунта
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Profile;
