import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { clearLocalStorage } from "../../utils/localStorage";

// Api
import mainApi from "../../utils/MainApi.js";

// Utilits


// Context
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

// Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const history = useHistory();

  // State
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const [registerErrorMsg, setRegisterErrorMsg] = useState("");
  const [editProfileMsg, setEditProfileMsg] = useState("");
  const [loadingForm, setLoadingForm] = useState(false);
  const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);
  const [isLoadingLoginData, setIsLoadingLoginData] = useState(false);
  const [isLoadingRegData, setIsLoadingRegData] = useState(false);

  // Регистрация
  const handleRegister = ({ name, email, password }) => {
    setIsLoadingRegData(true);
    mainApi
      .register(name, email, password)
      .then((res) => {
        setCurrentUser({ name, email });
        handleLogin({ email, password });
      })
      .catch((err) => {
        setRegisterErrorMsg(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoadingRegData(false);
      });
  };

  // Авторизация
  const handleLogin = ({ email, password }) => {
    setIsLoadingLoginData(true);
    mainApi
      .authorize(email, password)
      .then((res) => {
        checkToken();
        localStorage.setItem("loggedIn", true);
        history.push("/movies");
    })
      .catch((err) => {
        setLoginErrorMsg('Неправильный логин или пароль');
        console.log(err);
      })
      .finally(() => {
        setIsLoadingLoginData(false);
      });
  };

  // Выход
  const handleSignout = () => {
    mainApi
      .logout()
      .then((res) => {
        setLoggedIn(false);
        setCurrentUser({});
        clearLocalStorage();
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Обновление информации пользователя
  const handleEditUserInfo = ({ name, email }) => {
    mainApi
      .updateUserInfo(name, email)
      .then((newUserInfo) => {
        setLoadingForm(true);
        setCurrentUser(newUserInfo);
      })
      .catch((err) => {
        console.log(err);
        setEditProfileMsg(err);
      })
      .finally(() => {
        setLoadingForm(false);
      });
  };

  // Добавляем в избранное
  const handleFavorite = (movie) => {
    mainApi
      .setFavourite(movie)
      .then((newMovie) => {
        setFavoriteMoviesList([...favoriteMoviesList, newMovie]);
        localStorage.setItem('favoriteMovies', JSON.stringify([...favoriteMoviesList, newMovie]));
      })
      .catch((err) => console.log(err));
  };

  // Удаление фильма из избранного
  const handleDeleteMovie = (movie) => {
    const favoritedMovie = favoriteMoviesList.find((i) => i.movieId === movie.id || i.movieId === movie.movieId);

    mainApi
      .removeFromSaved(favoritedMovie._id)
      .then((res) => {
        const newMoviesList = favoriteMoviesList.filter((m) => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setFavoriteMoviesList(newMoviesList);
        localStorage.setItem('favoriteMovies', JSON.stringify(newMoviesList));
      })
      .catch((err) => console.log(err));
  };


  const checkToken = () => {
    mainApi
    .getUserInfo()
    .then((user) => {
      if (user) {
        setCurrentUser(user);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        history.push("/signin");
      }
    })
    .catch((err) => console.error(err));
  }

  useEffect(() => {
    checkToken();
  }, [loggedIn, history]);

  // Получаем спискок избранныъ фильмов
  useEffect(() => {
    if (loggedIn) {
     mainApi.getFavoriteMovies()
        .then((favoriteMovies) => {
          if(favoriteMovies) {
            setFavoriteMoviesList(favoriteMovies);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header exact path="/" loggedIn={loggedIn} />
            <Main>
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
            </Main>
            <Footer />
          </Route>

          <ProtectedRoute exact path="/movies" loggedIn={loggedIn}>
            <Header path="/movies" loggedIn={loggedIn} />
            <Movies
              favoritedMovies={favoriteMoviesList}
              onLikeClick={handleFavorite}
              onDeleteClick={handleDeleteMovie}
            />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn}>
            <Header path="/saved-movies" loggedIn={loggedIn} />
            <SavedMovies
              favoritedMovies={favoriteMoviesList}
              onDeleteClick={handleDeleteMovie}
            />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
            <Header path="/profile" loggedIn={loggedIn} />
            <Main>
              <Profile
                onLogout={handleSignout}
                onProfileEdit={handleEditUserInfo}
                responseMsg={editProfileMsg}
                user={currentUser}
                isLoadingForm={loadingForm}
              />
            </Main>
          </ProtectedRoute>

          <Route path="/signin">
            <Main>
              <Login
                loggedIn={loggedIn}
                onLogin={handleLogin}
                errorMsg={loginErrorMsg}
                isLoadingData={isLoadingLoginData}
                user={currentUser}
              />
            </Main>
          </Route>

          <Route exact path="/signup">
            <Main>
              <Register
                loggedIn={loggedIn}
                onRegister={handleRegister}
                errorMsg={registerErrorMsg}
                isLoadingData={isLoadingRegData}
              />
            </Main>
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
