import { BASE_URL } from "./constants";
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // Обработка ответа
  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((res) => {
      return Promise.reject(`Ошибка: ${res.error || res.message}`);
    });
  };

  // Запрос на регистрацию
  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleResponse);
  }

  // Запрос на авторизацию
  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }

  // Запрос данных пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        ...this._headers,
      },
    }).then(this._handleResponse);
  }

  // Запрос на изменение данных пользователя
  updateUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({ email, name }),
    }).then(this._handleResponse);
  }

  // Запрос на выход из аккаунта
  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      credentials: "include",
      headers: {
        ...this._headers,
      },
    }).then(this._handleResponse);
  }

  // Запрос на получение списка сохраненных фильмов
  getFavoriteMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      credentials: "include",
      headers: {
        ...this._headers,
      },
    }).then(this._handleResponse);
  }

  // Запрос на добавление в избранное
  setFavourite(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        country: movie.country || 'Страна не определена',
        director: movie.director || 'Директор не определен',
        duration: movie.duration || '00',
        year: movie.year || '0000',
        description: movie.description || '',
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink || "https://youtube.com",
        nameRU: movie.nameRU || 'Без названия',
        nameEN: movie.nameEN || 'Без названия',
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      }),
      headers: {
        ...this._headers,
      },
    }).then(this._handleResponse);
  }

  // Запрос на удаление из избранного
  removeFromSaved(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        ...this._headers,
      },
    }).then(this._handleResponse);
  }
}

const mainApi = new Api({
  baseUrl: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default mainApi;
