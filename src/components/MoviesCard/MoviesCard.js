import "./MoviesCard.css";
import { transformDurationTime } from "../../utils/utils";
import thumbImgPlaceholder from "../../images/movie-placeholder.svg";

const MoviesCard = ({ movie, savedMoviesPage = false, favorited = false, onLikeClick, onDeleteClick }) => {
  const cardLikeButtonClassName = `movie-item__favourite ${favorited ? "movie-item__favourite_active" : ""}`;
  const movieImage = !savedMoviesPage ? `https://api.nomoreparties.co${movie.image.url}` : (movie.image ?? thumbImgPlaceholder);

  // Сохранение фильма в избранное
  const handleLikeClick = () => {
    onLikeClick(movie)
  }

  // Удаление фильма из избранного
  const handleDeleteClick = () => {
    onDeleteClick(movie)
  }

  return (
    <li className="movie-item">
      <div className="movie-item__text">
        <h2 className="movie-item__title">{movie.nameRU || movie.nameEN}</h2>
        <p className="movie-item__duration">{transformDurationTime(movie.duration)}</p>
        {!savedMoviesPage ? (
          <button className={cardLikeButtonClassName} type="button" aria-label="Добавить в сохрраненные" onClick={favorited ? handleDeleteClick : handleLikeClick}></button>
        ) : (
          <button className="movie-item__favourite movie-item__favourite_delete" aria-label="Удалить из сохраненных" onClick={handleDeleteClick}></button>

        )}
      </div>
      <a href={movie.trailerLink || "#"} className="movie-item__link">
        <img src={movieImage} alt={movie.nameRU || "Изображение не загружено"} className="movie-item__img" loading="lazy" />
      </a>
    </li>
  );
};

export default MoviesCard;
