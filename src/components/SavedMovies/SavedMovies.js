import "./SavedMovies.css";
import { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { filterMovies, filterShortMovies } from "../../utils/utils";

const SavedMovies = ({ favoritedMovies = [], onDeleteClick }) => {
  const [initialMoviesList, setInitialMoviesList] = useState(favoritedMovies);
  const [shortMovies, setShortMovies] = useState(false);
  const [emptySearchResult, setEmptySearchResult] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearchSubmit = (inputValue) => {
    if(filterMovies(favoritedMovies, inputValue, shortMovies).length > 0) {
      setEmptySearchResult(false);
      setFilteredMovies(filterMovies(favoritedMovies, inputValue, shortMovies));
      setInitialMoviesList(filterMovies(favoritedMovies, inputValue, shortMovies));
    } else {
      setEmptySearchResult(true);
    }
  }




  // Клик на чекбокс корометражек
  const handleCheckboxClick = () => {
    if (!shortMovies) {
      setShortMovies(true);
      localStorage.setItem('shortSavedMoviesHandler', true);
      setInitialMoviesList(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length > 0 ? setEmptySearchResult(false) : setEmptySearchResult(true);
    } else {
      setShortMovies(false)
      localStorage.setItem('shortSavedMoviesHandler', false);
      filterShortMovies(filteredMovies).length > 0 ? setEmptySearchResult(false) : setEmptySearchResult(true);
      setInitialMoviesList(filteredMovies);
    }
  }

  // Проверка чекбокса
  useEffect(() => {
    if (localStorage.getItem(`shortSavedMoviesHandler`) === "true") {
      setShortMovies(true);
      setInitialMoviesList(filterShortMovies(favoritedMovies))
    } else {
      setShortMovies(false);
      setInitialMoviesList(favoritedMovies);
    }
  }, [favoritedMovies]);

  useEffect(() => {
    if(favoritedMovies.length !== 0) {
      setEmptySearchResult(false);
    } else {
      setEmptySearchResult(true);
    }
  }, [favoritedMovies])

  return (
    <>
      <SearchForm onSearch={handleSearchSubmit} shortMovies={shortMovies} handleCheckboxClick={handleCheckboxClick}/>
      <section className="movies">
        <div className="movies__container page__container page__container_page_inner">
          <MoviesCardList
            movies={initialMoviesList}
            savedMoviesPage={true}
            emptySearchResult={emptySearchResult}
            favoritedMovies={favoritedMovies}
            onDeleteClick={onDeleteClick}
          />
        </div>
     </section>
    </>

  );
};

export default SavedMovies;
