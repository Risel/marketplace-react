import React from 'react';
import styles from "./Header.module.scss"
import {Link} from "react-router-dom";

const Header = () => {
  const [isAuth, setIsAuth] = React.useState(false)
  return (
    <header className={styles.root}>
      <div className={styles.catalog}>
        <Link to = {'/catalog'}>
          Catalog
        </Link>
      </div>
        <div className={styles.logo}>
          <Link to={'/'}>Marketplace</Link>
        </div>
        <div className={styles.auth}>
          {
            isAuth
              ?
              <Link to={'/profile'}>
                Profile
              </Link>
              :
              <Link to={'/login'}>
                Login
              </Link>
          }
        </div>
    </header>
  );
};

export default Header;
