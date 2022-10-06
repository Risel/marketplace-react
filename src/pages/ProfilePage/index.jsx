import React from 'react';
import {useSelector} from "react-redux";

const ProfilePage = () => {
  const {userInfo} = useSelector((state) =>state.user )
  return (
    <div>
      {userInfo}
    </div>
  );
};

export default ProfilePage;
