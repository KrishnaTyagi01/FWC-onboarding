import React, { useEffect, useState } from 'react';
import { HeroContainer, MainHeader, MainPara } from './hero.styles';
import Card from '../card/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card3 from '../card/Card3';
import CustomModal from '../modal/CustomModal';
import Job from '../featured-jobs/Job';

function Hero(...props) {
  const [userData, setUserData] = useState({ name: 'User', photo: '' });
  const [featuredJobs, setFeaturedJobs] = useState();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await axios.get('/api/employee');
        setUserData({ ...result.data.data });
      } catch (e) {}
    };
    const fetchJobsData = async () => {
      try {
        const res = await axios.get('/api/job-posting');
        setFeaturedJobs(res.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserData();
    fetchJobsData();
  }, []);

  // console.log(featuredJobs);

  return (
    <HeroContainer className='box flex align-items-center'>
      <div className='row'>
        <div className='col-lg-6 order-1 order-lg-1 justify-content-start'>
          <div className='row'>
            <div className='row col-lg-12 g-title-card'>
              <div className='col-lg-6'>
                <div className='row'>
                  <img
                    className='img-fluid'
                    src={userData.photo}
                    alt='user'
                    style={{ minWidth: '60px', maxHeight: '80px' }}
                  />
                  <MainHeader className='col-lg-8'>
                    Hi <b>{`${userData.name}`}</b>,<br /> Welcome to{' '}
                    <b>Future World</b>.
                  </MainHeader>
                </div>
              </div>
              <hr />
              <div className='col-lg-6'>
                <MainPara className='col-lg-12 g-welcome-card'>
                  {(() => {
                    if (userData.isFormComplete) {
                      return (
                        <div className='col'>
                          {Object.entries({
                            Department: userData?.department ?? 'N/A',
                            Designation: userData?.designation ?? 'N/A',
                            'Joining Date': userData?.joiningDate ?? 'N/A',
                            FWID: userData?.empNo ?? 'N/A',
                          }).map(([key, value], index) => (
                            <div key={index}>
                              {' '}
                              <b>{key.toString()}:&nbsp;&nbsp;</b>
                              {value.toString()}
                            </div>
                          ))}
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          Fill in your on-boarding application form and please
                          submit it.
                          <br />
                          using the "Submit Application" button
                          <br />
                          <br />
                          We are delighted to have you here
                          <br />
                          <br />
                        </div>
                      );
                    }
                  })()}
                </MainPara>
              </div>
              <Card3
                className='mt-5'
                title='Pay Slips, Time Sheets and Reimbursements'
                subTitle='Click view to download Pay Slips and Time Sheets. Upload Reimbursements'
              />
            </div>
          </div>
        </div>
        <div className='col-lg-6 order-1 order-lg-2'>
          <div className='glass-card card' style={{ padding: '20px' }}>
            <h3 className='font-weight-bold mb-3'>Featured Jobs</h3>
            {featuredJobs?.map((data) => (
              <div className='mb-3' style={{ border: 'none' }}>
                <Job {...data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}

export default Hero;
