import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../movies-api';
import { FaArrowLeftLong } from "react-icons/fa6";
import css from './MovieDetailsPage.module.css';

const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (movieId) {
      getMovieDetails();
    }
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average, release_date } = movieDetails;
  const score = `${(vote_average * 10).toFixed(2)}%`;
  const releaseYear = new Date(release_date).getFullYear();

  return (
    <div>
      <button className={css.btn}>
        <Link to={backLinkRef.current}><FaArrowLeftLong />  Go back</Link>
      </button>
        <div className={css.about}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          loading="lazy"
          width={250}
          alt="Movie poster"
          
        />
        <div>
          <h2 className={css.title}>{original_title} ({releaseYear})</h2>
          <p>User score: {score}</p>
          <h3 className={css.title}>Overview</h3>
          <p>{overview}</p>
          <h3 className={css.title}>Genres</h3>
          <ul className={css.genres}> 
            {genres &&
              genres.length > 0 &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li className={css.list}>
            <Link
              to="cast"
              state={{ ...location.state }}
              
            >
              Cast
            </Link>
          </li>
          <li className={css.list}>
            <Link
              to="reviews"
              state={{ ...location.state }}
              
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}





