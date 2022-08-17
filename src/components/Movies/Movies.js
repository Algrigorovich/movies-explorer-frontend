import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movieImg from "../../images/movie-1.jpg";

const Movies = () => {
  const defaultMovies = [
    {
      image: movieImg,
      title: "33 слова о дизайне",
      time: "1ч 42м",
      _id: 1,
      like: true,
    },
    {
      image: movieImg,
      title: "Киноальманах «100 лет дизайна»",
      time: "1ч 42м",
      _id: 2,
      like: true,
    },
    {
      image: movieImg,
      title: "В погоне за Бенкси",
      time: "1ч 42м",
      _id: 3,
      like: false,
    },
    {
      image: movieImg,
      title: "Баския: Взрыв реальности",
      time: "1ч 42м",
      _id: 4,
      like: false,
    },
    {
      image: movieImg,
      title: "Бег это свобода",
      time: "1ч 42м",
      _id: 5,
      like: true,
    },
    {
      image: movieImg,
      title: "Книготорговцы",
      time: "1ч 42м",
      _id: 6,
      like: false,
    },
    {
      image: movieImg,
      title: "Когда я думаю о Германии ночью",
      time: "1ч 42м",
      _id: 7,
      like: false,
    },
  ];

  return (
    <section className="movies" area-label="Список фильмов">
      <div className="movies__container page__container page__container_page_inner">
        <MoviesCardList movies={defaultMovies} />
        <button className="movies__more">Ещё</button>
      </div>
    </section>
  );
};

export default Movies;
