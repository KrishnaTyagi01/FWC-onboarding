import React, { Fragment, useContext } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import {
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Avatar,
  Divider,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import FwcTabs from '../tabs/FwcTabs';
import HomeContext from '../../context/home-page/homeContext';

const useStyles = makeStyles((theme) =>
  createStyles({
    welcomeMessage: {
      fontSize: 25,
      fontWeight: 400,
    },

    onboardingMessage: {
      fontSize: 14,
      fontWeight: 'bolder',
    },
    submissionMessage: {
      fontSize: 15,
      // fontWeight: 'bolder',
    },
    paySlipMessage: {
      fontSize: 13,
      fontWeight: 'bolder',
    },

    paper: {
      padding: theme.spacing(3),
      // textAlign: 'center',
      height: '100%',
      color: theme.palette.text.secondary,
      borderRadius: 0,
      // marginTop: 100,
    },

    large: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    buttonStyle: {
      padding: theme.spacing(0, 8, 0, 8),
    },
  })
);

const FwcWelcomeCard = () => {
  const classes = useStyles();
  const { userData } = useContext(HomeContext);

  const playSlipData = [
    {
      message: 'Pay Slips, Time Sheets and Reimbursements',
      class: false,
      mb: 1,
    },
    {
      message:
        'Click view to download Pay Slips, Time Sheets and Upload Reimbursement.',
      class: true,
      mb: 3,
    },
  ];

  return (
    <Box component='div' mt={12} ml={8} mr={8}>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='center'
        alignItems='center'>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <Grid container wrap='nowrap' spacing={2}>
              <Grid item xs={3} className='ml-5'>
                <Avatar className={classes.large} src={userData.photo}>
                  <b>{userData.name.toString().split('')[0]}</b>
                </Avatar>
              </Grid>
              <Grid item xs={9}>
                <Typography variant='h4' className={classes.welcomeMessage}>
                  Hi <b>{userData.name}</b>
                </Typography>
                <Typography variant='h4' className={classes.welcomeMessage}>
                  Welcome to Future World!
                </Typography>
                {(() => {
                  if (userData.isFormComplete) {
                    return (
                      <Box mt={1}>
                        <div>
                          {Object.entries({
                            Department: userData?.department ?? 'N/A',
                            Designation: userData?.designation ?? 'N/A',
                            'Joining Date': userData?.joiningDate ?? 'N/A',
                            FWID: userData?.empNo ?? 'N/A',
                          }).map(([key, value], index) => (
                            <Box component='div'>
                              <Grid item sm={12}>
                                <Typography
                                  variant='h5'
                                  color='primary'
                                  className={classes.submissionMessage}>
                                  <b>{key}</b>: {value}
                                </Typography>
                              </Grid>
                            </Box>
                          ))}
                        </div>
                      </Box>
                    );
                  } else {
                    return (
                      <Fragment>
                        <Box mt={2}>
                          <Grid
                            container
                            direction='row'
                            justify='flex-start'
                            alignItems='flex-start'>
                            <Grid item sm={1}>
                              <InfoIcon fontSize='small' color='primary' />
                            </Grid>
                            <Grid item sm={7}>
                              <Typography
                                variant='h5'
                                color='primary'
                                className={classes.onboardingMessage}>
                                Fill in your on-boarding application form and
                                submit it using the submit application button.
                              </Typography>
                            </Grid>
                            <Grid item sm={4}></Grid>
                          </Grid>
                        </Box>
                      </Fragment>
                    );
                  }
                })()}
              </Grid>
            </Grid>
            <Box mt={2} mb={2}>
              <Divider />
            </Box>

            <Box p={1}>
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'>
                {playSlipData.map((data) => (
                  <Box component='div' key={data.message} mb={data.mb}>
                    <Grid item>
                      <Typography
                        variant='h5'
                        className={data.class ? classes.paySlipMessage : ''}>
                        {data.message}
                      </Typography>
                    </Grid>
                  </Box>
                ))}

                <Grid item>
                  <Link to='/payslip' style={{ color: '#fff' }}>
                    <Button
                      color='primary'
                      variant='contained'
                      className={classes.buttonStyle}>
                      VIEW
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <FwcTabs />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FwcWelcomeCard;
