import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Backdrop } from '@material-ui/core';
import React, { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const OPLoader = ({ isLoading }) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

export default OPLoader;
