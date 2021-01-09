import React, { Fragment, useEffect, useContext, useState } from 'react';
import { LoadingContext } from '../context/loaderContext';
import DownlaodDocs from '../components/DownloadReport/DownloadDocs';
import { Container, Button, Typography, Divider } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { DatePicker, Select } from 'antd';
import { downloadAndZip } from '../../../util/DownloadUtil';
import { config } from '../../../util/RequestUtil';
import { toast } from '../../../util/ToastUtil';
import { Form } from 'react-bootstrap';
import axios from 'axios';
const { Option } = Select;
const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    borderRadius: 4,
    padding: '20px',
  },
  container: {
    display: 'flex',
    marginTop: 45,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  labelSpan: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '160%',
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
    margin: 'auto 0',
    marginRight: 30,
  },
  form: {
    width: 374,
  },
  Btn: {
    minWidth: 148,
    height: 36,
    background: '#0D3C61',
    boxShadow:
      ' 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: 4,
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginTop: 30,
    display: 'block',
  },

  head: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: '133.4%',
    color: 'rgba(0, 0, 0, 0.87)',
    marginTop: 30,
  },

  monthSelect: {
    marginTop: '2rem',
    fontSize: 20,
    fontWeight: 'bold',
  },
  formGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 522,
  },
  inputfile: {
    fontWeight: 500,
    fontSize: 15,
    textAlign: 'right',
    letterSpacing: 0.46,
    textTransform: 'uppercase',
    backgroundColor: '#fff',

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
  divider: {
    background: '1px solid rgba(0, 0, 0, 0.54)',
    width: 530,
    marginTop: '10px',
  },
  list: {
    listStyle: 'none',
  },
  listItem: {
    marginLeft: -40,
    marginTop: 12,
    boxShadow:
      ' 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    padding: 10,
    width: 530,
  },
}));

const DownloadReport = () => {
  const classes = useStyles();
  const loader = useContext(LoadingContext);
  //

  const [reimburseMonth, setReimburseMonth] = useState('');
  const [timeSheetMonth, setTimeSheetMonth] = useState('');
  const [fileList, setFileList] = useState([]);
  const [fileType, setFileType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [uploadEvents, setUploadEvents] = useState([]);
  const [uploadMessages, setUploadMessages] = useState([]);

  const handleUpload = (e) => {
    setFileList([...e.target.files]);
  };

  const handleOptionChange = (value) => {
    setFileType(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = selectedDate;

    const splitDate = selectedDate.split('-');
    const tempEvents = [];
    try {
      for (let file of fileList) {
        const formData = new FormData();
        formData.append('file', file);

        const employeeNo = file.name.split('.').slice(0, -1).join('.');
        const body = JSON.stringify({
          employeeNo,
          date,
          fileType,
          fileExtension: 'pdf',
        });
        let res;

        loader.setOpen(true);

        try {
          res = await axios.post('/api/file/financial-document', body, config);
          loader.setOpen(false);
          loader.setOpen(false);
        } catch (error) {
          loader.setOpen(false);

          console.log(error.response.data.error);
          tempEvents.push({
            status: 'failed',
            message: error.response.data.error,
          });
          continue;
        }

        const { fileKey, url, userId } = res.data;
        const res2 = await axios.put(url, formData);

        if (res2.status === 200) {
          await axios.put(
            '/api/admin/register',
            JSON.stringify({
              userId,
              financialDocument: {
                documentType: fileType,
                fileKey,
                documentedDate: {
                  month: splitDate[1],
                  year: splitDate[0],
                },
              },
            }),
            config
          );
          tempEvents.push({
            status: 'success',
            message: `File uploaded successfully for empNo: ${employeeNo}`,
          });
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUploadEvents([...tempEvents]);
    }
  };
  const handleDownloadZip = async (documentType) => {
    loader.setOpen(true);

    try {
      let documentedMonth;
      if (documentType === 'reimburse') {
        if (reimburseMonth === '') return;
        documentedMonth = reimburseMonth.split('-')[1];
      } else if (documentType === 'time-sheet') {
        if (timeSheetMonth === '') return;
        documentedMonth = timeSheetMonth.split('-')[1];
      }
      const res = await axios.post(
        '/api/admin/all-fin-docs',
        {
          documentType,
          documentedYear: new Date().getFullYear().toString(),
          documentedMonth,
          current: 'month',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      const { downloadUrls } = res.data.data;
      downloadAndZip(downloadUrls);
      loader.setOpen(false);
    } catch (error) {
      loader.setOpen(false);

      console.log(error);
    }
  };

  //Send confirmation log mail to the current admin if there are upload events
  useEffect(() => {
    const sendConfirmationEmail = async () => {
      console.log(uploadEvents);

      if (uploadEvents.length > 0) {
        loader.setOpen(true);

        //
        let successMessage2 = '';
        let successMessage =
          ' Successful Uploads for the Following Employee IDs:';
        let failureMessage = 'Employees Not Found With Employee IDs: ';
        uploadEvents.forEach((obj) => {
          if (obj.status === 'failed') {
            failureMessage += obj.message.split(' :')[1] + ', ';
          } else if (obj.status === 'success') {
            successMessage += obj.message.split('empNo: ')[1] + ', ';
            successMessage2 += obj.message.split('empNo: ')[1] + ', ';
          }
        });

        //
        let tempMessages = [];
        tempMessages.push({
          status: 'SUCCESS ',
          message: `For Employee IDs: ${successMessage2}`,
        });
        console.log(failureMessage);
        tempMessages.push({ status: 'Failure ', message: failureMessage });
        // setUploadMessages(...tempMessages);
        console.log(tempMessages);

        try {
          let something = '';
          console.log(uploadEvents);
          let arr = uploadEvents.map((o) => {
            if (o.status === 'success') {
              something.concat(` ${o.message}  `);
            }
          });
          console.log(something);
          await axios.post(
            '/api/admin/confirmation-email',
            JSON.stringify({
              subject: 'Document File Upload Details',
              message: `${successMessage}`,
              message2: `${failureMessage}`,
            }),
            config
          );
          loader.setOpen(false);

          toast(
            'Files uploaded. Mail sent successfully. Check the status below'
          );
        } catch (error) {
          console.log(error);
          loader.setOpen(false);

          toast(
            'Files uploaded. Failed to send the mail. Check the status below'
          );
        }
        setUploadMessages(tempMessages);
      }
    };
    sendConfirmationEmail();
  }, [uploadEvents]);

  //
  return (
    <Container className={classes.root}>
      {/* Reimbursment Download  */}

      <Container>
        <Typography className={classes.head}>
          Download Reimbursment
          <Divider className={classes.divider} />
        </Typography>

        <Typography className={classes.monthSelect}>
          Select Month:
          <DatePicker
            style={{ marginLeft: '3rem', width: '350px' }}
            onChange={(_, dateString) => {
              setReimburseMonth(dateString);
              console.log('DATE STRING', _, dateString);
            }}
            picker='month'
          />
        </Typography>

        <Button
          className={classes.Btn}
          onClick={async (e) => {
            if (reimburseMonth) handleDownloadZip('reimburse');
          }}>
          Download
        </Button>
      </Container>

      {/* Timesheet Download */}

      <Container>
        <Typography className={classes.head}>
          Download Timesheet
          <Divider className={classes.divider} />
        </Typography>

        <Typography className={classes.monthSelect}>
          Select Month:
          <DatePicker
            style={{ marginLeft: '3rem', width: '350px' }}
            onChange={(_, dateString) => {
              setTimeSheetMonth(dateString);
              console.log('DATE STRING', _, dateString);
            }}
            picker='month'
          />
        </Typography>

        <Button
          className={classes.Btn}
          onClick={async (e) => {
            if (timeSheetMonth) handleDownloadZip('time-sheet');
          }}>
          Download
        </Button>
      </Container>

      {/* Upload Wala Section */}

      <Container style={{ marginTop: '30px' }}>
        <Typography className={classes.head} style={{ marginBottom: '30px' }}>
          Upload All Timesheet and Payslips
          <Divider className={classes.divider} />
        </Typography>
        <Form onSubmit={handleSubmit}>
          <Form.Group className={classes.formGroup}>
            <Form.Label style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Select Month:
            </Form.Label>
            <DatePicker
              style={{ width: '350px' }}
              onChange={(_, dateString) => {
                console.log('DATE STRING', dateString);
                setSelectedDate(dateString);
              }}
              picker='month'
            />
          </Form.Group>
          <br />
          <Form.Group className={classes.formGroup}>
            <Form.Label style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Select File Type:
            </Form.Label>
            <Select
              defaultValue={fileType}
              style={{ width: '350px' }}
              onChange={handleOptionChange}>
              <Option value='disabled' disabled>
                Select the filetype
              </Option>
              <Option value='timeSheet'>Timesheet</Option>
              <Option value='paySlip'>Payslip</Option>
            </Select>
          </Form.Group>

          <Button className={classes.Btn}>
            {' '}
            <label for='file-input'>Browse </label>
          </Button>

          <input
            style={{ opacity: '0', display: 'none' }}
            id='file-input'
            type='file'
            multiple
            onChange={handleUpload}
          />

          <Button className={classes.Btn} type='submit'>
            Upload File
          </Button>
        </Form>
        <ul className={classes.list}>
          {uploadMessages.length !== 0 &&
            uploadMessages.map((event) => (
              <li className={classes.listItem}>
                <b
                  style={
                    event.status[0].toUpperCase() === 'F'
                      ? { color: 'red' }
                      : { color: 'green' }
                  }>
                  {event.status.toUpperCase()}
                </b>{' '}
                - {event.message}
              </li>
            ))}
        </ul>
      </Container>
    </Container>
  );
};

export default DownloadReport;
