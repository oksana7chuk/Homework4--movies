import React from 'react';
import { Route , Switch, NavLink} from 'react-router-dom';
import styles from './App.module.css';
import HomePage from './pages/HomePage'
// import MoviesPage from  './pages/MoviesPage'
// import TrendingMoviesList from './components/TrendingMovies'
// import axios from 'axios';

// const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjIwYTA3ZjRjOGM2NmNlMTU1ZTY1MDg5ZTBlNDg5OSIsInN1YiI6IjYwMzRkYTUwZTc4Njg3MDA0MWQyMmI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T0HHSGj_DUFaJ01TDkhYN9C_25mA9kreWmK81jrKZJ0'
// const moviesList = axios.get('https://developers.themoviedb.org/3/trending/movie/day', { headers: 
// { 'Authorization': 'Bearer'+accessToken, 
//   'Content-Type': 'application/json;charset=utf-8'
// }}).then((response) => {
//   console.log(response.data);
//   console.log(response.headers);
// });

// const getMovies = axios.get('https://developers.themoviedb.org/3/trending/movie/day').then(console.log)

const App = () => (
<div>
  <header className={styles.header}>
    <div className={styles.smallTitle}>
      <NavLink to='/' exact className={styles.link} activeClassName={styles.activeLink}>Home</NavLink>
    </div>
    <div className={styles.smallTitle} >
      <NavLink to='/movies'className={styles.link} activeClassName={styles.activeLink} >Movies</NavLink>
    </div>
  </header>
  <span>
    {/* <TrendingMoviesList movies={moviesList}/> */}
  </span>
  <Switch>
      <Route path='/' exact component={HomePage} />
      {/* <Route path='/movies/:movieId' component={MovieDetailsPage} /> */}
      {/* <Route path='/movies/' exact component={MoviesPage} /> */}
      <Route  component={HomePage} />
    </Switch>
</div>
)

export default App;
