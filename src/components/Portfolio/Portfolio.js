import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container page__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a href="/#" className="portfolio__link">
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__item">
            <a href="/#" className="portfolio__link">
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__item">
            <a href="/#" className="portfolio__link">
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
