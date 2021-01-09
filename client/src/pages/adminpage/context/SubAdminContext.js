import React, { createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { toast } from '../../../util/ToastUtil';
import { LoadingContext } from './loaderContext';

export const SubAdminContext = createContext();

export const SubAdminContextProvider = (props) => {
  const loader = useContext(LoadingContext);

  const getSubAdmins = async () => {
    try {
      loader.setOpen(true);

      let res = await axios.get('/api/admin/users?role=sub-admin');
      loader.setOpen(false);

      return res.data.data;
    } catch (error) {
      if (error.response.status === 401);
      console.error(error);
    } finally {
      loader.setOpen(false);
    }
  };

  const addReportee = async (subAdminId, employeeId) => {
    if (!(subAdminId === '')) {
      loader.setOpen(true);

      try {
        let reqqres = await axios.post('/api/admin/add-reportee', {
          reporteeId: subAdminId,
          userId: employeeId,
        });
        loader.setOpen(false);

        toast('Add Reportee Successful');
      } catch (error) {
        loader.setOpen(false);

        toast('Please Select a Sub-Admin');
      }
    } else {
      toast('Please select a Sub-Admin');
    }
  };

  const uploadDocument = async (
    file,
    fileName,
    fileType = 'doc', // 'doc'
    date, // {month: 05, year:2020}
    userId,
    {
      uploadUrl = '/api/file/upload-url',
      confirmationUrl = '/api/employee',
    } = {}
  ) => {
    const formData = new FormData();
    formData.append('file', file);
    loader.setOpen(true);

    const res = await axios.post(
      uploadUrl,
      JSON.stringify({
        fileName: file.name,
        userId,
        date: fileName,
        fileType,
        fileExtension: 'pdf',
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    const { fileKey, url } = res.data;
    const res2 = await axios.put(url, formData);
    if (res2.status === 200) {
      await axios.put(
        confirmationUrl,
        JSON.stringify({
          userId,
          financialDocument: {
            documentType: fileType,
            fileKey,
            documentedDate: {
              month: date.month,
              year: date.year,
            },
          },
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      loader.setOpen(false);

      toast(`File uploaded successfully`);
      return true;
    }
    return null;
  };

  return (
    <SubAdminContext.Provider
      value={{
        getSubAdmins,
        addReportee,
      }}>
      {props.children}
    </SubAdminContext.Provider>
  );
};
