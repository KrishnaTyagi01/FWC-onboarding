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

const LanguageInformation = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    canRead: '',
    canWrite: '',
    canSpeak: '',
    motherLang: '',
  });
  const { canRead, canWrite, canSpeak, motherLang } = formData;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(
        '/api/employee?select=canRead, canWrite, canSpeak, motherLang',
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

  const updateLanguageInformation = async ({
    canRead,
    canWrite,
    canSpeak,
    motherLang,
  }) => {
    try {
      const body = JSON.stringify({
        postParams: {
          canRead,
          canWrite,
          canSpeak,
          motherLang,
          TLanguageInformation: true,
        },
      });

      setIsLoading(true);
      await axios.post('/api/employee', body, config);
      history.push('/work');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateLanguageInformation(formData);
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
              activeIndex={5}
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
                  <span style={{ color: 'red' }}>*</span> Can Read
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='canRead'
                    placeholder=''
                    name='canRead'
                    value={canRead || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>
              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Can Write
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='canWrite'
                    placeholder=''
                    name='canWrite'
                    value={canWrite || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>
              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Can Speak
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='canSpeak'
                    placeholder=''
                    name='canSpeak'
                    value={canSpeak || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>
              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Mother Tongue
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='motherLang'
                    placeholder=''
                    name='motherLang'
                    value={motherLang || ''}
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

export default LanguageInformation;
