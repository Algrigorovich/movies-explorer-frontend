import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isHomepage }) => {

  return (
    <nav className="nav-links header__nav">
      <Link
        to="/"
        activeClassName="nav-links__link_active"
        className={`nav-links__link nav-links__link_mobile_show ${isHomepage ? " nav-links__link_active nav-links__link_color_white" : ""}`}
      >
        Главная
      </Link>
      <NavLink
        to="/movies"
        activeClassName="nav-links__link_active"
        className={`nav-links__link ${isHomepage ? "nav-links__link_color_white" : ""}`}
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        activeClassName="nav-links__link_active"
        className={`nav-links__link  ${isHomepage ? "nav-links__link_color_white" : ""}`}
      >
        Сохраненные фильмы
      </NavLink>
    </nav>
  );
};

export default Navigation;
