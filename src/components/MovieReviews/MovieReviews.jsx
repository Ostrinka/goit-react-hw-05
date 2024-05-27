import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from '../../movies-api';
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const getMovieReviews = async () => {
            try {
                const data = await fetchMovieReviews(movieId);
                setReviews(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        if (movieId) {
            getMovieReviews();
        }
    }, [movieId]);

    return (
        <ul>
            {reviews.length > 0 ? (
                reviews.map(({ author, content, id }) => (
                    <li key={id} className={css.list}>
                        <p className={css.name}>{author}</p>
                        <p className={css.content}>{content}</p>
                    </li>
                ))
            ) : (
                <p>There are no reviews yet. You can be the first</p>
            )}
        </ul>
    );
}