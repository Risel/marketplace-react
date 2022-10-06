import React from 'react';
import {useLocation, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const RequireAuth = ({children}) => {
  const {userInfo} = useSelector((state)=> state.user)
  const location = useLocation()
  if (!userInfo) {
    return <Navigate to='/login' state={{from: location}} replace/>
    }
  return children
};

export default RequireAuth;
