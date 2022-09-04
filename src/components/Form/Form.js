import "./Form.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Form = ({
  children,
  buttonText,
  buttonState,
  questionText,
  link,
  linkText,
  onSubmit,
  errorMsg = '',
  }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__container">
        <Logo className="form__logo"/>
        {children}

        <div className="form__btn-container">
          <p className="form__submit-error">{errorMsg}</p>
          <button type="submit" disabled={buttonState ? false : true} className={`form__btn ${buttonState ? '' : 'form__btn_disabled'}`} >
            {buttonText}
          </button>
          <p className="form__question">
            {questionText}
            <Link to={link} className="form__link">
              {linkText}
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Form;
