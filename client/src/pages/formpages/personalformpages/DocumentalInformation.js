import React, { useState, useEffect } from 'react';
import {
  Container,
  HeroContainer,
  MainHeader,
  //  MainPara, CardHeader, CardPara
} from '../formpage.styles.js';
import FormPageComponent from '../../../components/form/FormPageComponent';
import OPBreadCrumb from '../../../components/form/OPBreadCrumb.js';

import axios from 'axios';
import { OPLoader } from '../../../util/LoaderUtil.js';
import { config } from '../../../util/RequestUtil.js';
import FwcHeader from '../../../components/header/FwcHeader.js';

const DocumentalInformation = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    panNo: '',
    passportNo: '',
    issue: '',
    place: '',
    validity: '',
  });
  const { panNo, passportNo, issue, place, validity } = formData;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(
        '/api/employee?select=panNo,passportNo,issue,place,validity',
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

  const updateDocumentalInformation = async ({
    panNo,
    passportNo,
    issue,
    place,
    validity,
  }) => {
    try {
      const body = JSON.stringify({
        postParams: {
          panNo,
          passportNo,
          issue,
          place,
          validity,
          TDocumentalInformation: true,
        },
      });

      setIsLoading(true);
      await axios.post('/api/employee', body, config);
      history.push('/information/address');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateDocumentalInformation(formData);
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
            {/* <h2>Current Address</h2> */}
            <OPBreadCrumb
              activeIndex={3}
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
            <form onSubmit={handleSubmit} className='mt-2 text-right'>
              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> PAN number
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='panNo'
                    placeholder=''
                    name='panNo'
                    value={panNo || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Passport number
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='passportNo'
                    placeholder=''
                    name='passportNo'
                    value={passportNo || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Issue Date And Place
                </label>

                <div className='col-sm-4'>
                  <input
                    type='date'
                    className='form-control'
                    id='issue'
                    placeholder=''
                    name='issue'
                    value={issue || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className='col-sm-5'>
                  <input
                    type='text'
                    className='form-control'
                    id='place'
                    placeholder='location'
                    name='place'
                    value={place || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Validity
                </label>
                <div className='col-sm-9'>
                  <input
                    type='date'
                    className='form-control'
                    id='validity'
                    placeholder=''
                    name='validity'
                    value={validity || ''}
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

export default DocumentalInformation;
