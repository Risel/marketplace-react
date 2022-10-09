import React from 'react';
import {useSelector} from "react-redux";
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const {userEmail} = useSelector((state) => state.user)
  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        here must be profile image
      </div>
      <div className={styles.info}>
        <h1>User: {userEmail}</h1>
        <h2>Achievments: </h2>
        <hr/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et quam ante. Phasellus semper turpis a odio
          pellentesque commodo. Fusce mollis ante sed nunc dignissim ullamcorper sit amet vitae felis. Duis scelerisque
          aliquam orci, in vestibulum diam accumsan et. Mauris ac orci rutrum, luctus tellus eu, facilisis mi. Duis
          blandit mattis rhoncus. Ut pellentesque varius eros, sit amet consequat leo aliquam et. Sed sapien diam,
          elementum vel nisi sit amet, mattis euismod urna. Suspendisse vestibulum tincidunt justo.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
