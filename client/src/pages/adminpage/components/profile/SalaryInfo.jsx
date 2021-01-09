import React, { useState } from 'react';
import SalaryTable from './SalaryTable';
import {Container,Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import AddIncrement from './AddIncrement';
const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    borderRadius: 4,
    padding: 16,
    borderTop: 'none',
  },
  tableContainer: {
    padding: 16,
  },
  upperWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 60,
    overflow: 'hidden',
  },
  head: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    // lineHeight: '160%',
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  button: {
    width: 179,
    height: 40,
    background: '#42668F',
    borderRadius: 24,

    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    // lineHeight: 24,
    ' &:focus': {
      outline: 'none'
   },
  },
}));

const SalaryInfo = (props) => {
  const { data, setData } = props;
  const userdata = data;
  const classes = useStyles();

  const [showAddCol, setShowAddCol] = useState(false);

  const handleAdd = () => {
    setShowAddCol(!showAddCol);
  };
  return (
    <>
      <Container className={classes.root}>
        <Container className={classes.upperWrapper}>
          <Typography className={classes.head}>Salary Information</Typography>

          <Button
            variant='contained'
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={handleAdd}>
            Add Increment
          </Button>
        </Container>
        <Container className={classes.tableContainer}>
          <SalaryTable data={data} setData={setData} />
          <div
            style={{ display: showAddCol ? 'block' : 'none' }}
            className={classes.AddIncrementDiv}>
            <AddIncrement data={data} setData={setData} />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default SalaryInfo;
