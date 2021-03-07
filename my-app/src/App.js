import React from 'react';
import { Route , Switch, NavLink} from 'react-router-dom';
import styles from './App.module.css';
import HomePage from './pages/HomePage';
import TrendingMovies from './components/TrendingMovies';
import MoviesPage from  './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';


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
  <div>
    <TrendingMovies/>
  </div>
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/movies/:movieId' component={MovieDetailsPage} />
    <Route path='/movies/' exact component={MoviesPage} />
    <Route  component={HomePage} />
  </Switch>
</div>
);

export default App;

// /console.log(context.value.match.params)