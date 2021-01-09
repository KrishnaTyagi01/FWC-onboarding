import React from 'react';
import Button from '@material-ui/core/Button';
import TimeSheetDialog from './TimeSheetModal';
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import TimesheetState from '../../context/timesheet/timesheetState'
const useStyles = makeStyles((theme) =>
  createStyles({
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

export default function TimeSheetModal({ userData }) {
  const classes = useStyles();
  // console.log(userData);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    // setSelectedValue(value);
  };

  return (
    <>
    {/* <TimesheetState> */}
        <Button
          size='small'
          color='inherit'
          className={classes.hearderStyles}
          onClick={handleClickOpen}>
          TIMESHEET
        </Button>
        <TimeSheetDialog
          // selectedValue={selectedValue}
          userData={userData}
          open={open}
          onClose={handleClose}
        />
      {/* </TimesheetState> */}
    </>
  );
}
