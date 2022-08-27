import { MAX_SHORTMOVIES_DURATION } from "./constants";

// Фильтрация фильмов по запросу
const filterMovies = (movies, searchPhrase, shortMoviesHandler) => {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userRequestedMovie = searchPhrase.toLowerCase().trim();
    return movieRu.indexOf(userRequestedMovie) !== -1 || movieEn.indexOf(userRequestedMovie) !== -1;
  });

  if (shortMoviesHandler) {
    return moviesByQuery.filter((movie) => movie.duration < MAX_SHORTMOVIES_DURATION);
  } else {
    return moviesByQuery;
  }
};

// Фильтрация по длительности
const filterShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration < MAX_SHORTMOVIES_DURATION);
};

// Преобразуем общее время в минутах в часы + минуты
const transformDurationTime = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  if(hours === 0) {
    return `${minutes}м`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
};

// Помещаем фильмы из beatfilm в LS
const setBeatfilmMoviesToStorage = (beatfilmMovies) => {
  localStorage.setItem("beatfilmMovies", JSON.stringify(beatfilmMovies));
};

// Достаём фильмы из LS
const getBeatfilmMoviesFromStorage = () => {
  JSON.parse(localStorage.getItem("beatfilmMovies"));
}

export {
  filterMovies,
  filterShortMovies,
  transformDurationTime,
  setBeatfilmMoviesToStorage,
  getBeatfilmMoviesFromStorage,
};