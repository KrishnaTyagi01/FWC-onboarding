import React from 'react';
import {OutlinedInput,FormControl,InputLabel,Container,Typography,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    borderRadius: 4,
    padding: 16,
    borderTop: 'none',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  header: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '160%',
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 15,
    marginLeft: 11,
  },
  labelSpan: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '175%',
    letterSpacing: 0.15,
    marginLeft: 11,
  },
}));

const ContactInfo = (props) => {
  const { data, setData } = props;
  const userdata = data;
  const classes = useStyles();

  const handleChange = (inputName) => (e) => {
    setData({ ...data, [inputName]: e.target.value });
  };
  return (
    <>
      <Container className={classes.root}>
        <Typography className={classes.header}>Contact Information</Typography>

        <Typography className={classes.labelSpan}>Phone No.</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            onChange={handleChange('phoneNumber')}
            value={userdata?.phoneNumber}
            id='outlined-adornment-amount'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Address</Typography>

        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <TextField
            onChange={handleChange('Address')}
            value={userdata?.Address}
            id='outlined-multiline-static'
            // label="Address"
            multiline
            rows={4}
            variant='outlined'
          />
        </FormControl>

        <Typography className={classes.labelSpan}>Email Id</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            onChange={handleChange('email')}
            value={userdata?.email}
            id='outlined-adornment-amount'
          />
        </FormControl>
      </Container>
    </>
  );
};

export default ContactInfo;
