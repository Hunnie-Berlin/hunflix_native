import axios from "axios";

const TMDB_KEY = "966af47e3b068533b787343bccd7f934";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: TMDB_KEY,
    language: "en-US",
    region: "DE",
  },
});

const getData = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await api.get(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, error];
  }
};

export const moviesApi = {
  nowPlaying: () => getData("/movie/now_playing"),
  popular: () => getData("/movie/popular"),
  upcoming: () => getData("/movie/upcoming"),
  detail: (id) => getData(`/movie/${id}`),
  search: (term) =>
    getData("/search/movie", {
      params: {
        query: term,
      },
    }),
  discover: () => getData("/discover/movie"),
};

export const tvApi = {
  airingToday: () => getData("/tv/airing_today"),
  popular: () => getData("/tv/popular"),
  topRated: () => getData("/tv/top_rated"),
  detail: (id) => getData(`/tv/${id}`),
  search: (term) =>
    getData("/search/tv", {
      params: {
        query: term,
      },
    }),
};

export const apiImage = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : "https://images.unsplash.com/photo-1497514440240-3b870f7341f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=562&q=80";
