import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './userContext';

const UserState = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkLogin = async () => {
    try {
      const res = await axios.get('/api/auth/validate-token').then();
      // console.log(res.data.role);

      if (res.data.role === 'admin' || res.data.role === 'user') {
        setIsAuthenticated(true);
      }
    } catch (error) {
      setIsAuthenticated(false);
    }

    //Logout
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkLogin;
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const logout = async () => {
    try {
      await axios.get('/api/auth/logout');
      setIsAuthenticated(false);
    } catch (error) {}
  };

  const setLoginState = (bool) => {
    setIsAuthenticated(bool);
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        checkLogin,
        logout,
        setLoginState,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
