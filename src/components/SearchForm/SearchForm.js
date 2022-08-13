import "./SearchForm.css";

const SearchForm = () => {
  return (
    <section className="search-form" area-label="Строка поиска фильмов">
      <div className="search-form__container page__container page__container_page_inner">
        <div className="search-form__wrapper">
          <form className="search-form__form">
            <input
              className="search-form__input"
              type="text"
              id="search"
              name="search"
              required
              placeholder="Фильм"
              minLength="3"
            />
            <button className="search-form__submit" type="submit"></button>
          </form>
          <div className="search-form__filter">
            <input type="checkbox" className="search-form__trigger" id="short-movies" />
            <label htmlFor="short-movies" className="search-form__label"></label>
            <p className="search-form__text">Короткометражки</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
