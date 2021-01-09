import React from 'react';
import {OutlinedInput, FormControl, InputLabel, Typography, Container, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    padding: 40,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {},
  header: {
    fontWeight: 500,
    fontSize: 18,
    // width: '100%',
    // lineHeight: 24,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    color: '#0D3C61',
    textAlign: 'center',
    marginBottom: 12,
  },
  labelSpan: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '175%',
    letterSpacing: 0.15,
    marginLeft: 11,
  },
  innerContainer: {
    borderTop: '2px solid #0D3C61',
    padding: 20,
  },
}));

const BasicInfo = (props) => {
  const classes = useStyles();

  const { values, setValues } = props;
  const handleChange = (inputName) => (e) => {
    setValues({ ...values, [inputName]: e.target.value });
  };
  return (
    <>
      <Container className={classes.root} >
        <Typography className={classes.header}>CONTACT INFORMATION</Typography>
        <Container className={classes.innerContainer}>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <Typography className={classes.labelSpan}>Address</Typography>
            <TextField
              onChange={handleChange('Address')}
              id='outlined-multiline-static'
              // label='Address'
              placeholder="Address"
              multiline
              rows={4}
              value={values?.Address}
              variant='outlined'
              required
            />
          </FormControl>

          <Typography className={classes.labelSpan}>Email Id</Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              onChange={handleChange('email')}
              variant='outlined'
              value={values?.email}
              type='email'
              placeholder='Email Id'
              id='outlined-adornment-amount'
              required
            />
          </FormControl>
        </Container>
      </Container>
    </>
  );
};

export default BasicInfo;
