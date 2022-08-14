import "./MoviesCard.css";

const MoviesCard = ({ movie }) => {
  const cardLikeButtonClassName = `movie-item__favourite ${movie.like ? "movie-item__favourite_active" : ""}`;

  return (
    <li className="movie-item">
      <div className="movie-item__text">
        <h2 className="movie-item__title">{movie.title}</h2>
        <p className="movie-item__duration">{movie.time}</p>
        {movie.saved ? (
          <button className="movie-item__favourite movie-item__favourite_delete" aria-label="Удалить из сохраненных"></button>
        ) : (
          <button className={cardLikeButtonClassName} type="button" aria-label="Добавить в сохрраненные"></button>
        )}
      </div>
      <img src={movie.image} alt={movie.title} className="movie-item__img" loading="lazy" />
    </li>
  );
};

export default MoviesCard;
