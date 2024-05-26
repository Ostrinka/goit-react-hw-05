import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchMovies = async () => {
      const data = searchParams.get('query');
      if (!data) {
        setMovies([]);
        return;
      }
      const results = await fetchSearchMovie(data);
      setMovies(results);
    };

    searchMovies();
  }, [searchParams]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = event.target.elements.search.value;
    setSearchParams({ query: data });
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <MovieList movies={movies} />
      )}
    </div>
  );
}
