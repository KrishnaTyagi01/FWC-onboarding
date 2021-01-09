import React, { useState, useEffect, Fragment } from 'react';
import { Container, HeroContainer, MainHeader } from '../formpage.styles.js';
import OPBreadCrumb from '../../../components/form/OPBreadCrumb';
import axios from 'axios';
import FormPageComponent from '../../../components/form/FormPageComponent.js';
import { OPLoader } from '../../../util/LoaderUtil.js';
import { config } from '../../../util/RequestUtil';
import FwcHeader from '../../../components/header/FwcHeader.js';

const BasicInformation2 = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    dob: '',
    originalDob: '',
    sex: '',
    district: '',
    state: '',
    country: '',
    maritalStatus: '',
    marriageDate: '',
    religion: '',
  });
  const {
    dob,
    originalDob,
    sex,
    district,
    state,
    country,
    maritalStatus,
    marriageDate,
    religion,
  } = formData;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(
        '/api/employee?select=dob,originalDob,sex,district,state,country,maritalStatus,marriageDate,religion,',
        config
      );

      console.log(result.data.data);
      setFormData({ ...result.data.data });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateBasicInformation = async ({
    dob,
    originalDob,
    sex,
    district,
    state,
    country,
    maritalStatus,
    marriageDate,
    religion,
  }) => {
    try {
      const body = JSON.stringify({
        postParams: {
          dob,
          originalDob,
          sex,
          district,
          state,
          country,
          maritalStatus,
          marriageDate,
          religion,
          TBasicInformation2: true,
        },
      });
      setIsLoading(true);
      await axios.post('/api/employee', body, config);
      history.push('/information/designationInformation');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateBasicInformation(formData);
  };

  return (
    <Container>
            <FwcHeader pathname='/personal' />

      <HeroContainer className='box d-flex align-items-center justify-content-center'>
        <MainHeader className='text-center'>Personal Information</MainHeader>
      </HeroContainer>
      <div className=''>
        <FormPageComponent>
          <div className='container-fluid mt-5'>
            {/* <h2>Current Address</h2> */}
            <OPBreadCrumb
              activeIndex={1}
              crumbs={[
                {
                  link: '/information/basicInformation-1',
                  label: 'Basic Info - 1',
                },
                {
                  link: '/information/basicInformation-2',
                  label: 'Basic Info - 2',
                },
                {
                  link: '/information/designationInformation',
                  label: 'Designation',
                },
                {
                  link: '/information/documentalInformation',
                  label: 'Documental',
                },
                {
                  link: '/information/address',
                  label: 'Address',
                },
                {
                  link: '/information/languageInformation',
                  label: 'Language',
                },
              ]}
            />
            <hr></hr>
            <OPLoader isLoading={isLoading} />
            <form
              onSubmit={handleSubmit}
              className='mt-2 text-right'
              style={{ textAlign: 'center' }}
            >
              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> DOB
                </label>
                <div className='col-sm-9'>
                  <input
                    type='date'
                    className='form-control'
                    placeholder='as per records'
                    id='dob'
                    name='dob'
                    value={dob || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> DOB (As In Pan)
                </label>
                <div className='col-sm-9'>
                  <input
                    type='date'
                    className='form-control'
                    id='originalDob'
                    name='originalDob'
                    value={originalDob || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <fieldset className='p-2'>
                <div className='row'>
                  <legend className='col-form-label col-sm-3 pt-0'>
                    <span style={{ color: 'red' }}>*</span> Sex
                  </legend>
                  <div className='col-sm-9 text-left'>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='sex'
                        id='male'
                        value='male'
                        checked={sex === 'male'}
                        onChange={(e) => handleChange(e)}
                      />
                      <label className='form-check-label'>Male</label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='sex'
                        id='female'
                        value='female'
                        checked={sex === 'female'}
                        onChange={(e) => handleChange(e)}
                      />
                      <label className='form-check-label'>Female</label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className='form-group row p-2'>
                <label className='col-sm-3 form-label'>
                  <span style={{ color: 'red' }}>*</span> Birth Place
                </label>
                <div className='col-sm-3'>
                  <input
                    placeholder='District'
                    type='text'
                    className='form-control'
                    id='district'
                    name='district'
                    value={district || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className='col-sm-3'>
                  <input
                    placeholder='State'
                    type='text'
                    className='form-control'
                    id='state'
                    name='state'
                    value={state || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className='col-sm-3'>
                  <input
                    placeholder='Country'
                    type='text'
                    className='form-control'
                    id='country'
                    name='country'
                    value={country || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <fieldset className='form-group p-2'>
                <div className='row'>
                  <legend className='col-form-label col-sm-3 pt-0'>
                    <span style={{ color: 'red' }}>*</span> Marital Status
                  </legend>
                  <div className='col-sm-9 text-left'>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='maritalStatus'
                        id='single'
                        value='single'
                        onChange={(e) => handleChange(e)}
                        checked={maritalStatus === 'single'}
                      />
                      <label className='form-check-label'>Single</label>
                    </div>
                    <div className='form-check form-check-inline'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='maritalStatus'
                        id='married'
                        value='married'
                        onChange={(e) => handleChange(e)}
                        checked={maritalStatus === 'married'}
                      />
                      <label className='form-check-label'>Married</label>
                    </div>
                  </div>
                </div>
                {(() => {
                  switch (maritalStatus) {
                    case 'married':
                      return (
                        <Fragment>
                          <div className='row mt-2 pt-2'>
                            <label className='col-sm-3 form-label'>
                              <span style={{ color: 'red' }}>*</span> Marriage
                              Date
                            </label>

                            <div className='col-sm-9'>
                              <input
                                type='date'
                                className='form-control'
                                id='marriageDate'
                                name='marriageDate'
                                value={marriageDate || ''}
                                onChange={(e) => handleChange(e)}
                                required
                              />
                            </div>
                          </div>
                        </Fragment>
                      );

                    case 'single':
                      return <div></div>;
                    default:
                      return '';
                  }
                })()}
              </fieldset>

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Religion
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='religion'
                    placeholder=''
                    name='religion'
                    value={religion || ''}
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

export default BasicInformation2;
