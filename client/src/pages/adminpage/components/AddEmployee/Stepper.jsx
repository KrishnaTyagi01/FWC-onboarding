import React, { useState, useContext, useEffect } from 'react';
import { EmployeeContext } from '../../context/employeeList';
import { makeStyles } from '@material-ui/core/styles';
import {Stepper, Step, StepLabel, Button, Typography, Container} from '@material-ui/core';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import WorkInfo from './WorkInfo';

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // backgroundColor: '#E5E5E5',
    // minHeight:'100vh'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  lowerContainer: {
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    marginTop: 30,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    height: 99,
    display: 'flex',
    alignItems: 'center',
  },
}));

function getSteps() {
  return ['Basic Information', 'Contact Information', 'Work Information'];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const contextFunction = useContext(EmployeeContext);
  const [values, setValues] = useState({
    FName: '',
    LName: '',
    name: '',
    Address: '',
    email: '',
    FWEmail: '',
    Manager: '',
    custLocation: '',
    custName: '',
    designation: '',
    phoneNumber: '',
    BillingPH: '',
    annualCTC: '',
    increment: '',
    lwd: '',
    comment: '',
    empNo: 'FW--',
    role: 'employee',
    isFormComplete: false,
    joiningDate: '',
  });
  useEffect(() => {
    let fLetter = values.FName[0]?.toUpperCase();
    let lLetter = values.LName[0]?.toUpperCase();
    let FWiD = `FW-${fLetter}${lLetter}${Math.round(Math.random() + Date.now())
      .toString()
      .slice(-5)}`;

    setValues({
      ...values,
      name: values.FName + ' ' + values.LName,
      empNo: FWiD,
      joiningDate: moment(),
    });
  }, [values.FName, values.LName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // CALL API AND SEND VALUES TO BACKEND AND THEN PROCEED TO NEXT PAGE
    if (activeStep === 2) {
      //  Call Api

      let data = {
        email: values.email,
        name: values.name,
        role: values.role,
        phoneNumber: values.phoneNumber,
        empNo: values.empNo,
        extraFields: {
          email: values.email,
          FName: values.FName,
          LName: values.LName,
          designation: values.designation,
          phoneNumber: values.phoneNumber,
          Address: values.Address,
          FWEmail: values.FWEmail,
          Manager: values.Manager,
          custLoc: values.custLocation,
          custName: values.custName,
          BillingPH: values.BillingPH,
          annualCTC: values.annualCTC,
          increment: values.increment,
          lwd: values.increment,
          empNo: values.empNo,
          comments: values.comment,
          joiningDate: values.joiningDate,
          isFormComplete: false,
        },
      };

      contextFunction.addEmployee(data);
      console.log(data);
    } else {
      handleNext();
    }
  };

  return (
    <div className={classes.root} >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div >
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div >
            <form  onSubmit={handleSubmit}>
              {activeStep == 0 ? (
                <BasicInfo values={values} setValues={setValues} />
              ) : activeStep == 1 ? (
                <ContactInfo values={values} setValues={setValues} />
              ) : (
                <WorkInfo values={values} setValues={setValues} />
              )}

              <Container
                className={classes.lowerContainer}
                style={{ backgroundColor: '#FFF' }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}>
                  Back
                </Button>
                <Button variant='contained' color='primary' type='submit'>
                  {activeStep === steps.length - 1 ? 'ADD EMPLOYEE' : 'Next'}
                </Button>
              </Container>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
