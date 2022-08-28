import "./SearchForm.css";
import useFormWithValidation from "../../hook/formValidation";

const SearchForm = ({ onSearch, shortMovies = false, handleCheckboxClick }) => {
  const { errors, values, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(values.search);
  };

  return (
    <section className="search-form" area-label="Строка поиска фильмов">
      <div className="search-form__container page__container page__container_page_inner">
        <div className="search-form__wrapper">
          <form className="search-form__form" onSubmit={handleSubmit}>
            <input
              className="search-form__input"
              type="text"
              id="search"
              name="search"
              required
              value={values.search || ""}
              onChange={handleChange}
              placeholder="Фильм"
              minLength="3"
            />
            <button className="search-form__submit" type="submit"></button>
          </form>
          <p className={`search-form__error ${errors.search ? "search-form__error_visible" : ""}`}>{errors.search}</p>
          <div className="search-form__filter">
            <input
              onChange={handleCheckboxClick}
              type="checkbox"
              className="search-form__trigger"
              id="short-movies"
              checked={!shortMovies}
            />
            <label htmlFor="short-movies" className="search-form__label"></label>
            <p className="search-form__text">Короткометражки</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
