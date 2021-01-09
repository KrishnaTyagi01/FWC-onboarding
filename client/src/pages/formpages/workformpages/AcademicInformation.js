import React, { useState, useEffect } from 'react';
import {
  Container,
  HeroContainer,
  MainHeader,
  //  MainPara, CardHeader, CardPara
} from '../formpage.styles.js';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import FormPageComponent from '../../../components/form/FormPageComponent';
import ComplexComponent from '../../../components/form/ComplexComponent';
import OPBreadCrumb from '../../../components/form/OPBreadCrumb.js';
import { config } from '../../../util/RequestUtil.js';
import { toast } from '../../../util/ToastUtil.js';
import FwcHeader from '../../../components/header/FwcHeader.js';

const AcademicInformation = ({ history }) => {
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const defaultData = [
        {
          qualiDesc: '10th',
          schoolCollegeName: '',
          marks: '',
          yOfPassingg: '',
          sub: '',
          certificate: '',
          deletable: false,
        },
        {
          qualiDesc: '12th/Diploma',
          schoolCollegeName: '',
          marks: '',
          yOfPassingg: '',
          sub: '',
          certificate: '',
          deletable: false,
        },
        {
          qualiDesc: 'Undergraduate',
          schoolCollegeName: '',
          marks: '',
          yOfPassingg: '',
          sub: '',
          certificate: '',
          deletable: false,
        },
        {
          qualiDesc: 'Postgraduate',
          schoolCollegeName: '',
          marks: '',
          yOfPassingg: '',
          sub: '',
          certificate: '',
          deletable: false,
        },
      ];
      const result = await axios.get(
        '/api/employee?select=academicInformation,',
        config
      );
      const resData = result.data.data;
      let tempData = [];
      if (resData !== null && resData.academicInformation !== undefined) {
        if (resData.academicInformation.length === 0) {
          tempData = defaultData;
        } else {
          tempData = [...resData.academicInformation];
        }
      }
      if (tempData.length === 0) {
        tempData = defaultData;
      }
      setFormData([...tempData]);
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
            activeIndex={0}
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
          <h5 className='mt-3 mb-4'>
            Please specify from Secondary Education onwards.
            <span style={{ color: 'red' }}>*</span>
          </h5>
          <ComplexComponent
            buttonName='Add School/College Information'
            onSubmit={async (data) => {
              /// Make your API call here
              setFormData([...data]);
            }}
            columnNames={[
              {
                label: 'Grade',
                key: 'qualiDesc',
              },
              {
                label: 'School Name',
                key: 'schoolCollegeName',
                isRequired: true,
              },
              {
                label: 'Marks (%)',
                key: 'marks',
                width: 100,
              },
              {
                label: 'Pass Year',
                key: 'yOfPassing',
                width: 100,
              },
              {
                label: 'Subject / Specialisation',
                key: 'sub',
                isRequired: true,
              },
              {
                label: 'Certificate',
                key: 'certificate',
                type: 'file',
                width: 300,
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
                          academicInformation: formData,
                          TAcademicInformation: true,
                        },
                      }),
                      config
                    );
                    history.push('/information/workInformation');
                  } catch (e) {
                    toast('Error saving your data. Try again');
                  } finally {
                    setIsLoading(false);
                  }
                }}
                className='btn selected-crumb submit-button crumb-item w-100 font-weight-bold'
              >
                <i className='far fa-check-circle'></i> Save and Continue
              </button>
            </div>
          </div>
        </div>
      </FormPageComponent>
    </Container>
  );
};

export default AcademicInformation;
