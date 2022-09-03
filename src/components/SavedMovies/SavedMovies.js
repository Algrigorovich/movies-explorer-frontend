import "./SavedMovies.css";
import { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { filterMovies, filterShortMovies } from "../../utils/utils";

const SavedMovies = ({ favoritedMovies = [], onDeleteClick }) => {
  const [initialMoviesList, setInitialMoviesList] = useState(favoritedMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMoviesList);
  const [shortMovies, setShortMovies] = useState(false);
  const [emptySearchResult, setEmptySearchResult] = useState(true);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [searchPhraseQuery, setSearchPhraseQuery] = useState('');

  const showLoader = () => {
    setIsLoadingData(true);
    setTimeout(() => setIsLoadingData(false), 500);
  };

  // Фильтрация избранного по поисковой фразе
  const handleSearchSubmit = (inputValue) => {
    showLoader();
    setSearchPhraseQuery(inputValue)
    if (filterMovies(favoritedMovies, searchPhraseQuery, shortMovies).length > 0) {
      setEmptySearchResult(false);
      setFilteredMovies(filterMovies(favoritedMovies, inputValue, shortMovies))
      setInitialMoviesList(filterMovies(favoritedMovies, inputValue, shortMovies))
    } else {
      setEmptySearchResult(true);
    }
  };

  // Клик на чекбокс корометражек
  const handleCheckboxClick = () => {
    if (!shortMovies) {
      setShortMovies(true);
      setInitialMoviesList(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0 || favoritedMovies === 0 ? setEmptySearchResult(true) : setEmptySearchResult(false);
    } else {
      setShortMovies(false);
      filteredMovies.length === 0 || favoritedMovies === 0 ? setEmptySearchResult(true) : setEmptySearchResult(false);
      setInitialMoviesList(filteredMovies);
    }
  };

  // Проверка чекбокса
  useEffect(() => {
    if (shortMovies) {
      setShortMovies(true);
      setInitialMoviesList(filterMovies(favoritedMovies, searchPhraseQuery, shortMovies));
    } else {
      setShortMovies(false);
      setInitialMoviesList(filterMovies(favoritedMovies, searchPhraseQuery, shortMovies));
    }
  }, [favoritedMovies, shortMovies, searchPhraseQuery]);

  useEffect(() => {
    if(favoritedMovies.length !== 0) {
      setEmptySearchResult(false)
    } else {
      setEmptySearchResult(true)
    }
  }, [favoritedMovies])

  return (
    <>
      <SearchForm
        onSearch={handleSearchSubmit}
        shortMovies={shortMovies}
        handleCheckboxClick={handleCheckboxClick}
        savedMoviesPage={true}
      />
      <section className="movies">
        <div className="movies__container page__container page__container_page_inner">
          {isLoadingData ? <Preloader /> : ""}
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
