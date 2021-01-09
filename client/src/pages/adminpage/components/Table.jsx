import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { EmployeeContext } from '../context/employeeList';
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
  TableFooter,
  TablePagination,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Container, Button, InputBase } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';
import _ from 'underscore';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import LastPageIcon from '@material-ui/icons/LastPage';
import TimeSheet from '../../../components/timesheet/TimeSheetModal';
// import MUIDataTable from "mui-datatables";
import Upper from './AddListing/Upper';
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,

    marginLeft: theme.spacing(2.5),
  },
}));

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 700,
  },
  dot: {
    width: 12,
    height: 12,
    marginRight: '16px',
  },
  redDot: {
    width: 12,
    height: 12,
    color: '#F44336',
    marginRight: '16px',
  },
  blueDot: {
    width: 12,
    height: 12,
    color: '#0D3C61',
    marginRight: '16px',
  },
  greenDot: {
    width: 12,
    height: 12,
    color: '#4CAF50',
    marginRight: '16px',
  },
}));

const useStylesUpper = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 1479,
    marginTop: 30,
    marginBottom: 19,
    marginLeft: '0',
    padding: '0',
    // justifyContent: 'space-between',
  },
  searchbar: {
    // marginTop: 50,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  button: {
    width: 124,
    height: 40,
    background: '#42668F',
    borderRadius: 24,

    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
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

// eslint-disable-next-line
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

export default function EmployeeTable(props) {
  const classes = useStyles();
  const classesUpper = useStylesUpper();

  const userData = {
    name: 'wwe',
    empNo: '321',
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    // setSelectedValue(value);
  };

  const data = useContext(EmployeeContext);

  let employeeData = data.employeeList;

  const [reload, setReload] = useState({ sum: 1 });
  let history = useHistory();

  useMemo(() => {
    (async () => {
      await data.getEmployeeList();
    })();
  }, [reload]);

  console.log(employeeData);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    // setPage(0)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onSelectChangeHandler = async (e, id) => {
    setId(id);
    // setToProfile(true);
    console.log(id);
    history.push(`/profilepage/${id}`);
  };

  const [toProfile, setToProfile] = useState(false);
  const [id, setId] = useState('');

  const handleOpen = (id) => {
    setId(id);
    setToProfile(true);
  };
  useEffect(() => {
    console.log('page', page);
    console.log('rows per page', rowsPerPage);
  }, [page, rowsPerPage]);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  const [filter, setFilter] = useState(0);

  const handleSearchSelect = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  const filtered = (employeeDataR) => {
    return employeeDataR.filter((row) =>
      //  filter==1 ? row.empNo : filter==2 ? row.name : filter== 3 ? row.email : filter==4 ?
      //   row.phoneNumber : row.name
      {
        if (filter === 1) {
          return row.empNo.toLowerCase().indexOf(search.toLowerCase()) > -1;
        } else if (filter === 2) {
          return row.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        } else if (filter === 3) {
          return row.email.toLowerCase().indexOf(search.toLowerCase()) > -1;
        } else if (filter === 4) {
          return (
            row.phoneNumber.toLowerCase().indexOf(search.toLowerCase()) > -1
          );
        } else if (filter === 5) {
          return row.status.toLowerCase().indexOf(search.toLowerCase()) > -1;
        }

        return row.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      }
    );
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Container className={classesUpper.root}>
        {/* <span style={{display:"flex", backgroundColor:"red" }}> */}
        <FormControl
          variant='outlined'
          className={classes.formControl}
          style={{ marginRight: '2rem' }}>
          <InputLabel id='demo-simple-select-outlined-label'>Filter</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={2}
            style={{ backgroundColor: '#fff' }}
            onChange={handleSearchSelect}
            label='Filter'>
            <MenuItem value={1}> FW-ID</MenuItem>
            <MenuItem value={2}>Name</MenuItem>
            <MenuItem value={3}>Email</MenuItem>
            <MenuItem value={4}>Phone no.</MenuItem>
            <MenuItem value={5}>Status</MenuItem>
            <MenuItem value={6}>Timesheet</MenuItem>
          </Select>
        </FormControl>

        <Paper
          component='form'
          className={classesUpper.searchbar}
          onSubmit={(e) => e.preventDefault()}>
          <InputBase
            onSubmit={(e) => e.preventDefault()}
            onChange={handleSearch}
            className={classesUpper.input}
            placeholder='Search '
            inputProps={{ 'aria-label': 'search ' }}
          />
          <IconButton
            disabled
            className={classesUpper.iconButton}
            aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>
      {/* </span> */}

      <TableContainer
        component={Paper}
        style={{ marginTop: '20px' }}
        className='Table-2'>
        <Table className={classes.table} stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align='center'>FW-ID</StyledTableCell>
              <StyledTableCell align='center'>Name</StyledTableCell>
              <StyledTableCell align='center'>Email</StyledTableCell>
              <StyledTableCell align='center'>Phone no.&nbsp;</StyledTableCell>
              <StyledTableCell align='center'>
                Date Of Joining&nbsp;
              </StyledTableCell>
              <StyledTableCell align='center'> Action &nbsp;</StyledTableCell>
              <StyledTableCell align='center'>Status&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered(employeeData) //change - removed employeeData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row, i) => (
                <StyledTableRow key={i} hover={true}>
                  <StyledTableCell component='th' scope='row'>
                    {i + 1}
                  </StyledTableCell>
                  <StyledTableCell align='center'>{row.empNo}</StyledTableCell>
                  <StyledTableCell align='center'>{row.name}</StyledTableCell>
                  <StyledTableCell align='center'>{row.email}</StyledTableCell>
                  <StyledTableCell align='center'>
                    {row.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {row.joinDate}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <FormControl
                      variant='outlined'
                      className={classes.formControl}>
                      <InputLabel id='demo-simple-select-outlined-label'>
                        Select
                      </InputLabel>
                      <Select
                        disabled={row.role === 'admin' ? true : false}
                        labelId='demo-simple-select-outlined-label'
                        id='demo-simple-select-outlined'
                        label='Age'>
                        <MenuItem value=''>
                          <em>Select</em>
                        </MenuItem>
                        <MenuItem
                          value={1}
                          onClick={(e) => onSelectChangeHandler(e, row.id)}>
                          Open
                        </MenuItem>
                        <MenuItem
                          value={2}
                          onClick={(e) => {
                            data.changeEmployeeStatus(row.id, 1);
                            setReload({ ...(reload.sum + 1) });
                          }}>
                          Active
                        </MenuItem>
                        <MenuItem
                          value={3}
                          onClick={(e) => {
                            data.changeEmployeeStatus(row.id, 2);
                            setReload({ ...(reload.sum + 1) });
                          }}>
                          Disabled
                        </MenuItem>
                        <MenuItem
                          value={4}
                          onClick={(e) => {
                            data.changeEmployeeStatus(row.id, 0);
                            setReload({ ...(reload.sum + 1) });
                          }}>
                          Relieved
                        </MenuItem>
                        <MenuItem
                          value={5}
                          // onClick={(e) => {
                          //   data.changeEmployeeStatus(row.id, 0);
                          //   setReload({ ...(reload.sum + 1) });
                          // }}
                        >
                          Delete
                        </MenuItem>
                        <MenuItem value={6} onClick={handleClickOpen}>
                          Timesheet
                        </MenuItem>
                        {/* <MenuItem value={30}>Releived</MenuItem> */}
                      </Select>
                    </FormControl>
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    <Brightness1RoundedIcon
                      alignItems='left'
                      className={
                        _.first(row.status.split(' ')) === 'Disabled'
                          ? classes.redDot
                          : _.first(row.status.split(' ')) === 'Active'
                          ? classes.greenDot
                          : _.first(row.status.split(' ')) === 'Relieved'
                          ? classes.blueDot
                          : classes.dot
                      }
                    />
                    {row.status}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>

          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <TablePagination
        style={{ backgroundColor: '#FFF' }}
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        component='div'
        count={employeeData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <TimeSheet
        userData={userData}
        userData={userData}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

//===================================NEW TABLE =====================================================//

// export default function MUIDataTable(props){

//   const columns = ["Name", "Company", "City", "State"];

//     const data = [
//     ["Joe James", "Test Corp", "Yonkers", "NY"],
//     ["John Walsh", "Test Corp", "Hartford", "CT"],
//     ["Bob Herm", "Test Corp", "Tampa", "FL"],
//     ["James Houston", "Test Corp", "Dallas", "TX"],
//     ];

//     const options = {
//       filterType: 'checkbox',
//     };

//     return (
//   <>
//        <MUIDataTable
//         title={"Employee List"}
//         data={data}
//         columns={columns}
//         options={options}
//        />

//       </>
//     )

// }

// export default MuiTable;
