import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Theme } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import { green, blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 250,
  },
  rowBackground: {
    backgroundColor: theme.palette.secondary.light,
  },
  headUnderline: {
    borderBottom: `3px solid ${green[400]}`,
  },
}));

const WeekTable = () => {
  const classes = useStyles();
  return (
    <TableContainer variant='outlined' component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <Typography
                variant='inherit'
                color='initial'
                className={classes.headUnderline}>
                20 Sun
              </Typography>
            </TableCell>
            <TableCell align='center'>21 Mon</TableCell>
            <TableCell align='center'>22 Tue</TableCell>
            <TableCell align='center'>23 Wed</TableCell>
            <TableCell align='center'>
              <Typography
                variant='inherit'
                color='initial'
                className={classes.headUnderline}>
                24 Thru
              </Typography>
            </TableCell>
            <TableCell align='center'>25 Fri</TableCell>
            <TableCell align='center'>26 Sat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.rowBackground} align='center'>
              <TextField  id="standard-size-small"
                size="small" />
            </TableCell>
            <TableCell className={classes.rowBackground} align='center'>
               <TextField  id="standard-size-small"
                size="small" />
            </TableCell>
            <TableCell className={classes.rowBackground} align='center'>
            <TextField  id="standard-size-small"
               size="small" />
            </TableCell>
            <TableCell className={classes.rowBackground} align='center'>
              <TextField  id="standard-size-small"
               size="small" />
            </TableCell>
            <TableCell className={classes.rowBackground} align='center'>
              <TextField  id="standard-size-small"
                size="small" />
            </TableCell>
            <TableCell className={classes.rowBackground} align='center'>
              <TextField  id="standard-size-small"
                size="small" />
            </TableCell>
            <TableCell className={classes.rowBackground} align='center'>
              <TextField  id="standard-size-small"
                size="small" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeekTable;
