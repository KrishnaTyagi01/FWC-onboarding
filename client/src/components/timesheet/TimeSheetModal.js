import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Dialog,
  IconButton,
  DialogTitle as MuiDialogTitle,
  Paper,
  Typography,
  makeStyles,
  withStyles,
  DialogContent as MuiDialogContent,
  Button,
  FormControl,
  Select,
  MenuItem,
  Box,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import classNames from 'classnames';
import OPWeekPicker from './OPWeekPicker';
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';
import TimeSheetTable from './WeekTable';
import TimesheetState from '../../context/timesheet/timesheetState'
const useStyles = makeStyles((theme) => ({
  roundButton: {
    borderRadius: '40px',
    marginTop: theme.spacing(1),
  },
  buttonMargin: {
    margin: theme.spacing(2, 0),
  },
  paperPadding: {
    padding: theme.spacing(2),
  },
  paperBackground: {
    backgroundColor: theme.palette.secondary.light,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  const cls = useStyles();
  return (
    <MuiDialogTitle disableTypography {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={cls.closeButton}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function TimeSheetDialog(props) {
  const classes = useStyles();
  const { onClose, open, userData } = props;
  const { name, empNo } = userData;
  const [actions, setActions] = useState('SELECT');

  const handleActionsChange = (event) => {
    setActions(event.target.value);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <TimesheetState>
    <Dialog
      onClose={handleClose}
      open={open}
      aria-labelledby='customized-dialog-title'
      fullWidth
      maxWidth='sm'>
      <DialogTitle id='customized-dialog-title' onClose={handleClose}>
        <b>
          Timesheet - {name ?? 'Qwerty'} ({empNo ?? '1234'})
        </b>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} direction='column'>
          <Grid item>
            <Paper className={classes.paperPadding} variant='outlined'>
              <OPWeekPicker />
            </Paper>
          </Grid>
          <Grid item>
            {/* <Grid item xs={6}>
                  <Button variant='contained' fullWidth color='primary'>
                    Edit
                  </Button>
                </Grid> */}
            {/* <Box mb={2}>
              <FormControl size='small' fullWidth variant='outlined'>
                <Select value={actions} onChange={handleActionsChange}>
                  <MenuItem value='SELECT'>Edit</MenuItem>
                  <MenuItem value='DELETE'>View</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
            <TimeSheetTable />
          </Grid>
          <Grid item>
            <Paper
              className={classNames(
                classes.paperPadding,
                classes.paperBackground
              )}
              variant='outlined'>
              <Typography variant='body2' color='initial' align='right'>
                <b>Total Hours </b>32
              </Typography>
            </Paper>
            <Box mt={1} p={1} style={{ float: 'right' }}>
              <Button variant='contained' color='primary'>
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
    </TimesheetState>
  );
}

TimeSheetDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
