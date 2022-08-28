const setUserInfoToStorage = (user) => localStorage.setItem("user", JSON.stringify(user));
const getUserInfoFromStorage = JSON.parse(localStorage.getItem("user"));

// Помещаем фильмы из beatfilm в LS
const setFavoriteMoviesToStorage = (movies) => {
  localStorage.setItem("favoriteMovies", JSON.stringify(movies));
};

const moviesFromStorage = JSON.parse(localStorage.getItem("favoriteMovies"));

// Очищаем LS
const clearLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("shortMoviesHandler");
  localStorage.removeItem("shortSavedMoviesHandler");
  localStorage.removeItem("filteredMovies");
  localStorage.removeItem("searchPhrase");
  localStorage.removeItem("favoriteMovies");

};

export {
  setUserInfoToStorage,
  getUserInfoFromStorage,
  clearLocalStorage,
  setFavoriteMoviesToStorage,
  moviesFromStorage,
 };
