import React, {lazy, Suspense} from 'react';
import { Route , Switch, NavLink} from 'react-router-dom';
import Loadable from 'react-loadable';
import styles from './App.module.css';
// import HomePage from './pages/HomePage';
import TrendingMovies from './components/TrendingMovies';
// import MoviesPage from  './pages/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';


const AsyncHome = lazy(()=> import('../src/pages/HomePage' /*webpackChunkName: "home-page"*/));
const AsyncMovieDetails = lazy(()=> import('../src/pages/MovieDetailsPage'/*webpackChunkName: "movie-detailes-page"*/));
const AsyncMovies = lazy(()=> import('../src/pages/MoviesPage'/*webpackChunkName: "movies-page"*/));

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
  <Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      <Route path='/' exact component={AsyncHome} />
      <Route path='/movies/:movieId' component={AsyncMovieDetails} />
      <Route path='/movies/' exact component={AsyncMovies} />
      <Route  component={AsyncHome}/>
    </Switch>
  </Suspense>
  
</div>
);

export default App;

// /console.log(context.value.match.params)