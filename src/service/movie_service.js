import axios from 'axios';

const BEARER_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGFhMDA2YjMwMGM2YWQwMGQ4ZThkMjJkZTNhYWYzNiIsInN1YiI6IjY1YTVjNmJlOWJjZDBmMDEyOWJhMzM3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ly_nZHdPuPUOxko7DG-5fun8SxWRC8ozlL5i8-CNkns';
// const API_KEY = 'f0aa006b300c6ad00d8e8d22de3aaf36';
const URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = URL;
axios.defaults.headers.common['Authorization'] = BEARER_TOKEN;
axios.defaults.params = {
  language: 'en-US',
  //   api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get('/trending/movie/day');
  //   console.log('getTrending :>> ', results);
  return results;
};

export const getSearchMovies = async (query, page) => {
  const { data } = await axios.get('/search/movie', {
    params: { include_adult: false, query, page },
  });
  //   console.log('getSearchMovies :>> ', data);
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  console.log('getMovieDetails :>> ', data);
  return data;
};

export const getMovieCredits = async id => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${id}/credits`);
  console.log('getMovieCredits :>> ', cast);
  return cast;
};

export const getMovieReviews = async id => {
  const {
    data: { results },
  } = await axios.get(`/movie/${id}/reviews`);
  console.log('getMovieReviews :>> ', results);
  return results;
};
