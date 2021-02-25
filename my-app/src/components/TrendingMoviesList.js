import React from 'react';
import {Link} from 'react-router-dom';

const TrendingMoviesList = ({movies =[]})=> (
        <ul>
            {movies.map((movie)=>(
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>))}
        </ul>
);

export default TrendingMoviesList;
