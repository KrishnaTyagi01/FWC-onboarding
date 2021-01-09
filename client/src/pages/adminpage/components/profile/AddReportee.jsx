import React, { useState, useEffect } from 'react';
import {
  Typography,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 292,
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    borderRadius: 4,
  },
  head: {
    marginTop: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: '133.4%',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  subhead: {
    marginTop: 24,
    color: 'rgba(0, 0, 0, 0.87)',
    letterSpacing: 0.15,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '160%',
  },
  formControl: {
    marginTop: 30,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    // marginTop:20,
    maxWidth: 522,
  },
  formContainer: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {
    backgroundColor: '#2196F3',
    overflow: 'hidden',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: 4,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    width: 103,
    height: 36,
    marginTop: 35,
    marginBottom: 16,
  },
}));

const AddReportee = ({ subAdmins, addReportee, employeeId }) => {
  const classes = useStyles();
  const [storedData, setStoredData] = useState({
    subAdmin: '',
    employee: '',
  });

  const [buttonState, setButtonState] = useState(false);
  useEffect(() => {
    console.log(storedData);
    console.log(buttonState);
  }, [storedData, buttonState]);

  const selectMap = subAdmins?.map((data, key) => (
    <MenuItem
      key={key}
      value={data._id}
      onClick={(e) => {
        setStoredData({
          subAdmin: data._id,
          employee: employeeId,
        });
      }}>
      {data.name}
    </MenuItem>
  ));

  return (
    <Container className={classes.root}>
      <Typography className={classes.head}>Assign To Sub Admin</Typography>
      <Typography className={classes.subhead}>Select a Sub Admin</Typography>

      <Container className={classes.formContainer}>
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel id='demo-simple-select-outlined-label'>
            Select Sub Admin
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            className={classes.select}
            label='Select Sub Admin'>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {selectMap}
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              name='checkedC'
              value={buttonState}
              onChange={(e) => {
                setButtonState(e.target.checked);
              }}
            />
          }
          label='Are you sure you want to add the reportee'
        />
      </Container>
      <Button
        variant='contained'
        disabled={buttonState ? undefined : 'disabled'}
        className={classes.btn}
        onClick={async (e) => {
          await addReportee(storedData.subAdmin, storedData.employee);
        }}>
        CONTINUE
      </Button>
    </Container>
  );
};

export default AddReportee;
