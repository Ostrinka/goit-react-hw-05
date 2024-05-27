import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../movies-api';
import { FaArrowLeftLong } from "react-icons/fa6";
// import css from './MovieDetailsPage.module.css';

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

  const { original_title, overview, genres, poster_path, vote_average } = movieDetails;
  const score = `${(vote_average * 10)}%`;

  return (
    <div>
      <p>
        <Link to={backLinkRef.current}><FaArrowLeftLong /> Go back </Link>
      </p>
        <div>
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
          <h1>{original_title}</h1>
          <p>User score: {score}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres &&
              genres.length > 0 &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link
              to="cast"
              state={{ ...location.state }}
              
            >
              Cast
            </Link>
          </li>
          <li >
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





