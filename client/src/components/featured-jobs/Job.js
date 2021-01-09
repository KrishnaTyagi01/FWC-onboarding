import React, { Fragment, useState } from 'react';
import styles from './jobstyle.module.css';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';
import { uploadDocument } from '../../util/UploadFile';
import { OPLoader } from '../../util/LoaderUtil';
import { toast } from '../../util/ToastUtil';
import Axios from 'axios';
import { Paper } from '@material-ui/core';

const Job = ({ ...data }) => {
  const [modalShow, setModalShow] = useState(false);
  const [formShow, setFormShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [fileKey, setFileKey] = useState('');

  const {
    _id,
    title,
    shortDescription,
    longDescription,
    type,
    shiftType,
    location,
    createdAt,
    imageUrl,
    deadline,
    salary,
    experience,
  } = data;

  function MyVerticallyCenteredModal(props) {
    const htmlMessage = `
  <p>Hi Admin , </br>
  <p>
`;
    const [File, setFile] = useState({});
    const [applicantData, setApplicantData] = useState({
      APname: '',
      APdob: '',
      APexperience: '',
    });
    const { APname, APdob, APexperience } = applicantData;

    const handleChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      // console.log(name, value);

      setApplicantData({
        ...applicantData,
        [name]: value,
      });
    };

    // const formArray = [
    //   { label: 'Name', key: 'APname', class: 'row mb-2' },
    //   { label: 'DOB', key: 'APdob', class: 'row mb-2', type: 'date' },
    //   { label: 'Experience', key: 'APexperience', class: 'row mb-4' },
    // ];

    const formatSalary = (s) => {
      if (s.toString().toLowerCase().trim().startsWith('rs')) return s;
      else return `Rs. ${s}`;
    };

    const handleFileUpload = async (e) => {
      setIsLoading(true);
      // console.log(APname, APdob, APexperience);
      const file = e.target.files[0];
      const tempFileName = file.name;
      if (tempFileName.length > 0) setIsFileUploaded(true);
      // setFileName(tempFileName);
      // if (APname || APdob || APexperience === '') {
      //   toast('Fill in all the details');
      //   setIsLoading(false);
      //   return;
      // }
      const res = await uploadDocument(file, { confirmationUrl: null });

      if (!res) {
        toast('Error uploading file. Try again');
        setIsLoading(false);
        return;
      }
      setFileKey(res);
      setIsLoading(false);
      // try {
      //   await Axios.post('/api/job-posting/respond', {
      //     jobId: _id,
      //     fileKey,
      //   });
      //   toast('Recommendation sent successfully');
      // } catch (e) {
      //   toast('Error notifying admin. Try again');
      // } finally {
      //   setIsLoading(false);
      //   setIsFileUploaded(false);
      //   setModalShow(false);
      //   setFormShow(false);
      // }
    };

    const handleFormUpload = async () => {
      setIsLoading(true);

      const res = await uploadDocument(File, { confirmationUrl: null });

      if (!res) {
        toast('Error uploading file. Try again');
        setIsLoading(false);
        return;
      }

      try {
        await Axios.post('/api/job-posting/respond', {
          jobId: _id,
          fileKey,
        });
        toast('Recommendation sent successfully');
      } catch (e) {
        toast('Error notifying admin. Try again');
      } finally {
        setIsLoading(false);
        setIsFileUploaded(false);
        setModalShow(false);
        setFormShow(false);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      handleFormUpload();
    };

    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header closeButton className={styles.header}>
          {formShow ? (
            <Fragment>
              <h4 className='text-center' style={{ marginLeft: '20px' }}>
                Enter Applicant Details
              </h4>
            </Fragment>
          ) : (
            <Fragment>
              <img
                src={imageUrl}
                style={{ paddingTop: '5px', marginRight: '25px' }}
                className='img-fluid'
                height='50px'
                width='50px'
                alt='Employer'
              />
              <h3 className='text-center' style={{ marginTop: '20px' }}>
                {title}
              </h3>
            </Fragment>
          )}
        </Modal.Header>
        <Modal.Body closeButton style={{ paddingTop: '0px' }}>
          {formShow ? (
            <form
              onSubmit={handleSubmit}
              className='mt-4 p-2 ml-5 mr-5 text-right'>
              {/* {formArray.map((formData) => (
                <div className='row mb-2'>
                  <label className='col-sm-2'>
                    <span style={{ color: 'red' }}>*</span> {formData.label}
                  </label>
                  <div className='col-sm-8'>
                    <input
                      type={formData.type ?? 'text'}
                      className='form-control form-control-sm'
                      onChange={handleChange}
                      name={formData.key}
                      // value={applicantData.formData.key || ''}
                      required
                    />
                  </div>
                  <div className='col-sm-4'></div>
                </div>
              ))} */}

              <div className=' form-group row mb-2'>
                <label className='col-sm-3'>
                  <span style={{ color: 'red' }}>*</span> Name
                </label>
                <div className='col-sm-7'>
                  <input
                    type='text'
                    className='form-control form-control-sm'
                    onChange={handleChange}
                    name='APname'
                    value={APname || ''}
                    required
                  />
                </div>
                <div className='col-sm-2'></div>
              </div>

              <div className=' form-group row mb-2'>
                <label className='col-sm-3'>
                  <span style={{ color: 'red' }}>*</span> DOB
                </label>
                <div className='col-sm-7'>
                  <input
                    type='date'
                    className='form-control form-control-sm'
                    onChange={handleChange}
                    name='APdob'
                    value={APdob || ''}
                    required
                  />
                </div>
                <div className='col-sm-2'></div>
              </div>

              <div className='form-group row mb-2'>
                <label className='col-sm-3'>
                  <span style={{ color: 'red' }}>*</span> Experience
                </label>
                <div className='col-sm-7'>
                  <input
                    type='text'
                    className='form-control form-control-sm'
                    onChange={handleChange}
                    name='APexperience'
                    value={APexperience || ''}
                    required
                  />
                </div>
                <div className='col-sm-2'></div>
              </div>

              <div className='form-group row mb-4 '>
                <label class='form-label col-sm-3' for='customFile'>
                  <span style={{ color: 'red' }}>*</span> Upload Resume
                </label>
                <input
                  type='file'
                  class='form-control form-control-sm col-sm-7'
                  id='customFile'
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    console.log(APname, APdob, APexperience);
                    setFile(e.target.files[0]);
                    setApplicantData({
                      ...applicantData,
                      APname,
                      APdob,
                      APexperience,
                    });
                  }}
                />
                <div className='col-sm-2'></div>

                {/* {isFileUploaded ? (
                  <label className={styles.button4}>{fileName}</label>
                ) : (
                  <Fragment>
                    <input
                      type='file'
                      id='upload'
                      hidden
                      onChange={handleFileUpload}
                    />
                    <label className={styles.button2} for='upload'>
                      Upload Resume
                    </label>
                  </Fragment>
                )} */}
              </div>

              <div className='form-group row d-flex justify-content-center mt-2'>
                <div className='col-sm-5'>
                  <button
                    type='submit'
                    className='btn selected-crumb submit-button crumb-item w-100 font-weight-bold'>
                    <i className='far fa-check-circle'></i> Submit Applicant
                    Details
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className={styles.employerItem1}>
              <ul>
                <li>
                  <i className='fas fa-map-marker-alt'></i>&nbsp;
                  {location}
                </li>
                <li> | </li>
                <li>Posted On: {moment(createdAt).format('MM/DD/yyyy')}</li>
              </ul>
              <h5 style={{ marginTop: '20px' }}>Detailed Job Description</h5>
              <pre
                style={{
                  paddingLeft: '5px',
                  fontFamily: 'roboto',
                  fontWeight: '500',
                }}>
                {longDescription}
              </pre>
              <span className={styles.tag1}>
                Salary: <b>{formatSalary(salary)}</b>
              </span>
              <span className={styles.tag1}>
                Experience Required:&nbsp;
                <b>{experience}</b>&nbsp; years
              </span>
              <span className={styles.tag1}>
                Shift: &nbsp;
                <b>{shiftType}</b>
              </span>
              <span className={styles.tag1}>
                Apply before: <b>{moment(deadline).format('DD/MM/yyyy')}</b>
              </span>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer
          style={{ borderTop: 'none', display: 'block', paddingLeft: '30px' }}>
          {formShow ? (
            //true
            <div>
              {/* <input
                type='file'
                id='upload'
                hidden
                onChange={handleFileUpload}
              /> */}
              {/* <label
                onClick={handleFileUpload}
                className={styles.button3}
                for='upload'>
                Upload Resume
              </label> */}
              <label
                onClick={() => setFormShow(false)}
                className={styles.button1}>
                Back
              </label>
            </div>
          ) : (
            // false
            <div>
              <label
                onClick={() => setFormShow(true)}
                className={styles.button1}
                for='upload'>
                Upload Details
              </label>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Fragment>
      <OPLoader isLoading={isLoading} />
      <Paper onClick={() => setModalShow(true)} className={styles.employerItem}>
        <img
          src={imageUrl}
          className='img-fluid rounded mx-auto d-block'
          width='64px'
          alt='Employer'
        />

        <h3>{title}</h3>

        <ul>
          <li>
            <i className='fas fa-map-marker-alt'></i>&nbsp;
            {location}
          </li>
          <li> | </li>
          <li>Posted On: {moment(createdAt).format('MM/DD/yyyy')}</li>
        </ul>
        {/* <br /> */}
        <p style={{ marginTop: '5px' }}>{shortDescription}</p>
        <span className={styles.spanOne}>{type}</span>
        <span className={styles.spanTwo}>{shiftType}</span>
      </Paper>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setFormShow(false);
          setIsFileUploaded(false);
        }}
        {...data}
      />
    </Fragment>
  );
};

export default Job;

// {formArray.map((formData) => (

//   ))}
