import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const movies = await fetchTrendingMovies();
      setMovies(movies);
    };

    getTrendingMovies();
  }, []);
   return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}