import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendingMoviesList = ({movies, match})=> {
    // console.log(movies);
    return(
       <ul>
            {movies.map((movie)=>(
            <li key={movie.id}>
                <Link to={`${match.path}/${movie.id}`}>{movie.title}</Link>
            </li>))}
        </ul>
    )
};
TrendingMoviesList.propTypes ={
    movies:PropTypes.array.isRequired
}

export default withRouter(TrendingMoviesList);
