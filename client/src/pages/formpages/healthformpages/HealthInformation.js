import React, { useState, useEffect } from 'react';
import {
  Container,
  HeroContainer,
  MainHeader,
  //  MainPara, CardHeader, CardPara
} from '../formpage.styles.js';
// import { Link } from 'react-router-dom';
import FormPageComponent from '../../../components/form/FormPageComponent';
import OPBreadCrumb from '../../../components/form/OPBreadCrumb.js';
import axios from 'axios';
import { OPLoader } from '../../../util/LoaderUtil.js';
import { config } from '../../../util/RequestUtil';
import FwcHeader from '../../../components/header/FwcHeader.js';
// import { Link } from 'react-router-dom';

const HealthInformation = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    bloodGroup: '',
    height: '',
    weight: '',
    lEyePower: '',
    rEyePower: '',
    indentification1: '',
    indentification2: '',
    illnesses: '',
  });
  const {
    bloodGroup,
    height,
    weight,
    lEyePower,
    rEyePower,
    indentification1,
    indentification2,
    illnesses,
  } = formData;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(
        '/api/employee?select=bloodGroup,height,weight,lEyePower,rEyePower,indentification1,indentification2,illnesses,',
        config
      );

      console.log(result.data.data);
      setFormData({ ...result.data.data });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateHealthInformation = async ({
    bloodGroup,
    height,
    weight,
    lEyePower,
    rEyePower,
    indentification1,
    indentification2,
    illnesses,
  }) => {
    try {
      const body = JSON.stringify({
        postParams: {
          bloodGroup,
          height,
          weight,
          lEyePower,
          rEyePower,
          indentification1,
          indentification2,
          illnesses,
          THealthInformation: true,
        },
      });

      setIsLoading(true);
      await axios.post('/api/employee', body, config);
      history.push('/other');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateHealthInformation(formData);
  };

  return (
    <Container>
      <FwcHeader pathname='/health' />

      <HeroContainer className='box d-flex align-items-center justify-content-center'>
        <MainHeader className='text-center'>
          Employee Health and Family Information
        </MainHeader>
      </HeroContainer>
      <div className=''>
        <FormPageComponent>
          <div className='container-fluid mt-5'>
            {/* <h2>Current Address</h2> */}
            {/* <h2>Current Address</h2> */}
            <OPBreadCrumb
              activeIndex={1}
              crumbs={[
                {
                  link: '/information/familyInformation',
                  label: 'Family Member Information',
                },
                {
                  link: '/information/healthInformation',
                  label: 'Employee Health Information',
                },
              ]}
            />
            <hr></hr>
            <OPLoader isLoading={isLoading} />
            <form onSubmit={handleSubmit} className='mt-2 text-right'>
              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Blood Group
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='bloodGroup'
                    placeholder=''
                    name='bloodGroup'
                    value={bloodGroup || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Height (in cms)
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='height'
                    placeholder=''
                    name='height'
                    value={height || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Weight
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='weight'
                    placeholder=''
                    name='weight'
                    value={weight || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Power Of Glass
                </label>
                <div className='col-sm-4'>
                  <input
                    type='text'
                    className='form-control'
                    id='lEyePower'
                    placeholder='L'
                    name='lEyePower'
                    value={lEyePower || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className='col-sm-5'>
                  <input
                    type='text'
                    className='form-control'
                    id='rEyePower'
                    placeholder='R'
                    name='rEyePower'
                    value={rEyePower || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Identification Marks
                </label>
                <div className='col-sm-4'>
                  <input
                    type='text'
                    className='form-control'
                    id='indentification1'
                    placeholder='1.'
                    name='indentification1'
                    value={indentification1 || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className='col-sm-5'>
                  <input
                    type='text'
                    className='form-control'
                    id='indentification2'
                    placeholder='2.'
                    name='indentification2'
                    value={indentification2 || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Any Major Surgery /
                  Illness In The Past / Allergies
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='illnesses'
                    placeholder=''
                    name='illnesses'
                    value={illnesses || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2 d-flex justify-content-center mt-4 mb-5'>
                <div className='col-sm-12'>
                  <button
                    type='submit'
                    className='btn selected-crumb submit-button crumb-item w-100 font-weight-bold'
                  >
                    <i className='far fa-check-circle'></i> Save and Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </FormPageComponent>
      </div>
    </Container>
  );
};

export default HealthInformation;
