import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UserContext from '../context/userContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userContext = useContext(UserContext);
  const { isAuthenticated, checkLogin } = userContext;
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
