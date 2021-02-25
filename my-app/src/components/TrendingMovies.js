import  React, {Component} from 'react';
import TrendingMoviesList from './TrendingMoviesList';
import * as moviesApi from '../services/moviesListApi';

export default class TrendingMovies extends Component {
    state = {
        movies: []
    }
    componentDidMount(){
        moviesApi.fetchMovies().then(items=>this.setState({movies}))
    }
    render(){
        const {movies} = this.state;
        return(
            <div>
                <h1>Trending today</h1>
                <TrendingMoviesList movies={movies}/>
            </div>

        )
    }
}