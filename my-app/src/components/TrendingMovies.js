import  React, {Component} from 'react';
import TrendingMoviesList from './TrendingMoviesList';
import * as moviesApi from '../services/Api';

export default class TrendingMovies extends Component {
    // eslint-disable-next-line no-undef
    state = {
        movies:[],
    }
    componentDidMount(){
        this.fetchTrendingMovies();
    }
    // eslint-disable-next-line no-undef
    fetchTrendingMovies = ()=>{
        moviesApi.fetchTrendingMovies.then(({data})=>this.setState({movies: data.results}))
        .catch()
    };
    render(){
       const {movies} = this.state;
       return(
       <div>
           <h1>Trending today</h1>
           <TrendingMoviesList movies={movies}/>
        </div>
       ) 
    }
};