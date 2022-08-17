import "./Header.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";

const Header = ({ path = "" }) => {
  /* Костыли для проверки разного варианта хедера */
  const loggedIn = true;
  const isHomepage = path === "/";
  const [isOpen, setIsOpen] = useState(false);
  const isNotMobile = window.innerWidth > 768;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <header className={`header ${isHomepage ? "header_bg_dark" : ""}`}>
      <div className="header__container">
        <Logo />
        {loggedIn ? (
          <>
            {isNotMobile && (
              <>
                <Navigation isHomepage={isHomepage} />
                <Link to="/profile" className="header__profile-link">
                  Аккаунт
                </Link>
              </>
            )}
            <button onClick={handleOpen} className={`header__burger-menu ${isHomepage ? "header__burger-menu_white" : ""}`}>
              <span></span>
            </button>
            {isOpen ? (
              <div className="header__overlay">
                <div className="header__menu-mobile">
                  <Navigation isHomepage={isHomepage} />
                  <Link to="/profile" className="header__profile-link">
                    Аккаунт
                  </Link>
                  <button onClick={handleClose} className="header__menu-close" area-label="Закрыть"></button>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <div className="header__btn-container">
            <Link to="/signup" className="header__btn">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn header__btn_fill">
              Войти
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
