import "./SavedMovies.css";
import { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { filterMovies, filterShortMovies } from "../../utils/utils";

const SavedMovies = ({ favoritedMovies = [], onDeleteClick }) => {
  const getFavoriteMoviesFromStorage = JSON.parse(localStorage.getItem("favoriteMovies"));

  const [initialMoviesList, setInitialMoviesList] = useState(getFavoriteMoviesFromStorage);
  const [filteredMovies, setFilteredMovies] = useState({});
  const [shortMovies, setShortMovies] = useState(false);
  const [emptySearchResult, setEmptySearchResult] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const checkSearhResult = (moviesList) => (moviesList.length > 0 ? setEmptySearchResult(false) : setEmptySearchResult(true));
  const showLoader = () => {
    setIsLoadingData(true);
    setTimeout(() => setIsLoadingData(false), 500);
  }

// Фильтрация избранного по поисковой фразе
const handleSearchSubmit = (inputValue) => {
  showLoader();
  if (filterMovies(favoritedMovies, inputValue, shortMovies).length > 0) {
    setEmptySearchResult(false);
    setFilteredMovies(filterMovies(favoritedMovies, inputValue, shortMovies))
    setInitialMoviesList(filterMovies(favoritedMovies, inputValue, shortMovies));
  } else {
    setEmptySearchResult(true);
  }
};

// Клик на чекбокс корометражек
const handleCheckboxClick = () => {
  if (!shortMovies) {
    setShortMovies(true);
    showLoader();
    if (filteredMovies.length > 0) {
      checkSearhResult(filterShortMovies(filteredMovies));
      setInitialMoviesList(filterShortMovies(filteredMovies));
    } else {
      checkSearhResult(filterShortMovies(favoritedMovies));
      setInitialMoviesList(filterShortMovies(favoritedMovies));
    }
  } else {
    setShortMovies(false);
    showLoader();
    if (filteredMovies.length > 0) {
      checkSearhResult(filteredMovies);
      setInitialMoviesList(filteredMovies);
    } else {
      checkSearhResult(favoritedMovies);
      setInitialMoviesList(favoritedMovies);
    }
  }
};

// useEffect(()=> {
//   if(initialMoviesList.length === 0) setEmptySearchResult(true);
//   else setEmptySearchResult(false)
// },[initialMoviesList, getFavoriteMoviesFromStorage])


// Проверка чекбокса
useEffect(() => {
  if (!shortMovies) {
    setShortMovies(false);
    checkSearhResult(initialMoviesList);
    setInitialMoviesList(initialMoviesList);
  } else {
    checkSearhResult(initialMoviesList);
    setInitialMoviesList(initialMoviesList);
  }
}, [shortMovies, initialMoviesList]);

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
          {
            isLoadingData
            ?
            <Preloader />
            :
            ""
          }
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
