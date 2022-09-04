import "./SearchForm.css";
import useFormWithValidation from "../../hook/formValidation";
import { useState } from "react";

const SearchForm = ({
  onSearch,
  shortMovies = false,
  handleCheckboxClick,
  savedMoviesPage = false,
 }) => {
  const searchPrase = localStorage.getItem('searchPhrase');
  const { errors, values, handleChange } = useFormWithValidation({searchPrase});
  const [inputError, setInputError] = useState(errors[0]);
  const [searchValue, setSearchValue] = useState(searchPrase);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.querySelector('input').value === '') {
      setInputError("Нужно ввести ключевое слово");
    } else if (!e.target.checkValidity()){
      setInputError(e.target.querySelector('input').validationMessage);
    } else {
      setInputError("");
      setSearchValue(values.search);
      onSearch(values.search);
    }
  };

  return (
    <section className="search-form" area-label="Строка поиска фильмов">
      <div className="search-form__container page__container page__container_page_inner">
        <div className="search-form__wrapper">
          <form className="search-form__form" onSubmit={handleSubmit} noValidate>
            <input
              className="search-form__input"
              type="text"
              id="search"
              name="search"
              required
              defaultValue={!savedMoviesPage ? searchValue : ''}
              onChange={handleChange}
              placeholder="Фильм"
              minLength="1"
              pattern="^[A-Za-zА-Яа-яЁё0-9-\s]+$"
            />
            <button className="search-form__submit" type="submit"></button>
          </form>
          <p className={`search-form__error ${inputError ? "search-form__error_visible" : ""}`}>{inputError}</p>
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
