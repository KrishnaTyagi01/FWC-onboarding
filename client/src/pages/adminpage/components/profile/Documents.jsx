import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';

import { Downloader } from './Doc';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 292,
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    borderRadius: 4,
  },
}));

const Documents = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Downloader
        head='Download Remibursement Documents'
        btntxt='download documents'
        docType='reimburse'
      />
      <Downloader
        head='Download Timesheet'
        btntxt='Download timesheet'
        docType='timeSheet'
      />
    </Container>
  );
};

export default Documents;
