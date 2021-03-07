import React, {Component} from 'react';
// import {Route, Link} from 'react-router-dom';
import styles from '../App.module.css';
import {fetchMovieCast} from '../services/Api';
import CastList from './CastList';



export default class Cast extends Component {
   // eslint-disable-next-line no-undef
   state = {
       cast: []
    }
    componentDidMount(){
        fetchMovieCast(this.props.movieId)
        .then(response=>response.data)
        .then(data=>this.setState({cast: data.cast}))
    }
    render(){
        const {cast}= this.state;
        console.log(this.state.cast)
        return (
        <div>
            {cast&&<CastList cast={cast}/>}
        </div>)
    }
};