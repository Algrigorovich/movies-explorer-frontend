import "./Form.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Form = ({ children, buttonText, questionText, link, linkText, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__container">
        <Logo className="form__logo"/>
        {children}

        <div className="form__btn-container">
          <button type="submit" className="form__btn">
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
