/* eslint-disable no-undef */
import React, {Component} from 'react';
import styles from '../App.module.css';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import * as moviesApi from '../services/Api';
import SearchBox from '../components/SearchBox';
import SearchedMoviesList from '../components/SearchedMoviesList'


export default class MoviesPage extends Component {
  // eslint-disable-next-line no-undef
  state = {
    movies: [],
  };
  componentDidMount(){
    this.fetchSearchedMovies()
  };
  
  fetchSearchedMovies = query => {
    moviesApi.fetchSearchedMovies(query)
    .then(({data})=>this.setState({movies: data.results}))
    .catch()
  };
    render (){
      const {movies} = this.state;
      return (
            <div>
                {/* <SearchBox onSubmit={this.fetchSearchedMovies}/>
                {movies.length > 0 && <SearchedMoviesList movies={movies}/>} */}
                {/* <Route path='/movies/:movieId' component={MovieDetailsPage} /> */}
            </div>
        )
    }
};