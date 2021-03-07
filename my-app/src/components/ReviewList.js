import React, {Component} from 'react';
import styles from '../App.module.css';
import {fetchMovieReviews} from '../services/Api';
import Review from './Review'

export default class ReviewList extends Component {
    // eslint-disable-next-line no-undef
    state={
        reviews: null,
    }
    componentDidMount(){
        fetchMovieReviews(this.props.movieId).then(data=>this.setState({reviews: data.results}))
    }
    render(){
        const {reviews}= this.state;
        return(
            <div>
                {reviews ? (<Review reviews={reviews}/>) : 
                (<p>We don't have any reviews for this movie</p>)}
            </div>
        )
    }
};