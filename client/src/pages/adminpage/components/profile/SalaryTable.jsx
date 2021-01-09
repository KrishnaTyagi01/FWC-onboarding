import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  deleteIcon: {
    color: 'rgba(0, 0, 0, 0.54)',
    height: 18,
    widht: 14,
    // marginTop: 10
    marginBottom: -3,
  },
  deleteBtn: {
    color: 'rgba(0, 0, 0, 0.87)',
    // marginBottom:
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: 'rgba(33, 150, 243, 0.08)',
    },
    height: 74,
  },
}))(TableRow);

export default function SalaryTable(props) {
  const classes = useStyles();
  const { data, setData } = props;
  const userdata = data;

  const clickDelete = (index) => {
    //  DELETION LOGIC
    let tempArr = data.increments;
    tempArr.splice(index, 1);
    setData({ ...data, increments: tempArr });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell  align='left'>Year</TableCell>
            <TableCell  align='left' style={{paddingLeft:"5rem"}}>CTC</TableCell>
            <TableCell  align='center' style={{paddingLeft:"2rem"}}>Increment&nbsp;</TableCell>
            <TableCell align='left' style={{paddingLeft:"5rem"}}>CTC after Increment&nbsp;</TableCell>
            <TableCell align='left'>Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userdata?.increments?.map((data, i) => (
            <StyledTableRow key={i}>
              <TableCell align='left' component='th' scope='row'>
                <b>{data.year}</b>
              </TableCell>
              <TableCell align='left' style={{paddingLeft:"5rem"}}>
                <b>{data.CTC}</b>
              </TableCell>
              <TableCell align='center' style={{paddingLeft:"2rem"}}>{data.increment}</TableCell>
              <TableCell align='left' style={{paddingLeft:"5rem"}}>{data.postIncrementCTC}</TableCell>
              <TableCell align='left'>
                <DeleteIcon className={classes.deleteIcon} />
                <Button
                  className={classes.deleteBtn}
                  onClick={(e) => clickDelete(i)}>
                  Delete
                </Button>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
