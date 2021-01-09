import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeContext from './homeContext';

const HomeState = (props) => {
  const [userData, setUserData] = useState({ name: 'User', photo: '' });
  const [featuredJobs, setFeaturedJobs] = useState();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await axios.get('/api/employee');
        setUserData({ ...result.data.data });
      } catch (e) {}
    };
    const fetchJobsData = async () => {
      try {
        const res = await axios.get('/api/job-posting');
        setFeaturedJobs(res.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserData();
    fetchJobsData();
  }, []);

  return (
    <HomeContext.Provider
      value={{
        userData,
        featuredJobs,
      }}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeState;
