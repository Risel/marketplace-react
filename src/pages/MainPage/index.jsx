import React from 'react';
import styles from './MainPage.module.scss'
import {Link} from "react-router-dom";

const MainPage = () => {
  return (
    <main className={styles.root}>
      <article className={styles.about}>
        <h2>
          Lorem ipsum dolor sit amet, en diam, elementum vel nisi sit amet, mattis euismod urna.
          Suspendisse vestibulum tincidunt justo.
        </h2>
        <button className={styles.button}>
          <Link to={'/products'}>Check it out!</Link>
        </button>
      </article>
    </main>
  );
};

export default MainPage;
