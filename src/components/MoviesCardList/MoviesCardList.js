import "./MoviesCardList.css";
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowSize from "../../hook/useWindowSize";
import {DESKTOP_CARDS_NUMBER, MOBILE_CARDS_NUMBER} from "../../utils/constants"

const MoviesCardList = ({
  movies = [],
  savedMoviesPage,
  handleMovieLike,
  onLikeClick,
  onDeleteClick,
  favoritedMovies = [],
  emptySearchResult = true,
}) => {
  const { windowWidth } = useWindowSize();
  const [numbersOfNewCards, setNumbersOfNewCards] = useState(0);
  const [numbersOfShowedCards, setNumbersOfInitialCards] = useState(0);
  const isShowSpoiler = numbersOfShowedCards < movies.length;

  const checkIsFavorited = (favoritedMovies, movie) => {
    return favoritedMovies.find(favoritedMovie => favoritedMovie.movieId === movie.id)
  };

  // Показываем доп карточки по клику на "Ещё"
  const showAdditionalCards = () => {
    setNumbersOfInitialCards(numbersOfShowedCards + numbersOfNewCards);
  }

  useEffect(() => {
    if(windowWidth >= 768) {
      setNumbersOfInitialCards(DESKTOP_CARDS_NUMBER.initial);
      setNumbersOfNewCards(DESKTOP_CARDS_NUMBER.additional);
    } else {
      setNumbersOfInitialCards(MOBILE_CARDS_NUMBER.initial);
      setNumbersOfNewCards(MOBILE_CARDS_NUMBER.additional);
    }
  }, [windowWidth]);

  return (
    <>
      <ul className="movie-list">
        {emptySearchResult ?
        <h1 className="movie-list__not-found">Ничего не найдено</h1>
        :
        movies.map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            favorited={checkIsFavorited(favoritedMovies, movie)}
            savedMoviesPage={savedMoviesPage}
            handleMovieLike={handleMovieLike}
            onLikeClick={onLikeClick}
            onDeleteClick={onDeleteClick}
          />
        )).slice(0, numbersOfShowedCards)

        }
      </ul>
      {isShowSpoiler && (<button className="movies__more" onClick={showAdditionalCards}>Ещё</button>)}
    </>
  );
};

export default MoviesCardList;
