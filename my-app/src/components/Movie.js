import React from "react";
import styles from "../App.module.css";
import { Route } from "react-router-dom";
import Cast from "../components/Cast";
import ReviewList from "./ReviewList";

const Movie = ({ id, title, overview, poster, score, genres, onGoBack }) => (
  <div>
    <button type="button" onClick={onGoBack}>
      Back
    </button>
    <div className={styles.movieDetailsWrap}>
      <div className={styles.moviePoster}>
        <img
          className={styles.movieImg}
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt=""
        />
      </div>
      <div className={styles.movieDetails}>
        <h1>{title}</h1>
        <p>User score:{score}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className={styles.additionalInfo}>
      <p>Additional Information</p>
      <p>Cast</p>
      <Cast movieId={id} />
      <p>Reviews</p>
      <ReviewList movieId={id} />
    </div>
    <Route path="/movies/:movieId/cast" component={Cast} />
    <Route path="/movies/:movieId/reviews" component={ReviewList} />
  </div>
);

export default Movie;

// {this.props.match.path}
