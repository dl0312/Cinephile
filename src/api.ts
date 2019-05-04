import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    // language: "en-US",
    // region: "US",
    language: "ko-KR",
    region: "KR"
  }
});

export const moviesApi = {
  nowPlaying: (page: number) =>
    api.get("movie/now_playing", { params: { page } }),
  upcoming: (page: number) => api.get("movie/upcoming", { params: { page } }),
  popular: (page: number) => api.get("movie/popular", { params: { page } }),
  topRated: (page: number) => api.get("movie/top_rated", { params: { page } }),
  detail: (id: number) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "image,videos"
      }
    }),
  credit: (id: number) => api.get(`movie/${id}/credits`),
  search: (query: string, page: number) =>
    api.get("search/movie", {
      params: {
        query,
        include_adult: true,
        region: "KR",
        page
      }
    }),
  person: (id: number) =>
    api.get(`person/${id}`, {
      params: {
        append_to_response: "image,videos"
      }
    }),
  recommendation: (id: number, page: number) =>
    api.get(`movie/${id}/recommendations`, {
      params: {
        page
      }
    }),
  similar: (id: number, page: number) =>
    api.get(`movie/${id}/similar`, {
      params: {
        page
      }
    }),
  filmography: (id: number) => api.get(`person/${id}/movie_credits`)
};
