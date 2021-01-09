import React from 'react';
import {OutlinedInput,FormControl,InputLabel,Typography,Container,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderTop: 'none',
    boxSizing: 'border-box',
    borderRadius: 4,
    padding: 16,
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
  const classes = useStyles();
  const { data, setData } = props;
  const userdata = data;

  const handleChange = (inputName) => (e) => {
    setData({ ...data, [inputName]: e.target.value });
  };

  return (
    <>
      <Container className={classes.root}>
        <Typography className={classes.header}>Work Information</Typography>

        <Typography className={classes.labelSpan}>FW Email</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            value={userdata?.FWEmail || ''}
            onChange={handleChange('FWEmail')}
            id='outlined-adornment-amount'
          />
        </FormControl>

        <Typography className={classes.labelSpan}>Reporting Manager</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            value={userdata?.Manager || ''}
            onChange={handleChange('Manager')}
            id='outlined-adornment-amount'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Customer Name</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            onChange={handleChange('custName')}
            id='outlined-adornment-amount'
            value={userdata?.custName || ''}
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Customer Location</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            onChange={handleChange('custLoc')}
            id='outlined-adornment-amount'
            value={userdata?.custLoc || ''}
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Designation</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            onChange={handleChange('designation')}
            id='outlined-adornment-amount'
            value={userdata?.designation || ''}
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Billing per Hour</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            onChange={handleChange('BillingPH')}
            id='outlined-adornment-amount'
            value={userdata?.BillingPH || ''}
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Annual CTC</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            onChange={handleChange('annualCTC')}
            id='outlined-adornment-amount'
            value={userdata?.annualCTC || ''}
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Increment</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            onChange={handleChange('increment')}
            id='outlined-adornment-amount'
            value={userdata?.increment || ''}
          />
        </FormControl>
        <Typography className={classes.labelSpan}>LWD</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            onChange={handleChange('lwd')}
            id='outlined-adornment-amount'
            value={userdata?.lwd || ''}
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Comment</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'></InputLabel>
          <OutlinedInput
            onChange={handleChange('comments')}
            id='outlined-adornment-amount'
            value={userdata?.comments || ''}
          />
        </FormControl>
      </Container>
    </>
  );
};

export default ContactInfo;
