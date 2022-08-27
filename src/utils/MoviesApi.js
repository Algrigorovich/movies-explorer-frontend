import { MOVIES_URL } from "./constants";

const getMovies = () => {
  return fetch(MOVIES_URL).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export {getMovies};
