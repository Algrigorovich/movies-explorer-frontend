import "./SavedMovies.css";
import { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { filterMovies, filterShortMovies } from "../../utils/utils";

const SavedMovies = ({ favoritedMovies = {}, onDeleteClick }) => {
  const [initialMoviesList, setInitialMoviesList] = useState(favoritedMovies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState(false);
  const [emptySearchResult, setEmptySearchResult] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const checkSearhResult = (moviesList) => (moviesList.length > 0 ? setEmptySearchResult(false) : setEmptySearchResult(true));

  const showLoader = () => {
    setIsLoadingData(true);
    setTimeout(() => setIsLoadingData(false), 500);
  };

  // Фильтрация избранного по поисковой фразе
  const handleSearchSubmit = (inputValue) => {
    showLoader();
    if (filterMovies(favoritedMovies, inputValue, shortMovies).length > 0) {
      setEmptySearchResult(false);
      setFilteredMovies(filterMovies(favoritedMovies, inputValue, shortMovies));
      setInitialMoviesList(filterMovies(favoritedMovies, inputValue, shortMovies));
    } else {
      setEmptySearchResult(true);
    }
  };

  // Клик на чекбокс корометражек
  const handleCheckboxClick = () => {
    // если был поиск мы берем фильтрованные фильмы, иначе фильтруем избранные
    if (filteredMovies.length > 0) {
      showLoader();
      if (!shortMovies) {
        setShortMovies(true);
        if (filterShortMovies(filteredMovies).length !== 0) {
          setInitialMoviesList(filterShortMovies(filteredMovies));
        } else {
          setEmptySearchResult(true);
        }

      } else {
        setShortMovies(false);
        setEmptySearchResult(false);
        setInitialMoviesList(filteredMovies);
      }
    } else {
      if (!shortMovies) {
        setShortMovies(true);
        setInitialMoviesList(filterShortMovies(favoritedMovies));
      } else {
        setShortMovies(false);
        setInitialMoviesList(favoritedMovies);
      }
    }
  };

  // Проверка чекбокса
  useEffect(() => {
    if (!shortMovies) {
      checkSearhResult(favoritedMovies);
    } else {
      checkSearhResult(favoritedMovies);
    }
  }, [favoritedMovies]);

  useEffect(() => {
    if (favoritedMovies.length !== 0) {
      setEmptySearchResult(false);
    } else {
      setEmptySearchResult(true);
    }
  }, [favoritedMovies]);

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
