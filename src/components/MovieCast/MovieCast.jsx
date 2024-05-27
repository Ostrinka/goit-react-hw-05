import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCredits } from '../../movies-api';
import css from './MovieCast.module.css'
 
const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

export default function MovieCast(){
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
      const getMovieCast = async (movieId) => {
        try {
          const data = await fetchMovieCredits(movieId);
          setCast(data.cast);
        } catch (error) {
        console.error(error);
      }
      };
      getMovieCast(movieId);
    }, [movieId]);
    return(
        <ul className={css.menu}>
        {cast.length > 0 &&
           cast.map(({ id, name, profile_path, character }) => (
            <li key={id} className={css.list}>
              <img className={css.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : defaultImg
                }
                alt="actor"
                loading="lazy"
                width="100"
              />
              <h3 className={css.name}>{name}</h3>
              <p className={css.character}> Character: {character}</p>
            </li>
          ))}
        </ul>
      );
}