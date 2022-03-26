import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/meetups'>All Meetups</Link>
          </li>
          <li>
            <Link to='/meetups/new-meetup'>New Meetup</Link>
          </li>
          <li>
            <Link to='/meetups/favorites'>
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
              My Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
