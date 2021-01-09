import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';
import { toast } from '../../../util/ToastUtil';
import { LoadingContext } from './loaderContext';
export const EmployeeContext = createContext();

export const EmployeeStateProvider = (props) => {
  const { open, setOpen } = useContext(LoadingContext);

  //

  useEffect(() => {
    let token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      let loggedUserId = parseJwt(token);
      console.log(loggedUserId);
      let subadmins = [](async () => {
        let res = await axios.get('/api/admin/users?role=sub-admin');
        subadmins = res.data.data;
        subadmins.forEach((o, i) => {
          if (o._id === loggedUserId.id) {
            return console.log('Is a sub-admin');
          }
        });
      })();
    }
  }, []);

  const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  };

  //

  const [employeeList, setEmployeeList] = useState([
    {
      email: 'admin@gmail.com',
      empNo: 'FW-----',
      id: '5f82d69a7a816f48c054cc59',
      joinDate: '11/Oct/2020',
      name: 'admin',
      phoneNumber: '--',
      role: 'admin',
      serial: 0,
      status: 'Active',
    },
  ]);
  const [selectedUserData, setSelectedUserData] = useState({
    isFormComplete: true,
    increments: [],
  });

  const getEmployeeList = async () => {
    setOpen(true);
    try {
      const formattedData = [];
      const users = await axios.get('/api/admin/users');
      setOpen(false);

      users.data.data.forEach((employee, i) => {
        formattedData.push({
          serial: i,
          role: employee.role,
          name: employee.name,
          email: employee.email,
          phoneNumber: !employee.phoneNumber ? '--' : employee.phoneNumber,
          status:
            employee.active === 0
              ? 'Relieved    ' +
                ' From - ' +
                moment(employee.updatedAt).format('DD/MMM/YYYY')
              : employee.active === 1
              ? 'Active'
              : 'Disabled' +
                ' From - ' +
                moment(employee.updatedAt).format('DD/MMM/YYYY'),
          empNo: !employee.empNo ? 'FW-----' : employee.empNo,
          joinDate: moment(employee.createdAt).format('DD/MMM/YYYY'),
          id: employee._id,
        });
      });
      setEmployeeList(formattedData);
      return employeeList;
    } catch (error) {
      setOpen(false);

      console.log('Not Authorized');
      return { msg: 'Not AUthorized' };
    }
  };

  const getAdmins = async () => {
    try {
      setOpen(true);

      let res = await axios.get('/api/admin/users?role=admin');
      setOpen(false);

      return res.data.data;
    } catch (error) {
      setOpen(false);

      if (error.response.status === 401);
      console.error(error);
    }
  };

  const getSelectedUserData = async (selectedUser) => {
    try {
      setOpen(true);

      let selectedUserData1 = await axios.get(
        `/api/admin/employee-info/${selectedUser}?select=FName,increments,photo,isFormComplete,empNo,LName,email,joiningDate,designation,phoneNumber,Address,FWEmail,Manager,custLoc,custName,BillingPH,annualCTC,increment,lwd,comments,user`
      );

      setOpen(false);

      selectedUserData1 = selectedUserData1.data.data;
      if (!selectedUserData1?.increments) {
        selectedUserData1.increments = [];
      }
      setSelectedUserData(selectedUserData1);

      return selectedUserData;
    } catch (e) {
      setOpen(false);

      if (e.response.status === 401)
        console.log('Error fetching employee data');
    }
  };

  useEffect(() => {
    console.log(selectedUserData);
  }, [selectedUserData]);

  const updateUserProfile = async (data) => {
    try {
      setOpen(true);

      let done = await axios.put('/api/admin/register', data);
      setOpen(false);

      toast('Employee Updated');
    } catch (error) {
      setOpen(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      setOpen(true);
      await axios.delete(`/api/admin/employee/${id}`);
      setOpen(false);

      toast('Employee Deleted');
    } catch (err) {
      if (err.response.status === 403) {
        return toast(
          'NOT AUTHORIZED:  Deleting employee is an admin only function'
        );
      }
      toast(err.response.data.error);
    } finally {
      setOpen(false);
    }
  };

  const changeEmployeeStatus = async (id, status) => {
    let tempStatus = '';
    employeeList.forEach((o, i) => {
      if (o.id === id) {
        tempStatus = o.status;
        if (status === 1) {
          o.status = 'Active';
        } else if (status === 2) {
          o.status = 'Disabled From \n Loading';
        } else if (status === 0) {
          o.status = 'Relieved From \n Loading';
        }
      }
    });

    try {
      setOpen(true);

      const url = '/api/admin/change-activity';
      await axios.post(url, {
        userId: id,
        active: status,
      });
      setOpen(false);
    } catch (e) {
      setOpen(false);

      toast('Error changing status. Try again');

      employeeList.forEach((o, i) => {
        if (o.id === id) {
          o.status = tempStatus;
        }
      });
    }
  };

  const toggleFormComplete = async (a) => {
    try {
      setSelectedUserData({
        ...selectedUserData,
        isFormComplete: !selectedUserData.isFormComplete,
      });

      await axios.post('/api/admin/toggle-form-completion', {
        userId: a,
        isFormComplete: !selectedUserData.isFormComplete,
      });

      toast('Form state changed');
    } catch (error) {
      toast('Server Error Try Again');
    } finally {
    }
  };

  const resetPassword = async (user) => {
    console.log('reset');
    try {
      let body = {
        userId: user,
      };

      await axios.post('/api/admin/update-password', body);

      toast('Password Reset Completed');
    } catch (error) {
      console.log(error);
      toast('Error in Resetting the Password');
    }
  };

  const addEmployee = async (data) => {
    try {
      await axios.post('/api/auth/register', data);

      toast('Added a new User');
    } catch (error) {
      toast('User Exists / Check Internet ');
    }
  };
  return (
    <EmployeeContext.Provider
      value={{
        employeeList,
        selectedUserData,

        setSelectedUserData,
        getAdmins,
        getEmployeeList,
        updateUserProfile,
        getSelectedUserData,
        toggleFormComplete,
        deleteUser,
        resetPassword,
        changeEmployeeStatus,
        addEmployee,
      }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
