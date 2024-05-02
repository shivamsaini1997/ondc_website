// PrivateRoute.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate,Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Navigate to="/agent/login" />
      }
    />
  );
};

export default PrivateRoute;
