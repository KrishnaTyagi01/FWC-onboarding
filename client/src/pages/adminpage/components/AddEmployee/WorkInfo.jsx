import React from 'react';
import {OutlinedInput,FormControl,InputLabel,Typography,Container,TextField,Radio,FormControlLabel,FormLabel,RadioGroup } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

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
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },

  radio: {
    marginLeft: 3,
  },
}));

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);

const WorkInfo = (props) => {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const { values, setValues } = props;
  const handleChange = (inputName) => (e) => {
    setValues({ ...values, [inputName]: e.target.value });
  };

  return (
    <>
      <Container className={classes.root} >
        <Typography className={classes.header}>WORK INFORMATION</Typography>
        <Container className={classes.innerContainer}>
          <Typography className={classes.labelSpan}>FW Email</Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              onChange={handleChange('FWEmail')}
              variant='outlined'
              placeholder='FW Email'
              id='outlined-adornment-amount'
              type='email'
            />
          </FormControl>
          <Typography className={classes.labelSpan}>
            Reporting Manager
          </Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              onChange={handleChange('Manager')}
              variant='outlined'
              placeholder='Reporting Manager'
              id='outlined-adornment-amount'
            />
          </FormControl>
          <Typography className={classes.labelSpan}>Customer Name</Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              onChange={handleChange('custName')}
              variant='outlined'
              placeholder='Customer Name'
              id='outlined-adornment-amount'
            />
          </FormControl>
          <Typography className={classes.labelSpan}>
            Customer Location
          </Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              onChange={handleChange('custLocation')}
              variant='outlined'
              value={values?.custLocation}
              placeholder='Customer Location'
              id='outlined-adornment-amount'
            />
          </FormControl>
          <Typography className={classes.labelSpan}>Designation</Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              onChange={handleChange('designation')}
              variant='outlined'
              placeholder='Designation'
              id='outlined-adornment-amount'
              value={values?.designation}
            />
          </FormControl>
          <Typography className={classes.labelSpan}>
            Billing Per Hour
          </Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              value={values?.BillingPH}
              onChange={handleChange('BillingPH')}
              variant='outlined'
              placeholder='Billing Per Hour'
              id='outlined-adornment-amount'
            />
          </FormControl>
          <Typography className={classes.labelSpan}>Annual CTC</Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              onChange={handleChange('annualCTC')}
              variant='outlined'
              placeholder='Annual CTC'
              id='outlined-adornment-amount'
              value={values?.annualCTC}
            />
          </FormControl>
          <Typography className={classes.labelSpan}>Increment</Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              value={values?.increment}
              onChange={handleChange('increment')}
              variant='outlined'
              placeholder='Increment'
              id='outlined-adornment-amount'
            />
          </FormControl>
          <Typography className={classes.labelSpan}>LWD</Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              value={values?.lwd}
              onChange={handleChange('lwd')}
              variant='outlined'
              placeholder='LWD'
              id='outlined-adornment-amount'
            />
          </FormControl>
          <Typography className={classes.labelSpan}>Comment</Typography>
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <OutlinedInput
              onChange={handleChange('comment')}
              variant='outlined'
              placeholder='Comment'
              value={values.comment}
              id='outlined-adornment-amount'
            />
          </FormControl>

          <Typography className={classes.labelSpan}>User Type</Typography>
          <FormControlLabel
            className={classes.radio}
            control={
              <Radio
                checked={values.role === 'employee'}
                onClick={(e) => {
                  setValues({ ...values, role: 'employee' });
                }}
                value='employee'
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'A' }}
              />
            }
            label='Employee'
            // labelPlacement="top"
          />
          <FormControlLabel
            value='top'
            className={classes.radio}
            control={
              <Radio
                checked={values.role === 'sub-admin'}
                onClick={(e) => {
                  setValues({ ...values, role: 'sub-admin' });
                }}
                value='sub-admin'
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'B' }}
              />
            }
            label='Sub-Admin'
            // labelPlacement="top"
          />
        </Container>
      </Container>
    </>
  );
};

export default WorkInfo;
