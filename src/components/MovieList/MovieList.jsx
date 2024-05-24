import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies && movies.length > 0 &&
        movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </li>
        ))}
    </ul>
  );
}