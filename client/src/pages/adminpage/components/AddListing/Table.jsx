import React, { useState, useEffect, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { EmployeeContext } from '../context/employeeList';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Container,
  Button,
  TableFooter,
  TablePagination,
  IconButton,
} from '@material-ui/core';
import _ from 'underscore';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import LastPageIcon from '@material-ui/icons/LastPage';

import EditJob from './EditJob';
import AddJob from './AddJob';
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

const useStyles = makeStyles((theme) => ({
  rootContainer: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // height: 25
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 700,
  },

  formContainer: {
    margin: '80 auto ',
  },
  formBg: {
    zIndex: 200000000,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// const

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'>
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'>
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'>
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'>
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

function createData(one, two, three, four, five) {
  return { one, two, three, four, five };
}

const rows = [];

export default function EmployeeTable(props) {
  const classes = useStyles();
  // const data = useContext(EmployeeContext);
  // const [employeeData, setEmployeeData] = useState([]);
  const [reload, setReload] = useState({ sum: 1 });
  const { showAddForm, setShowAddForm } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  let c = [];
  const { filtered } = props; //changed
  console.log(filtered);
  const data = props.data;
  // console.log(data)
  useEffect(() => {
    (async () => {
      c = await data.getAllJobs();
    })();
  }, []);
  useEffect(() => {
    (async () => {
      console.log(data.jobs);
    })();
  }, [data.jobs, c]);

  // console.log(data)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // setRowsPerPage(parseInt(event.target.value, 10));
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [displayEditForm, setDisplayEditForm] = useState(false);

  const handleViewListing = async (_, id) => {
    console.log(await data.getAJob(id));
    setDisplayEditForm(!displayEditForm);
    setShowAddForm(false);
  };

  return (
    <>
      <Container className={classes.rootContainer}>
        <TableContainer component={Paper} className='table-employees'>
          <Table
            className={classes.table}
            stickyHeader
            aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align='center'>Job Title</StyledTableCell>
                <StyledTableCell align='center'>Job Type</StyledTableCell>
                <StyledTableCell align='center'>Shift Type</StyledTableCell>
                <StyledTableCell align='center'>Job Location</StyledTableCell>
                <StyledTableCell align='center'>Salary</StyledTableCell>
                <StyledTableCell align='center'>
                  {' '}
                  Application Deadline
                </StyledTableCell>
                <StyledTableCell align='center'>View</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered(data.jobs) //changed previous: data?.
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row, i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell component='th' scope='row'>
                      {i + 1}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.title}
                    </StyledTableCell>

                    <StyledTableCell align='center'>{row.type}</StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.shiftType}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.location}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.salary}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.deadline}
                    </StyledTableCell>

                    <StyledTableCell align='center'>
                      <FormControl
                        variant='outlined'
                        className={classes.formControl}>
                        <Button
                          onClick={(e) => handleViewListing(e, row.id)}
                          color='secondary'>
                          View Listing
                        </Button>
                      </FormControl>
                    </StyledTableCell>
                    {/* <StyledTableCell align='center'>
                    
                  </StyledTableCell> */}
                  </StyledTableRow>
                ))}
            </TableBody>

            <TableFooter>
              <TableRow></TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <TablePagination
          style={{ backgroundColor: '#FFF', borderTop: '1px solid #E0E0E0' }}
          // width="1000px"
          component='div'
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          count={data?.jobs?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Container>
      <div
        className={classes.formBg}
        onClick={() => {
          setShowAddForm(false);
          setDisplayEditForm(false);
        }}
        style={{ display: displayEditForm || showAddForm ? 'block' : 'none' }}>
        <div
          className={classes.formContainer}
          style={{ display: displayEditForm ? 'block' : 'none' }}>
          <EditJob setDisplayEditForm={setDisplayEditForm} />
          {/* <AddJob setDisplayForm={setDisplayForm}/> */}
        </div>
        <div
          className={classes.formContainer}
          style={{ display: showAddForm ? 'block' : 'none' }}>
          <AddJob setShowAddForm={setShowAddForm} />
        </div>{' '}
      </div>
    </>
  );
}
