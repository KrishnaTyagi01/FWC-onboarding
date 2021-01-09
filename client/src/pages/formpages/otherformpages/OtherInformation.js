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

const OtherInformation = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    relativeInfo: '',
    ref1Name: '',
    ref1Company: '',
    ref1Designation: '',
    ref1Contact: '',
    ref2Name: '',
    ref2Company: '',
    ref2Designation: '',
    ref2Contact: '',
  });
  const {
    relativeInfo,
    ref1Name,
    ref1Company,
    ref1Designation,
    ref1Contact,
    ref2Name,
    ref2Company,
    ref2Designation,
    ref2Contact,
  } = formData;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(
        '/api/employee?select=relativeInfo,ref1Name,ref1Company,ref1Designation,ref1Contact,ref2Name,ref2Company,ref2Designation,ref2Contact,',
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

  const updateAddress = async ({
    relativeInfo,
    ref1Name,
    ref1Company,
    ref1Designation,
    ref1Contact,
    ref2Name,
    ref2Company,
    ref2Designation,
    ref2Contact,
  }) => {
    try {
      const body = JSON.stringify({
        postParams: {
          relativeInfo,
          ref1Name,
          ref1Company,
          ref1Designation,
          ref1Contact,
          ref2Name,
          ref2Company,
          ref2Designation,
          ref2Contact,
          TOtherInformation: true,
        },
      });

      setIsLoading(true);
      await axios.post('/api/employee', body, config);
      history.push('/information/uploads');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateAddress(formData);
  };

  return (
    <Container>
      <FwcHeader pathname='/other' />

      <HeroContainer className='box d-flex align-items-center justify-content-center'>
        <MainHeader className='text-center'>
          Uploads and Other Information
        </MainHeader>
      </HeroContainer>
      <div className=''>
        <FormPageComponent>
          <div className='container-fluid mt-5'>
            {/* <h2>Current Address</h2> */}
            <OPBreadCrumb
              crumbs={[
                {
                  link: '/information/otherInformation',
                  label: 'Other Information',
                },
                {
                  link: '/information/uploads',
                  label: 'Uploading Documents',
                },
              ]}
              activeIndex={0}
            />
            <hr></hr>
            <OPLoader isLoading={isLoading} />
            <form onSubmit={handleSubmit} className='mt-2 text-right'>
              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Relatives In The
                  Company
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='relativeInfo'
                    name='relativeInfo'
                    value={relativeInfo || ''}
                    onChange={(e) => handleChange(e)}
                    required
                    placeholder='Name , Designation and Location'
                  />
                </div>
              </div>

              <div className='form-row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> References : (Please
                  specify any two other than your relatives, one should be from
                  your last Company)
                </label>
                <div className='col-sm-4 p-2'>
                  <input
                    type='text'
                    className='form-control'
                    id='ref1Name'
                    placeholder='Name'
                    name='ref1Name'
                    value={ref1Name || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type='text'
                    className='form-control'
                    id='ref1Company'
                    placeholder='Company'
                    name='ref1Company'
                    value={ref1Company || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type='text'
                    className='form-control'
                    id='ref1Designation'
                    placeholder='Designation'
                    name='ref1Designation'
                    value={ref1Designation || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type='text'
                    className='form-control'
                    id='ref1Contact'
                    name='ref1Contact'
                    value={ref1Contact || ''}
                    onChange={(e) => handleChange(e)}
                    required
                    placeholder='Contact No.'
                  />
                </div>
                <div className='col-sm-5 p-2'>
                  <input
                    type='text'
                    className='form-control'
                    id='ref2Name'
                    placeholder='Name'
                    name='ref2Name'
                    value={ref2Name || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type='text'
                    className='form-control'
                    id='ref2Company'
                    placeholder='Company'
                    name='ref2Company'
                    value={ref2Company || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type='text'
                    className='form-control'
                    id='ref2Designation'
                    placeholder='Designation'
                    name='ref2Designation'
                    value={ref2Designation || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type='text'
                    className='form-control'
                    id='ref2Contact'
                    name='ref2Contact'
                    value={ref2Contact || ''}
                    onChange={(e) => handleChange(e)}
                    required
                    placeholder='Contact No.'
                  />
                </div>
              </div>

              {/* <div className='form-group row p-2'>
                  <label className='col-sm-12'>
                    <span style={{ color: 'red' }}>*</span> Are you having
                    membership with any professional body / organization? (if
                    yes, please specify)
                  </label>
                  <div className='col-sm-12'> */}
              {/* <input type="text" className="form-control" id="" placeholder="" /> */}
              {/* <textarea
                      className='form-control'
                      id='exampleFormControlTextarea1'
                      rows='3'
                    ></textarea>
                  </div>
                </div> */}

              {/* <div className='form-group row p-2'>
                  <label className='col-sm-12'>
                    <span style={{ color: 'red' }}>*</span> Company Assets
                    provided{' '}
                  </label>
                  <div className='col-sm-12'>
                    <div className='form-check p-2'>
                      <div className='form-check form-check-inline'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='inlineCheckbox1'
                          value='Tel(Res)'
                        />
                        <label className='form-check-label'>Tel(Res)</label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='inlineCheckbox2'
                          value='Vehile'
                        />
                        <label className='form-check-label'>Vehicle</label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='inlineCheckbox3'
                          value='Laptop'
                        />
                        <label className='form-check-label'>Laptop</label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='inlineCheckbox3'
                          value='ID Card'
                        />
                        <label className='form-check-label'>ID Card</label>
                      </div>
                    </div>
                    <div className='form-check p-2'>
                      <div className='form-check form-check-inline'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='inlineCheckbox1'
                          value='Mobile'
                        />
                        <label className='form-check-label'>Mobile</label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='inlineCheckbox2'
                          value='Furniture'
                        />
                        <label className='form-check-label'>Furniture</label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='inlineCheckbox3'
                          value='Desktop'
                        />
                        <label className='form-check-label'>Desktop</label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='inlineCheckbox3'
                          value='Others'
                        />
                        <label className='form-check-label'>Others</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='form-group row p-2'>
                  <label className='col-sm-12'>
                    <h3>DECLARATION</h3>
                  </label>
                  <div className='col-sm-12'>
                    <div className='form-check p-2'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='defaultCheck1'
                      />
                      <label className='form-check-label'>
                        This is to confirm that the information furnished /
                        mentioned herein is complete, true, correct and
                        authentic to the best of my knowledge without any
                        discrepancy.
                      </label>
                    </div>
                  </div>
                </div> */}

              <div className='form-group row p-2 d-flex justify-content-center mt-4 mb-5'>
                <div className='col-sm-12'>
                  <button
                    type='submit'
                    className='btn selected-crumb submit-button crumb-item w-100 font-weight-bold'>
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

export default OtherInformation;
