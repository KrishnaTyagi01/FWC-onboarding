import React, { useState, useEffect } from 'react';
import {
  Container,
  HeroContainer,
  MainHeader,
  //  MainPara, CardHeader, CardPara
} from '../formpage.styles.js';
// import { Link } from 'react-router-dom';
// import Progressbar from '../../../components/progress-bar/Progress';
import ComplexComponent from '../../../components/form/ComplexComponent';
import OPBreadCrumb from '../../../components/form/OPBreadCrumb';
import axios from 'axios';
import FormPageComponent from '../../../components/form/FormPageComponent.js';
import { OPLoader } from '../../../util/LoaderUtil.js';
import { config } from '../../../util/RequestUtil.js';
import { toast } from '../../../util/ToastUtil.js';
import FwcHeader from '../../../components/header/FwcHeader.js';

const WorkInformation = ({ history }) => {
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(
        '/api/employee?select=workInformation,',
        config
      );
      if (
        result.data.data !== null &&
        result.data.data.workInformation !== undefined
      )
        setFormData([...result.data.data.workInformation]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <FwcHeader pathname='/work' />
      <HeroContainer className='box d-flex align-items-center justify-content-center'>
        <MainHeader className='text-center'>
          Academic Information and Work Experience
        </MainHeader>
      </HeroContainer>

      <FormPageComponent>
        <div className='container-fluid mt-5'>
          {/* <h2>Current Address</h2> */}
          <OPBreadCrumb
            activeIndex={1}
            crumbs={[
              {
                link: '/information/academicInformation',
                label: 'Academic Information',
              },
              {
                link: '/information/workInformation',
                label: 'Work Experience',
              },
            ]}
          />
          <hr></hr>
          <OPLoader isLoading={isLoading} />
          <h5 className='mt-3 mb-4'>
            Please specify all the previous companies you have worked at.
            <span style={{ color: 'red' }}>*</span>
          </h5>
          <ComplexComponent
            buttonName='Add Professional Experiences'
            onSubmit={async (data) => {
              /// Make your API call here
              setFormData([...data]);
            }}
            columnNames={[
              {
                label: 'Company ',
                key: 'company',
                isRequired: true,
              },
              {
                label: 'From Date',
                key: 'fromDate',
                isRequired: true,
                type: 'date',
              },
              {
                label: 'To date',
                key: 'toDate',
                isRequired: true,
                type: 'date',
              },
              {
                label: 'Designation',
                key: 'designation',
                isRequired: true,
              },
              {
                label: 'Salary p.a.',
                key: 'salary',
                isRequired: true,
              },
              {
                label: 'Type of Industry',
                key: 'typeOfIndustry',
                isRequired: true,
              },
              {
                label: 'Reason for leaving',
                key: 'reasonForLeaving',
                isRequired: true,
              },
              {
                label: 'Relieving Certificate',
                key: 'certificate',
                type: 'file',
              },
            ]}
            defaultData={[...formData]}
          />
          <div className='form-group row p-2 d-flex justify-content-center mt-4 mb-5'>
            <div className='col-sm-10'>
              <button
                type='submit'
                onClick={async () => {
                  try {
                    setIsLoading(true);
                    await axios.post(
                      '/api/employee',
                      JSON.stringify({
                        postParams: {
                          workInformation: formData,
                          TWorkInformation: true,
                        },
                      }),
                      config
                    );
                    history.push('/health');
                  } catch (e) {
                    toast('Error saving your data. Try again');
                  } finally {
                    setIsLoading(false);
                  }
                }}
                className='btn selected-crumb submit-button crumb-item w-100 font-weight-bold'>
                <i className='far fa-check-circle'></i> Save and Continue
              </button>
            </div>
          </div>
        </div>
      </FormPageComponent>
    </Container>
  );
};

export default WorkInformation;
