import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { toast } from '../../../util/ToastUtil';
import { LoadingContext } from './loaderContext';

export const ListingContext = createContext();

export const ListingContextProvider = (props) => {
  const loader = useContext(LoadingContext);
  const [addJobData, setAddJobData] = useState({
    createdAt: moment().format('DD-MM-YYYY'),
    deadline: '',
    experience: '',
    imageUrl: '',
    isDeleted: false,
    location: '',
    longDescription: '',
    salary: '',
    shiftType: '',
    shortDescription: '',
    title: '',
    type: '',
    updatedAt: '',
    user: '',
  });
  useEffect(() => {
    console.log(addJobData);
  }, [addJobData]);

  let formattedData = [];
  const [selectedJob, setSelectedJob] = useState({
    experience: '',
    salary: '',
    deadline: '',
    imageUrl: '',
    createdAt: '',
    createdBy: '',
    location: '',
    shiftType: '',
    type: '',
    longDescription: '',
    shortDescription: '',
    title: '',
  });
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    loader.setOpen(true);
    try {
      let joba = await axios.get('/api/job-posting', selectedJob);

      joba = joba.data.data;
      console.log(joba);
      joba.forEach((job, i) => {
        formattedData.push({
          experience: job.experience || '-',
          salary: job.salary || '-',
          deadline: moment(job.deadline).format('DD/MM/YYYY') || '-',
          imageUrl: job.imageUrl || '-',
          createdBy: job.createdBy || '-',
          createdAt: job.createdAt || '-',
          location: job.location || '-',
          shiftType: job.shiftType || '-',
          type: job.type || '-',
          longDescription: job.longDescription || '-',
          shortDescription: job.shortDescription || '-',
          title: job.title || '-',
          id: job._id || '-',
        });
      });
      loader.setOpen(false);

      console.log(formattedData);

      setJobs(formattedData);

      return formattedData;
    } catch (error) {
      loader.setOpen(false);
    }
  };
  const getAJob = async (Selected) => {
    try {
      loader.setOpen(true);

      let selectedJobData = await axios.get(`/api/job-posting/${Selected}`);
      selectedJobData = selectedJobData.data.data;
      setSelectedJob(selectedJobData);
      loader.setOpen(false);

      return selectedJobData;
    } catch (error) {
      loader.setOpen(false);

      toast('No Such Job Found');
    }
  };

  const addNewJob = async () => {
    try {
      loader.setOpen(true);

      let selectedJobData = await axios.post(`/api/job-posting/`, addJobData);
      toast('New Job Created ');
      loader.setOpen(false);
    } catch (error) {
      loader.setOpen(false);

      toast("Can't add Job");
    } finally {
      await getAllJobs();
    }
  };

  const updateJob = async () => {
    loader.setOpen(true);

    try {
      let selectedJobData = await axios.put(
        ` /api/job-posting/${selectedJob._id}`,
        selectedJob
      );
      loader.setOpen(false);

      toast('Job Updated');
    } catch (error) {
      toast('Error Updating Job');
    } finally {
      loader.setOpen(false);

      getAllJobs();
    }
  };

  const deleteJob = async () => {
    try {
      loader.setOpen(true);

      await axios.delete(` /api/job-posting/${selectedJob._id}`);
      toast('Job Deleted');
    } catch (error) {
      toast('Error Deleting Job');
    } finally {
      loader.setOpen(false);

      getAllJobs();
    }
  };
  return (
    <ListingContext.Provider
      value={{
        getAllJobs,
        getAJob,
        jobs,
        addJobData,
        setAddJobData,
        selectedJob,
        setSelectedJob,
        addNewJob,
        deleteJob,
        updateJob,
      }}>
      {props.children}
    </ListingContext.Provider>
  );
};
