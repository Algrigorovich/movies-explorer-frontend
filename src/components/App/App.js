// import { React } from 'react';
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

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

import SearchForm from "../SearchForm/SearchForm";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Form from "../Form/Form";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  /* Костыли для проверки прелоадера */
  // State
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [currentUser, setCurrentUser] = useState({});


  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoadingData(false);
  };

  const onClick = (e) => {
    if (e.target !== document.querySelector(".preloader__round")) setIsLoadingData(true);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header exact path="/" />
            <Main>
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
            </Main>
            <Footer />
          </Route>

          <ProtectedRoute exact path="/movies">
            <Header exact path="/movies" />
            <SearchForm />
            <Movies />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute exact path="/saved-movies">
            <Header exact path="/saved-movies" />
            <SearchForm />
            <SavedMovies />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile">
            <Header exact path="/profile" />
            <Main>
              <Profile />
            </Main>
          </ProtectedRoute>

          <Route path="/signin">
            <Main>
              <Form
                buttonText="Войти"
                questionText="Ещё не зарегистрированы?"
                link="/signup"
                linkText="Регистрация"
                onSubmit={onSubmit}
              >
                {isLoadingData ? <Login /> : <Preloader onClick={onClick} />}
              </Form>
            </Main>
          </Route>

          <Route exact path="/signup">
            <Main>
              <Form
                buttonText="Зарегистрироваться"
                questionText="Уже зарегистрированы?"
                link="/signin"
                linkText="Войти"
                onSubmit={onSubmit}
              >
                {isLoadingData ? <Register /> : <Preloader onClick={onClick} />}
              </Form>
            </Main>
          </Route>

          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
