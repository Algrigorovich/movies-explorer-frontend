import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container page__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a href="https://github.com/Algrigorovich/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer noopener">
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__item">
            <a href="https://algrigorovich.github.io/russian-travel/" className="portfolio__link" target="_blank" rel="noreferrer noopener">
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__item">
            <a href="https://github.com/Algrigorovich/react-mesto-auth" className="portfolio__link" target="_blank" rel="noreferrer noopener">
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
