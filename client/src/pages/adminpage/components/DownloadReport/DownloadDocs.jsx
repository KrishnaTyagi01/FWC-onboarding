import React from 'react';
import Doc, { Downloader } from '../profile/Doc';

const DownloadDocs = () => {
  return (
    <>
      <Downloader
        head='Download All Reimbursement Documents'
        btntxt='Download Documents'
      />
      <Downloader
        head='Download All Timesheet Documents'
        btntxt='Download Timesheet'
      />
    </>
  );
};

export default DownloadDocs;
