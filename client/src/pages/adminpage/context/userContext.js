import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
export const userContext = createContext();

export const UserState = (props) => {
  const [role, setRole] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkLogin = async () => {
    try {
      const res = await axios.get('/api/auth/validate-token').then();
      // console.log(res.data.role);

      if (res.data.role === 'admin' || res.data.role === 'user') {
        setIsAuthenticated(true);
        return true;
      }
    } catch (error) {
      setIsAuthenticated(false);
      return false;
    }

    //Logout
  };

  useEffect(() => {
    let truth = localStorage.getItem('login');
    if (truth === 'true') {
      setIsAuthenticated(true);
    }
    const interval = setInterval(() => {
      checkLogin();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const logout = async () => {
    try {
      await axios.get('/api/auth/logout');
    } catch (error) {
    } finally {
      setIsAuthenticated(false);
    }
  };

  const setLoginState = (bool) => {
    setIsAuthenticated(bool);
  };

  return (
    <userContext.Provider
      value={{
        isAuthenticated,
        checkLogin,
        logout,
        setLoginState,
      }}>
      {props.children}
    </userContext.Provider>
  );
};
