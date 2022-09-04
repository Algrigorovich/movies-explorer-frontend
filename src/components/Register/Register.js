import Form from "../Form/Form";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useFormWithValidation from '../../hook/formValidation';

const Register = ({ onRegister, errorMsg, isLoadingData, loggedIn}) => {
  const { errors, values, isValid, handleChange } = useFormWithValidation();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  }

  useEffect(()=> {
    if (loggedIn) history.push("/");
  },[loggedIn, history])

  return (
    <Form
      buttonText="Зарегистрироваться"
      buttonState={isValid}
      questionText="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
      onSubmit={handleSubmit}
      errorMsg={errorMsg}
    >

      <h1 className="form__header">Добро пожаловать!</h1>
      <label className="form__label">
        Имя
        <input
          autoComplete="on"
          onChange={handleChange}
          className={`input ${errors.name ? "input__type_error" : ""}`}
          pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
          id="name"
          name="name"
          value={values.name || ''}
          type="text"
          minLength="2"
          maxLength="40"
          required
          disabled={isLoadingData}
        />
        <p className={`input__error ${errors.name ? "input__error_visible" : ""}`}>{errors.name}</p>
      </label>

      <label className="form__label">
        E-mail
        <input
          autoComplete="on"
          onChange={handleChange}
          className={`input ${errors.email ? "input__type_error" : ""}`}
          id="email"
          name="email"
          value={values.email || ''}
          type="email"
          required
          disabled={isLoadingData}
        />
        <p className={`input__error ${errors.email ? "input__error_visible" : ""}`}>{errors.email}</p>
      </label>

      <label className="form__label">
      Пароль
        <input
          autoComplete="on"
          onChange={handleChange}
          className={`input ${errors.password ? "input__type_error" : ""}`}
          id="password"
          name="password"
          value={values.password || ''}
          type="password"
          minLength="4"
          required
          disabled={isLoadingData}
        />
        <p className={`input__error ${errors.password ? "input__error_visible" : ""}`}>{errors.password}</p>
      </label>

    </Form>
  );

};

export default Register;
