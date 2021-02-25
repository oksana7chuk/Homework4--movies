import React, {Component} from 'react';
import styles from '../App.module.css';
import * as moviesApi from '../services/Api';


export default class MoviesPage extends Component {
    state = {
        movies: [],
        query:''
    }
    handleChange = e => {
      this.setState({
        query: e.target.value
      })
    };
    handleSubmit = e => {
     this.props.onSubmit(this.state.query);    //   e.preventDefault();
 
      this.setState({query:''})
    }
    render (){
      const {query} = this.state;
      return (
            <div>
                <h1 className={styles.smallTitle}>Movies</h1>
                <form  
                // onSubmit={this.handleSubmit}  
                className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchFormButton}>
                       <span>Search</span>
                    </button>
                    <input 
                      className={styles.SearchFormInput}
                       onChange={this.handleChange}
                       value = {query}
                       type="text"
                       placeholder="Search movies"
                    />
                </form>
            </div>
        )
    }
};