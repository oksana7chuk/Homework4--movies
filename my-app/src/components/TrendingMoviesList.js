import React from 'react';
import {Link} from 'react-router-dom';

const TrendingMoviesList = ({movies =[]})=> (
        <ul>
            {movies.map((movie)=>(
            <li>{movie.title}</li>))}
        </ul>
);

export default TrendingMoviesList;
