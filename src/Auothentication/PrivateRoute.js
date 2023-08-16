import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { auth } from './Firebase'

export default function PrivateRoute({ children, ...rest }) {
  console.log(auth.currentUser)
  const user = auth.currentUser
  if (!user) {
    return <Navigate to="/login" />
  } else {
    return children;
  }
};

// export user;