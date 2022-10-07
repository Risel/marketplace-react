import React from 'react';
import {useSelector} from "react-redux";

const ProfilePage = () => {
  const {userEmail} = useSelector((state) =>state.user )
  return (
    <div>
      {userEmail}
    </div>
  );
};

export default ProfilePage;
