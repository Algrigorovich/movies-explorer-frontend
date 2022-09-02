import Form from "../Form/Form";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useFormWithValidation from "../../hook/formValidation";

const Login = ({ onLogin, errorMsg, isLoadingData, loggedIn}) => {
  const { errors, values, isValid, setIsValid, handleChange } = useFormWithValidation();
  const history = useHistory();
  const checkForm = () => {
    return localStorage.getItem('formState');
  }

  useEffect(() => {
    setIsValid(checkForm);
  }, [setIsValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('formState');
    onLogin(values);
  };

  useEffect(()=> {
    if (loggedIn) history.push("/");
  },[loggedIn, history])


  return (
    <Form
      buttonText="Войти"
      buttonState={isValid}
      isLoadingData={isLoadingData}
      questionText="Ещё не зарегистрированы?"
      link="/signup"
      linkText="Регистрация"
      onSubmit={handleSubmit}
      errorMsg={errorMsg}
    >
      <h1 className="form__header">Добро пожаловать!</h1>
      <label className="form__label">
        E-mail
        <input
          autoComplete="on"
          onChange={handleChange}
          className={`input ${errors.email ? "input__type_error" : ""}`}
          id="email"
          name="email"
          value={values.email || ""}
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
          value={values.password || ""}
          type="password"
          minLength="2"
          required
          disabled={isLoadingData}
        />
        <p className={`input__error ${errors.password ? "input__error_visible" : ""}`}>{errors.password}</p>
      </label>
    </Form>
  );
};

export default Login;
