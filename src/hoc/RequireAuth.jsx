import React from 'react';
import { Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const RequireAuth = ({children}) => {
  const {accessToken} = useSelector((state)=> state.user)
  if (!accessToken) {
    return <Navigate to='/login' replace/>
    }
  return children
};

export default RequireAuth;
