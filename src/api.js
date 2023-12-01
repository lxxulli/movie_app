const fetch = require("node-fetch");

const baseurl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseurl + "movie/now_playing?language=ko-KR";
const popularUrl = baseurl + "movie/popular?language=ko-KR";
const topRatedUrl = baseurl + "movie/top_rated?language=ko-KR";
const upcomingUrl = baseurl + "movie/upcoming?language=ko-KR";
const movieListUrl = baseurl + "movie/genre/movie/list?language=ko-KR";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDczOGFhNWYzYTA4NGZjZjcxYjgyYzUzN2VkYjAxMCIsInN1YiI6IjY1NGIzYTFiNTMyYWNiNTMzYTEzZjgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9t2x0yh11EgJzBNd8W406DQbWqOXPm5idJY3DvOzByk",
  },
};

export const nowPlaying = () =>
  fetch(nowPlayingUrl, options).then((res) => res.json());
export const popular = () =>
  fetch(popularUrl, options).then((res) => res.json());
export const topRated = () =>
  fetch(topRatedUrl, options).then((res) => res.json());
export const upcoming = () =>
  fetch(upcomingUrl, options).then((res) => res.json());
export const movieList = () =>
  fetch(movieListUrl, options).then((res) => res.json());
export const movieDatail = (id) => {
  const detailUrl = baseurl + `movie/${id}?language=ko-kr`;
  return fetch(detailUrl, options).then((res) => res.json());
};
