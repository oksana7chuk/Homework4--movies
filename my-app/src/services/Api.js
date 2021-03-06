import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const key = '?api_key=cb20a07f4c8c66ce155e65089e0e4899';
export const fetchTrendingMovies = axios.get(baseUrl+'trending/movie/day'+key);
export const fetchSearchedMovies = (query ='')=> axios.get(baseUrl+'search/'+query+key);
export const fetchMoviesWithId = movieId =>axios.get(baseUrl+'movie/'+movieId+key);
export const fetchMovieCast = movieId =>axios.get(baseUrl+'movie/'+movieId+'/credits'+key)
export const fetchMovieReviews = movieId =>axios.get(baseUrl+'movie/'+movieId+'/reviews'+key);



// const baseUrl = 'https://developers.themoviedb.org/3/';
// const key = '?api_key=cb20a07f4c8c66ce155e65089e0e4899';

// export const fetchTrendingMovies = () => {
//     return axios.get(baseUrl+'trending/movie/day'+key).them(response=>response.data)
// };
// export const fetchSearchedMovies = query => {
//     return axios.get(baseUrl+'search/'+query'+key).them(response=>response.data)
// }
// const trendingMoviesUrl = 'https://developers.themoviedb.org/3/trending/movie/day';
// const searchMoviesUrl = 'https://api.themoviedb.org/3/search/movie';
// const movieDetailsUrl = 'https://api.themoviedb.org/3/movie/{movie_id}';
// const movieCreditsUrl = 'https://api.themoviedb.org/3/movie/{movie_id}/credits';
// const mopvieReviewsUrl = 'https://api.themoviedb.org/3/movie/{movie_id}/reviews';
