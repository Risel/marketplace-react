import React from 'react';
import styles from "./Header.module.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/user/userSlice";

const Header = () => {
  const {userEmail, accessToken} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <header className={styles.root}>
      <div className={styles.leftBar}>
        <div className={styles.logo}>
          <Link to={'/'}>Marketplace</Link>
        </div>
        <div className={styles.catalog}>
          <Link to={'/products'}>
            Products
          </Link>
        </div>
      </div>
      <div className={styles.auth}>
        {
          accessToken
            ?
            <div className={styles.logged}>
              <div className={styles.logged_burger}></div>
                <span>Welcome back,</span>
              <Link className={styles.link} to='/profile'> {userEmail}</Link>
              <button className={styles.button_red} onClick={() => dispatch(logout())}>
                Sign out
              </button>
            </div>
            :
            <div>
              <div className={styles.burger}>
                <span></span>
              </div>
              <button className={styles.button}><Link to='/login'>Login</Link></button>
              <button className={styles.button}><Link to='/register'>Sign up</Link></button>
            </div>
        }
      </div>
    </header>
  );
};

export default Header;
