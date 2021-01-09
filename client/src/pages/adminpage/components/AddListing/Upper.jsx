import React, { useState } from 'react';
import {
  Container,
  Button,
  Paper,
  IconButton,
  InputBase,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Table from './Table';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '94vw',
    marginTop: 50,
    marginBottom: 19,
    justifyContent: 'space-between',
  },
  searchbar: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 288,
    // paddingLeft:'-2rem'
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
    width: 150,
    height: 40,
    background: '#42668F',
    borderRadius: 24,

    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,

    '&:focus': {
      outline: 'none',
    },
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  searchContainer: {
    display: 'flex',
  },
}));

const Upper = ({ data }) => {
  const classes = useStyles();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAdd = () => {
    setShowAddForm(!showAddForm);
  };

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
        if (filter == 1) {
          return row.title.toLowerCase().indexOf(search) > -1;
        } else if (filter == 2) {
          return row.type.toLowerCase().indexOf(search) > -1;
        } else if (filter == 3) {
          return row.shiftType.toLowerCase().indexOf(search) > -1;
        } else if (filter == 4) {
          return row.location.toLowerCase().indexOf(search) > -1;
        }

        return row.type.toLowerCase().indexOf(search) > -1;
      }
    );
  };

  return (
    <>
      <Container
        className={classes.root}
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <div className={classes.searchContainer}>
          <FormControl
            variant='outlined'
            className={classes.formControl}
            onSubmit={(e) => {
              e.preventDefault();
            }}>
            <InputLabel id='demo-simple-select-outlined-label'>
              Filter
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              value={1}
              style={{ backgroundColor: '#fff' }}
              onChange={handleSearchSelect}
              label='Filter'>
              <MenuItem value={1}> Job Title</MenuItem>
              <MenuItem value={2}>Job Type</MenuItem>
              <MenuItem value={3}>Shift Type</MenuItem>
              <MenuItem value={4}>Job Location</MenuItem>
            </Select>
          </FormControl>
          <Paper
            onSubmit={(e) => {
              e.preventDefault();
            }}
            style={{ marginLeft: '2rem' }}
            component='form'
            className={classes.searchbar}>
            <InputBase
              onKeyPress={(e) => console.log(e.target.keyCode)}
              onSubmit={(e) => {
                e.preventDefault();
              }}
              onChange={handleSearch}
              className={classes.input}
              placeholder='Search '
              inputProps={{ 'aria-label': 'search ' }}
            />
            <IconButton
              disabled
              className={classes.iconButton}
              aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>

        <Button
          variant='contained'
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleAdd}>
          Add Listing
        </Button>
      </Container>
      <Table
        filtered={filtered} //changed
        data={data}
        showAddForm={showAddForm}
        setShowAddForm={setShowAddForm}
      />
    </>
  );
};

export default Upper;
