import React, { useContext } from 'react';
import { EmployeeContext } from '../../context/employeeList';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#0D3C61',
    margin: '5px 0px',
    color: 'white',
    width: '100%',
  },
}));

export const UpdateButton = ({ userData, setUserData }) => {
  const classes = useStyles();
  const contextFunctions = useContext(EmployeeContext);

  const updateUserProfile = async () => {
    let data = {
      userId: userData.user,
      updateParams: userData,
    };

    return await contextFunctions.updateUserProfile(data);
  };

  return (
    <>
      <Button
        onClick={(e) => {
          updateUserProfile();
        }}
        variant='contained'
        className={classes.root}>
        UPDATE
      </Button>
    </>
  );
};

export const DownloadButton = () => {
  const classes = useStyles();

  return (
    <>
      <Button
        variant='contained'
        className={classes.root}
        onClick={(e) => {
          console.log('hi');
          window.open(
            `/api/ejs/pdf-gen?employeeId=${window.location.pathname
              .split('/')[2]
              .toString()}`
          );
        }}>
        Download Full Profile
      </Button>
    </>
  );
};
