import axios from "axios";

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmY5MDkyZjc4NWIzZGViMmE5YjdiNTQ4MTc1ZjE0YiIsInN1YiI6IjY2NTA1YmMzYThmZTIyYzY2ZTBhNmY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3mK9Bml-9ypZ_8Y8a5UMYjvvhzPeIGWHd5jhmOVt1GM';
const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
};

export const fetchTrendingMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day';
  try {
    const response = await axios.get(url, options);
    return response.data.results;
    } catch (error) {
    console.error(error);
  }
};

export const fetchSearchMovie = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieCredits = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};