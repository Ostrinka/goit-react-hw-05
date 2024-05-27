import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';

const Navigation = lazy(() => import("../Navigation/Navigation"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
// import Navigation from '../Navigation/Navigation';
// import HomePage from '../../pages/HomePage/HomePage'
// import MoviesPage from '../../pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
// import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
// import './App.module.css'
 
export default function App () {
    return (
      <div>
        <Navigation />
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes></Suspense>
         </div>
    )
}

