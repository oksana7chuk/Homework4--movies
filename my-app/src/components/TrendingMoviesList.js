import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
// import styles from '../App.module.css'

const TrendingMoviesList = ({ movies, match }) => {
  console.log(match);

  return (
    <ul
    //    className={styles.movieList}
    >
      {movies.map((movie) => (
        <li
          key={movie.id}
          // className={styles.movieListItem}
        >
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
TrendingMoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default withRouter(TrendingMoviesList);
