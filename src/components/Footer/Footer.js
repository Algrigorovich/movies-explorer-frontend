import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__bottom">
          <p className="footer__year">&copy; {currentYear}</p>
          <ul className="footer__links">
            <li className="footer__link-item">
              <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer noopener">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link-item">
              <a href="https://github.com/Algrigorovich" className="footer__link" target="_blank" rel="noreferrer noopener" lang="en">
                Github
              </a>
            </li>
            <li className="footer__link-item">
              {" "}
              <a href="https://www.facebook.com/" className="footer__link" target="_blank" rel="noreferrer noopener" lang="en">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
