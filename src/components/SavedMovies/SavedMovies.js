import "./SavedMovies.css";
import movieImg from "../../images/movie-1.jpg";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const savedMovies = [
  {
    image: movieImg,
    title: "33 слова о дизайне",
    time: "1ч 42м",
    _id: 1,
    saved: true,
  },
  {
    image: movieImg,
    title: "Киноальманах «100 лет дизайна»",
    time: "1ч 42м",
    _id: 2,
    saved: true,
  },
  {
    image: movieImg,
    title: "В погоне за Бенкси",
    time: "1ч 42м",
    _id: 3,
    saved: true,
  },
];

const SavedMovies = () => {
  return (
    <section className="movies">
      <div className="movies__container page__container page__container_page_inner">
        <MoviesCardList movies={savedMovies} />
        <button className="movies__more">Ещё</button>
      </div>
    </section>
  );
};

export default SavedMovies;
