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
  thisWeek: () => getData("/tv/on_the_air"),
  popular: () => getData("/tv/popular"),
  detail: (id) => getData(`/tv/${id}`),
  search: (term) =>
    getData("/search/tv", {
      params: {
        query: term,
      },
    }),
};
