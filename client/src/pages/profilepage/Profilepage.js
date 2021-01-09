import React, { useEffect, useState, useContext } from 'react';
import moment from 'moment';
import { DatePicker, Space, Tabs } from 'antd';
import { config } from '../../util/RequestUtil';
import axios from 'axios';
import { ButtonGroup, Button } from 'react-bootstrap';
import InpForm from './InpForm';
import {
  LeftCol,
  RightCol,
  ProfContainer,
  DisplayPic,
  SidebarDetails,
  NameSection,
  UploadContainer,
  FormMain,
} from './ProfilePage.styles';
import IMGDEFAULT from '../../assets/img/imgplaceholder.png';
import UserContext from '../../context/userContext';

import PHONE from '../../assets/img/phone.png';
import { uploadFinancialDocument } from '../../util/UploadFile';
import { toast } from '../../util/ToastUtil';
import { OPLoader } from '../../util/LoaderUtil';

import { downloadAndZip } from '../../util/DownloadUtil';

const { TabPane } = Tabs;

const Profilepage = ({ retrievedId }) => {
  const [subAdminId, setSubAdminId] = useState();
  const [userData, setUserData] = useState({});
  const [pSlipDate, setPSlipDate] = useState('end');
  const [tSheetDate, setTSheetDate] = useState('end');
  const [rImburseDate, setRImburseDate] = useState('end');
  const [timeSheetDate, setTimeSheetDate] = useState('end');

  const [reimburseYear, setReimburseYear] = useState('');
  const [timeSheetYear, setTimeSheetYear] = useState('');

  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(false);

  const [role, setRole] = useState('sub-admin');
  const [subAdmins, setSubAdminList] = useState([]);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [enabledPaySlipDates, setEnabledPaySlipDates] = useState([]);
  const [enabledTimeSheetDates, setEnabledTimeSheetDates] = useState([]);
  const [screenWidth, setscreenWidth] = useState();

  const [enabledReimbursementDates, setEnabledReimbursementDates] = useState(
    []
  );
  const [enabledTime_Sheet, setEnabledTime_Sheet] = useState([]);
  const { _, __, logout } = useContext(UserContext);

  const checkLogin = async () => {
    try {
      const res = await axios.get('/api/auth/validate-token').then();
      setRole(res.data.role);
    } catch (err) {}
  };

  const addRepor = async (e) => {
    e.preventDefault();

    try {
      let reqqres = await axios.post('/api/admin/add-reportee', {
        reporteeId: subAdminId,
        userId: retrievedId,
      });
      toast(reqqres.data.message);
    } catch (error) {
      if (error.response.status === 401) logout();
      toast(error);
    }
  };

  const paySlipMonthUpdater = (date, dateString) => {
    setPSlipDate(dateString);
  };

  const getSubAdmins = async () => {
    try {
      let res = await axios.get('/api/admin/users?role=sub-admin');
      setSubAdminList(res.data.data);
    } catch (error) {
      if (error.response.status === 401) logout();
      console.error(error);
    }
  };

  const getEnabledDates = async (documentType, resArr = []) => {
    try {
      setLoading(true);
      const res = await axios.post('/api/admin/financial-documents', {
        userId: retrievedId,
        documentType: documentType,
      });
      const { data } = res.data;
      resArr.splice(0, resArr.length);
      data.forEach((o) => {
        resArr.push(`${o.documentedDate.year}-${o.documentedDate.month}`);
      });
    } catch (e) {
      console.log(e);
      toast('Error fetching document count');
      if (e.response?.status === 401) logout();
    } finally {
      setLoading(false);
    }
  };

  function disabledDate(current) {
    // Can not select days before today and today
    const formatted = current.format('YYYY-MM');

    return !enabledReimbursementDates.includes(formatted);
  }
  function disabledDate1(current) {
    // Can not select days before today and today
    const formatted = current.format('YYYY-MM');

    return !enabledTime_Sheet.includes(formatted);
  }

  const fetchEnabledDates = async () => {
    const tempArr = [];
    await getEnabledDates('reimburse', tempArr);
    console.log('REIM', tempArr);
    setEnabledReimbursementDates([...tempArr]);
    await getEnabledDates('paySlip', tempArr);
    console.log('PAYSLIP', tempArr);
    setEnabledPaySlipDates([...tempArr]);
    await getEnabledDates('timeSheet', tempArr);
    console.log('TIMESHEET', tempArr);
    setEnabledTimeSheetDates([...tempArr]);

    //  Edit

    await getEnabledDates('time-sheet', tempArr);
    console.log('Timesheet DOwnload', tempArr);
    setEnabledTime_Sheet([...tempArr]);
  };

  useEffect(() => {
    try {
      checkLogin();
      getSubAdmins();
      const body = document.documentElement;

      body.scrollTop -= 10000;
    } catch (error) {}

    fetchEnabledDates();
  }, []);

  useEffect(() => {
    setscreenWidth(window.innerWidth);
  }, [window.innerWidth]);
  const timeSheetMonthUpdater = (_, dateString) => {
    setTSheetDate(dateString);
  };

  const getUserData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `/api/admin/employee-info/${retrievedId}?select=FName,increments,photo,isFormComplete,empNo,LName,email,joiningDate,designation,phoneNumber,Address,FWEmail,Manager,custLoc,custName,BillingPH,annualCTC,increment,lwd,comments,user`
      );
      let { data } = res.data;
      if (!data) data = {};
      setUserData({ ...data });
      const tempIsFormComplete = data.isFormComplete;
      if (tempIsFormComplete) {
        setIsFormComplete(true);
      }
    } catch (e) {
      if (e.response.status === 401) logout();
      toast('Error fetching employee data');
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = () => {
    window.open(`/api/ejs/pdf-gen?employeeId=${retrievedId}`);
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, [toggle]);

  const rImburseDateOnChange = async (_, dateString) => {
    setRImburseDate(dateString);
  };

  const timeSheetDateOnChange = async (_, dateString) => {
    setTimeSheetDate(dateString);
  };

  const downloadRImburseDocument = async () => {
    const tempDateArr = rImburseDate.split('-');
    if (rImburseDate === 'end') {
      return toast('Please select a date first');
    }
    try {
      const res = await axios.post('/api/admin/single-fin-doc', {
        userId: retrievedId,
        documentType: 'reimburse',
        documentedDate: {
          month: tempDateArr[1],
          year: tempDateArr[0],
        },
      });
      const { url } = res.data.data;
      setRImburseDate('end');
      window.open(url);
    } catch (e) {
      toast('Error fetching document');
    } finally {
      setLoading(false);
    }
  };

  //

  const downloadTimeSheetDocument = async () => {
    const tempDateArr = timeSheetDate.split('-');
    if (timeSheetDate === 'end') {
      return toast('Please select a date first');
    }
    try {
      const res = await axios.post('/api/admin/single-fin-doc', {
        userId: retrievedId,
        documentType: 'time-sheet',
        documentedDate: {
          month: tempDateArr[1],
          year: tempDateArr[0],
        },
      });
      const { url } = res.data.data;
      setTimeSheetDate('end');
      window.open(url);
    } catch (e) {
      toast('Error fetching document');
    } finally {
      setLoading(false);
    }
  };

  //
  const onUploadHandler1 = async (e) => {
    let file = e.target.files[0];
    let time1 = pSlipDate.split('-');

    if (pSlipDate !== 'end') {
      try {
        setLoading(true);
        await uploadFinancialDocument(file, pSlipDate, {
          uploadUrl: '/api/file/financial-document',
          confirmationUrl: '/api/admin/register',

          userId: retrievedId,
          fileType: 'paySlip',
          date: {
            month: time1[1],
            year: time1[0],
          },
        });
        const tempArr = [];
        await getEnabledDates('paySlip', tempArr);
        setEnabledPaySlipDates([...tempArr]);
        setPSlipDate('end');
      } catch (e) {
        toast('Error uploading document');
      } finally {
        setLoading(false);
      }
    } else {
      toast('Please Select Pay Slip Month');
    }
  };

  const onUploadHandler2 = async (e) => {
    let file = e.target.files[0];
    let time = tSheetDate.split('-');
    if (tSheetDate === 'end') {
      toast('Please Select Time Sheet Month');
    } else if (tSheetDate !== 'end') {
      try {
        setLoading(true);
        await uploadFinancialDocument(file, tSheetDate, {
          uploadUrl: '/api/file/financial-document',
          confirmationUrl: '/api/admin/register',
          userId: retrievedId,
          fileType: 'timeSheet',
          date: {
            month: time[1],
            year: time[0],
          },
        });
        setTSheetDate('end');
        const tempArr = [];
        await getEnabledDates('timeSheet', tempArr);
        setEnabledTimeSheetDates([...tempArr]);
        setPSlipDate('end');
      } catch (e) {
        toast('Error uploading document');
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleFormComplete = async () => {
    try {
      setLoading(true);
      await axios.post(
        '/api/admin/toggle-form-completion',
        {
          userId: retrievedId,
          isFormComplete: !isFormComplete,
        },
        config
      );
      await getUserData();
      toast('Form state changed');
    } catch (error) {
      toast('Server Error Try Again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <OPLoader isLoading={loading} />
      <ProfContainer>
        <LeftCol>
          <DisplayPic>
            <img
              alt='user profile'
              className='imageDp'
              src={userData.photo || IMGDEFAULT}
            />
          </DisplayPic>
          <SidebarDetails>
            <div className='join-and-end'>
              <p>
                <img alt='altey' src={PHONE} />
                <b className='sidebar-item'> {userData.phoneNumber}</b>
              </p>
              <p>
                <span>
                  <b>Date Of Joining: </b>
                  {moment(userData.joiningDate).format('DD/MM/YYYY')}{' '}
                </span>
              </p>
              <p>
                {' '}
                <span>
                  <b>FW-ID: </b>
                  {userData.empNo}{' '}
                </span>
              </p>
              <p>
                <span>
                  <b>Designation:</b> {userData.designation}
                </span>
              </p>
            </div>
          </SidebarDetails>
        </LeftCol>

        <RightCol>
          <NameSection>
            <div className='Head'>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                {' '}
                <h2>
                  {(userData?.FName || ' ') + ' ' + (userData?.LName || '')}
                </h2>{' '}
                <div>
                  <ButtonGroup aria-label='Basic example'>
                    <Button
                      className='head-button'
                      variant='primary'
                      size='small'
                      shape='round'
                      onClick={async () => {
                        try {
                          let body = {
                            userId: userData.user,
                          };
                          setLoading(true);
                          await axios.post(
                            '/api/admin/update-password',
                            JSON.stringify(body),
                            config
                          );

                          toast('Password Reset Completed');
                        } catch (error) {
                          console.log(error);
                          toast('Error in Resetting the Password');
                        } finally {
                          setLoading(false);
                        }
                      }}>
                      Reset Password
                    </Button>{' '}
                    <Button
                      className='head-button'
                      size='small'
                      variant='primary'
                      shape='round'
                      onClick={downloadFile}>
                      <i class='fa fa-eye' aria-hidden='true'></i> View Profile
                    </Button>{' '}
                    <Button
                      className='head-button'
                      variant='primary'
                      size='small'
                      shape='round'
                      onClick={toggleFormComplete}>
                      {!userData.isFormComplete ? (
                        <span>
                          <i class='fa fa-lock' aria-hidden='true' /> &nbsp;
                          Onboarding application
                        </span>
                      ) : (
                        <span>
                          <i class='fa fa-unlock' aria-hidden='true' />
                          &nbsp; Onboarding application{' '}
                        </span>
                      )}
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
            <br />
            <br />
            <Tabs
              type='card'
              defaultActiveKey='1'
              onChange={console.log}
              size='small'
              tabBarStyle={{
                fontWeight: 600,
                fontSize: 16,
              }}>
              <TabPane tab='Employee Information ' key='data'>
                <InpForm
                  userData={userData}
                  retrievedId={retrievedId}
                  toggle={toggle}
                  setToggle={setToggle}
                />
              </TabPane>
              <TabPane tab='Employee Documents' key='upload'>
                <React.Fragment>
                  <UploadContainer>
                    <div className='info-type'>Upload Payslip</div>
                    <div className='select'>
                      <p className='text-right'>Select Month </p>{' '}
                      <Space direction='vertical'>
                        <DatePicker
                          onChange={paySlipMonthUpdater}
                          picker='month'
                          monthCellRender={(dateMoment) => {
                            const date = moment(dateMoment, 'YYYY-MM');
                            const month = date.format('MMM');
                            const formattedDate = date.format('YYYY-MM');
                            let style = {
                              backgroundColor: 'rgba(63,70,204,0.25)',
                              borderRadius: 5,
                            };
                            if (!enabledPaySlipDates.includes(formattedDate))
                              style = {};

                            return (
                              <span
                                style={{
                                  padding: 10,
                                  ...style,
                                }}>
                                {month}
                              </span>
                            );
                          }}
                          value={
                            pSlipDate === 'end' || pSlipDate.trim() === ''
                              ? undefined
                              : moment(pSlipDate, 'YYYY-MM')
                          }
                        />
                      </Space>
                      <Button
                        className='submit'
                        onClick={(e) => {
                          document.getElementById('FileUpload1').click();
                        }}>
                        {'UPLOAD'}
                      </Button>
                      <input
                        type='file'
                        className='realupload'
                        accept='application/pdf'
                        id='FileUpload1'
                        style={{ opacity: 0 }}
                        disabled={
                          pSlipDate === 'end' || pSlipDate.trim() === ''
                        }
                        onChange={onUploadHandler1}
                      />
                    </div>
                  </UploadContainer>
                  <UploadContainer>
                    <div className='info-type'>Upload Time Sheet</div>
                    <div className='select'>
                      <p>Select Month </p>{' '}
                      <Space direction='vertical'>
                        <DatePicker
                          onChange={timeSheetMonthUpdater}
                          monthCellRender={(dateMoment) => {
                            const date = moment(dateMoment, 'YYYY-MM');
                            const month = date.format('MMM');
                            const formattedDate = date.format('YYYY-MM');
                            let style = {
                              backgroundColor: 'rgba(63,70,204,0.25)',
                              borderRadius: 5,
                            };
                            if (!enabledTimeSheetDates.includes(formattedDate))
                              style = {};

                            return (
                              <span
                                style={{
                                  padding: 10,
                                  ...style,
                                }}>
                                {month}
                              </span>
                            );
                          }}
                          picker='month'
                          value={
                            tSheetDate === 'end' || tSheetDate.trim() === ''
                              ? undefined
                              : moment(tSheetDate, 'YYYY-MM')
                          }
                        />
                      </Space>
                      <Button
                        className='submit'
                        onClick={(e) => {
                          document.getElementById('FileUpload2').click();
                        }}>
                        {' UPLOAD'}
                      </Button>
                      <input
                        type='file'
                        className='realupload'
                        accept='application/pdf'
                        id='FileUpload2'
                        disabled={
                          tSheetDate === 'end' || pSlipDate.trim() === ''
                        }
                        style={{ opacity: 0, width: 0, height: 0 }}
                        onChange={onUploadHandler2}
                      />
                    </div>
                  </UploadContainer>
                  <br />
                  <UploadContainer>
                    <span className='info-type'>
                      Download Reimbursement Documents
                    </span>
                    <div className='select'>
                      <p>Select Month </p>{' '}
                      <Space direction='vertical'>
                        <DatePicker
                          onChange={rImburseDateOnChange}
                          disabledDate={disabledDate}
                          value={
                            rImburseDate === 'end' || rImburseDate.trim() === ''
                              ? undefined
                              : moment(rImburseDate, 'YYYY-MM')
                          }
                          picker='month'
                        />
                      </Space>
                      <Button
                        className='submit'
                        onClick={(e) => {
                          document.getElementById('FileUpload3').click();
                        }}>
                        {' DOWNLOAD'}
                      </Button>
                      <input
                        type='submit'
                        id='FileUpload3'
                        disabled={
                          rImburseDate === 'end' || rImburseDate.trim() === ''
                        }
                        style={{ opacity: 0, width: 0, height: 0 }}
                        onClick={downloadRImburseDocument}
                      />
                    </div>
                  </UploadContainer>
                  {/*  */}
                  <UploadContainer>
                    <span className='info-type'>Download Time Sheet</span>
                    <div className='select'>
                      <p>Select Month </p>{' '}
                      <Space direction='vertical'>
                        <DatePicker
                          onChange={timeSheetDateOnChange}
                          disabledDate={disabledDate1}
                          value={
                            timeSheetDate === 'end' ||
                            timeSheetDate.trim() === ''
                              ? undefined
                              : moment(timeSheetDate, 'YYYY-MM')
                          }
                          picker='month'
                        />
                      </Space>
                      <Button
                        className='submit'
                        onClick={(e) => {
                          document.getElementById('FileUpload4').click();
                        }}>
                        {' DOWNLOAD'}
                      </Button>
                      <input
                        type='submit'
                        id='FileUpload4'
                        disabled={
                          timeSheetDate === 'end' || timeSheetDate.trim() === ''
                        }
                        style={{ opacity: 0, width: 0, height: 0 }}
                        onClick={downloadTimeSheetDocument}
                      />
                    </div>
                  </UploadContainer>
                  {/*  */}
                  <UploadContainer>
                    <span className='info-type'>
                      Download All Reimbursement Documents
                    </span>
                    <div className='select'>
                      <p>Select Year </p>{' '}
                      <Space direction='vertical'>
                        <DatePicker
                          onChange={(dateString) =>
                            setReimburseYear(dateString)
                          }
                          value={reimburseYear}
                          picker='year'
                        />
                      </Space>
                      <Button
                        onClick={async (e) => {
                          try {
                            const res = await axios.post(
                              '/api/admin/all-fin-docs',
                              {
                                userId: retrievedId,
                                documentType: 'reimburse',
                                current: 'employee',
                                documentedYear: reimburseYear,
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
                          } catch (error) {
                            console.log(error);
                          }
                        }}>
                        Download
                      </Button>
                    </div>
                  </UploadContainer>
                  {/*  */}
                  <UploadContainer>
                    <span className='info-type'>
                      Download All Timesheet Documents
                    </span>
                    <div className='select'>
                      <p>Select Year </p>{' '}
                      <Space direction='vertical'>
                        <DatePicker
                          onChange={(dateString) =>
                            setTimeSheetYear(dateString)
                          }
                          value={timeSheetYear}
                          picker='year'
                        />
                      </Space>
                      <Button
                        onClick={async (e) => {
                          try {
                            const res = await axios.post(
                              '/api/admin/all-fin-docs',
                              {
                                userId: retrievedId,
                                documentType: 'timeSheet',
                                current: 'employee',
                                documentedYear: timeSheetYear,
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
                          } catch (error) {
                            console.log(error);
                          }
                        }}>
                        Download
                      </Button>
                    </div>
                  </UploadContainer>
                  {/*  */}
                </React.Fragment>
              </TabPane>
              <TabPane tab='Add Reportee' key='Add Reportee'>
                <>
                  <FormMain>
                    <form onSubmit={addRepor}>
                      <h4>
                        {' '}
                        <div className='info-type'>Assign to Sub Admin</div>
                      </h4>
                      <div className='form-group' style={{ paddingLeft: 70 }}>
                        <select
                          className='form-control'
                          onChange={(e) => setSubAdminId(e.target.value)}
                          defaultValue={''}>
                          <option value='' disabled>
                            Select sub-admin ...
                          </option>
                          {subAdmins.map((subAdmin, key) => (
                            <option key={key} value={subAdmin._id}>
                              {subAdmin.name}
                            </option>
                          ))}
                        </select>
                        <br />
                        <div className='form-group form-check'>
                          <input
                            className='form-check-input  addreport'
                            required
                            type='checkbox'
                            id='Checkbox'
                          />
                          <label className='form-check-label'>
                            Are you sure you want to add the reportee
                          </label>
                        </div>
                      </div>
                      <Button
                        className='submit'
                        style={{
                          width: '190px',
                          margin: '10px 13% ',
                          background: '#3f47cc',
                          color: 'white',
                          fontWeight: 600,
                        }}
                        type='submit'>
                        CONTINUE
                      </Button>
                    </form>
                  </FormMain>
                </>
              </TabPane>
            </Tabs>
          </NameSection>
        </RightCol>
      </ProfContainer>
    </React.Fragment>
  );
};
export default Profilepage;
