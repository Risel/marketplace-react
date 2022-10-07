import React from 'react';
import styles from "./Header.module.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/user/userSlice";

const Header = () => {
  const {userEmail,accessToken} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <header className={styles.root}>
      <div className={styles.catalog}>
        <Link to={'/products'}>
          Products
        </Link>
      </div>
      <div className={styles.logo}>
        <Link to={'/'}>Marketplace</Link>
      </div>
      <div className={styles.auth}>
        {
          accessToken
            ?
            <div>
              <div>Welcome back, <Link to='/profile'>{userEmail}</Link></div>
              <button onClick={() => dispatch(logout())}>Sign out</button>

            </div>
            :
            <div>
              <button><Link to='/login'>Sign in</Link></button>
              <button><Link to='/register'>Register</Link></button>
            </div>
        }
      </div>

    </header>
  );
};

export default Header;
