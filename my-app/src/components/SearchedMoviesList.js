import React, {Component} from 'react';
import styles from '../App.module.css';
import Movie from '../components/Movie'

export default class  SearchedMoviesList extends Component{
    render(){
        return(
            <ul className={styles.SearchedMoviesList}>
            {this.props.movies.map(({id,title,genres, overview})=>(
            <li key={id} className={styles.Movie}>
                <Movie title={title} genres={genres} overview={overview} />
            </li>))}
        </ul>)
    }
};