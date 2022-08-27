const setUserInfoToStorage = (user) => localStorage.setItem("user", JSON.stringify(user));
const getUserInfoFromStorage = JSON.parse(localStorage.getItem("user"));

const clearLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("shortMoviesHandler");
  localStorage.removeItem("shortSavedMoviesHandler");
  localStorage.removeItem("filteredMovies");
  localStorage.removeItem("searchPhrase");
};

export { setUserInfoToStorage, getUserInfoFromStorage, clearLocalStorage };
