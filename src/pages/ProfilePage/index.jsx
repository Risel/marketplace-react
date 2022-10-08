import React from 'react';
import {useSelector} from "react-redux";
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const {userEmail} = useSelector((state) => state.user)
  return (
    <div className={styles.root}>
      {userEmail}
    </div>
  );
};

export default ProfilePage;
