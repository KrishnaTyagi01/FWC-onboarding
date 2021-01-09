import React, { useContext } from 'react';
import { Container, Button, Typography, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import EditJobForm from './EditJobForm';
import { ListingContext } from '../../context/ListingContext';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: '15px 0',
    width: 854,
    backgroundColor: 'white',
    boxShadow:
      ' 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
    borderRadius: 4,
  },
  upperContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width:'80vw'
    // paddingTop: 16,
    // width: 0,
    margin:0,
    padding:0
  },
  head: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '160%',

    letterSpacing: 0.15,

    color: ' rgba(0, 0, 0, 0.87)',
  },
  crossbtn: {},
  midContainer: {
    // backgroundColor:"red",
    padding: 0,
    margin:0,
    paddingTop: 32,
  },
  lowerContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: 32,
  },
  savebtn: {
    width: 139,
    height: 40,
    marginRight: 30,
    background: '#42668F',
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    marginBottom: 20,

    // lineHeight: 24,
  },
  deletebtn: {
    marginBottom: 20,
  },
}));

const EditJob = (props) => {
  const classes = useStyles();
  let data = useContext(ListingContext);
  const handleClear = () => {
    props.setDisplayEditForm(false);
  };

  const formType = 'editJob';

  return (
    <Container
      className={classes.root}
      onClick={(event) => {
        event.stopPropagation();
      }}>
      <Container className={classes.upperContainer}>
        <Typography className={classes.head}>Edit Job</Typography>
        <IconButton
          onClick={handleClear}
          className={classes.crossbtn}
          aria-label='clear'>
          <ClearIcon />
        </IconButton>
      </Container>

      <Container className={classes.midContainer}>
        <EditJobForm
          setShowForm={props.setDisplayEditForm}
          setJob={data.setSelectedJob}
          job={data.selectedJob}
          formType={formType}
        />
      </Container>

      <Container className={classes.lowerContainer}>
        {/* <Button variant='contained' className={classes.savebtn}>
          SAVE CHANGES
        </Button>
        <Button color='secondary' className={classes.deletebtn}>
          DELETE JOB
        </Button> */}
      </Container>
    </Container>
  );
};

export default EditJob;
