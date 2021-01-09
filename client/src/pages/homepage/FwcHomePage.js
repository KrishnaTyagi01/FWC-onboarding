import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import FwcHeader from '../../components/header/FwcHeader';
import FwcWelcomeCard from '../../components/card/FwcWelcomeCard';
import HomeState from '../../context/home-page/homeState';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundImage:
        'url(https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
    },
  })
);

const FwcHomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FwcHeader />
      <FwcWelcomeCard />
    </div>
  );
};

export default FwcHomePage;
