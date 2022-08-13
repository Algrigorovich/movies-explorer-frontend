import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MoviesCard key={movie._id} movie={movie} saved={false} />
      ))}
    </ul>
  );
};

export default MoviesCardList;
