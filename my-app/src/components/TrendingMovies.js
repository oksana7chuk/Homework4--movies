import  React, {Component} from 'react';
import TrendingMoviesList from './TrendingMoviesList';
import * as moviesApi from '../services/Api';

export default class TrendingMovies extends Component {
    state = {
        movies: []
    }
    componentDidMount(){
        moviesApi.fetchTrendingMovies().then(data=>this.setState({movies: data.items}))
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
}; 