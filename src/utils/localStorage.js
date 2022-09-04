const setBeatfilmMoviesToStorage = (movies) => {
  localStorage.setItem("beatfilmMovies", JSON.stringify(movies));
};


// Очищаем LS
const clearLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("shortMoviesHandler");
  localStorage.removeItem("favoriteMovies");
  localStorage.removeItem("filteredMovies");
  localStorage.removeItem("searchPhrase");
  localStorage.removeItem("beatfilmMovies");
  localStorage.removeItem("formState");

};

export {
  clearLocalStorage,
  setBeatfilmMoviesToStorage,
 };
