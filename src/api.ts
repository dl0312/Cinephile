import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "ko-KR",
    region: "KR"
  }
});

export const moviesApi = {
  nowPlaying: (page: number) =>
    api.get("movie/now_playing", { params: { page } }),
  upcoming: (page: number) => api.get("movie/upcoming", { params: { page } }),
  popular: (page: number) => api.get("movie/popular", { params: { page } }),
  detail: (id: number) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
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
    })
};

// export const tvApi = {
//   topRated: () => api.get("tv/top_rated"),
//   popular: () => api.get("tv/popular"),
//   airingToday: () => api.get("tv/airing_today"),
//   detail: id =>
//     api.get(`tv/${id}`, {
//       params: {
//         append_to_response: "videos"
//       }
//     }),
//   search: term =>
//     api.get("search/tv", {
//       params: {
//         query: encodeURIComponent(term)
//       }
//     })
// };
