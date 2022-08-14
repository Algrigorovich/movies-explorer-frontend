// import { React } from 'react';
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

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

function App() {
  /* Костыли для проверки прелоадера */
  const [isLoadingData, setIsLoadingData] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoadingData(false);
  };

  const onClick = (e) => {
    if (e.target !== document.querySelector(".preloader__round")) setIsLoadingData(true);
  };

  return (
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

        <Route exact path="/movies">
          <Header exact path="/movies" />
          <SearchForm />
          <Movies />
          <Footer />
        </Route>

        <Route exact path="/saved-movies">
          <Header exact path="/saved-movies" />
          <SearchForm />
          <SavedMovies />
          <Footer />
        </Route>

        <Route exact path="/profile">
          <Header exact path="/profile" />
          <Main>
            <Profile />
          </Main>
        </Route>

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
  );
}

export default App;
