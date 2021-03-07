import React, {Component} from 'react';
import styles from '../App.module.css';
import MoviesPage from '../pages/MoviesPage';

export default class SearchBox extends Component {
    // eslint-disable-next-line no-undef
    state = {
        query: '',
    }
    // eslint-disable-next-line no-undef
    handleChange = e => {
        this.setState({query: e.target.value})
      };
    // eslint-disable-next-line no-undef
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({query:''})
      }
    render(){
        const {query} = this.state;
        return (
            <div>
                <h1 className={styles.smallTitle}>Movies</h1>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" className={styles.SearchFormButton}>
                       <span> Search</span>
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
}