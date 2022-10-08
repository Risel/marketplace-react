import React from 'react';
import styles from './MainPage.module.scss'
import {Link} from "react-router-dom";

const MainPage = () => {
  return (
    <main className={styles.root}>
      <article className={styles.about}>
        <h1>Biggest e-commerce website in the world</h1>
        <h2>Want to see our catalog?</h2>
        <button className={styles.btn}>
          <Link to={'/products'}>Check it out!</Link>
        </button>
      </article>
    </main>
  );
};

export default MainPage;
