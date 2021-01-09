import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '15ch',
    },

    border: '1px solid rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'flex-end',
    padding: ' 0 1rem',
  },
  button: {
    width: 100,
    height: 30,
    background: '#42668F',
    // borderRadius: 24,
    marginLeft: '6rem',
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 24,
    overflow: 'hidden',
  },
}));

export default function AddIncrement({ data, setData }) {
  const classes = useStyles();
  const [increments, setIncrements] = useState({
    year: '',
    increment: '',
    postIncrementCTC: '',
    CTC: '',
  });

  useEffect(() => {}, []);
  console.log(data);

  const addIncrementHandler = (e) => {
    e.preventDefault();
    let tempArr = data.increments;
    tempArr.push(increments);
    setData({ ...data, increments: tempArr });
    setIncrements({ year: '', increment: '', postIncrementCTC: '', CTC: '' });
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={addIncrementHandler}>
      <TextField
        id='standard-basic'
        label='Year'
        value={increments.year}
        onChange={(e) => setIncrements({ ...increments, year: e.target.value })}
      />
      <TextField
        id='standard-basic'
        label='CTC'
        value={increments.CTC}
        onChange={(e) => setIncrements({ ...increments, CTC: e.target.value })}
      />
      <TextField
        id='standard-basic'
        label='Increment'
        value={increments.increment}
        onChange={(e) =>
          setIncrements({ ...increments, increment: e.target.value })
        }
      />
      <TextField
        style={{ width: '20ch' }}
        id='standard-basic'
        label='CTC after Increment'
        onChange={(e) =>
          setIncrements({ ...increments, postIncrementCTC: e.target.value })
        }
        value={increments.postIncrementCTC}
      />

      <Button variant='contained' type='submit' className={classes.button}>
        Add
      </Button>
    </form>
  );
}
