import React, { useContext } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import WHITELOGO from '../../assets/img/logo-white.png';
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import TimeSheetBase from '../timesheet/TimeSheet';
import HomeContext from '../../context/home-page/homeContext';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      textAlign: 'center',
      fontWeight: 'bolder',
      color: '#fff',
      paddingLeft: 235,
    },
    hearderStyles: {
      borderBottom: '1.5px solid #fff',
      margin: theme.spacing(0.5),
      '&:hover': {
        // textDecoration: 'underline',
        borderBottom: '0.25px solid #fff',
      },
    },
  })
);

const FwcHeader = ({ pathname }) => {
  const classes = useStyles();
  const { userData } = useContext(HomeContext);

  const headerData = [
    { label: 'HOME', toPath: { pathname } },
    { label: 'RESET PASSWORD', toPath: '/reset-password' },
    { label: 'LOGOUT', toPath: '/login' },
  ];

  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Typography variant='h4' className={classes.title}>
          <img src={WHITELOGO} height='36px'></img>
        </Typography>
        <Box>
          <TimeSheetBase userData={userData} />
          {headerData.map((data) => (
            <Link to={data.toPath} key={data.label} style={{ color: '#fff' }}>
              <Button
                size='small'
                className={classes.hearderStyles}
                color='inherit'>
                {data.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FwcHeader;
