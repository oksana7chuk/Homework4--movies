import React, { Component } from "react";
import Movie from "../components/Movie";
import styles from "../App.module.css";
// import {fetchMoviesWithId} from '../services/Api';
import * as movieApi from "../services/Api";

const getIdFromProps = (props) => props.match.params.movieId;
export default class MovieDetailsPage extends Component {
  // eslint-disable-next-line no-undef
  state = {
    movie: null,
  };
  componentDidMount() {
    const movieId = getIdFromProps(this.props);
    // console.log(movieId);
    movieApi
      .fetchMoviesWithId(movieId)
      .then((response) => response.data)
      .then((data) => this.setState({ movie: data }));
  }
  componentDidUpdate() {
    const movieId = getIdFromProps(this.props);
    movieApi
      .fetchMoviesWithId(movieId)
      .then((response) => response.data)
      .then((data) => this.setState({ movie: data }));
  }
  // eslint-disable-next-line no-undef
  handleGoBack = () => {
    // this.props.history.push('/');
    console.log(this.props);
  };
  render() {
    const { movie } = this.state;
    console.log(movie);

    return (
      <div>
        <div>Movie Details</div>
        {movie && <Movie {...movie} onGoBack={this.handleGoBack} />}
      </div>
    );
  }
}
