import "./NotFound.css";
import { Link, useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <section className="error">
      <div className="error__container page__container">
        <span className="error__status">404</span>
        <h1 className="error__message">Страница не найдена</h1>
        <Link onClick={handleClick} to={history} className="error__link">
          Назад
        </Link>
      </div>
    </section>
  );
};
export default NotFound;
