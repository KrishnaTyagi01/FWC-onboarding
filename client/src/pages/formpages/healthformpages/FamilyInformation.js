import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, HeroContainer, MainHeader } from '../formpage.styles.js';

import FormPageComponent from '../../../components/form/FormPageComponent';
import ComplexComponent from '../../../components/form/ComplexComponent';
import OPBreadCrumb from '../../../components/form/OPBreadCrumb.js';
import { config } from '../../../util/RequestUtil';
import { toast } from '../../../util/ToastUtil.js';
import FwcHeader from '../../../components/header/FwcHeader.js';

const FamilyInformation = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(
        '/api/employee?select=familyInformation,',
        config
      );
      if (
        result.data.data !== null &&
        result.data.data.familyInformation !== undefined
      )
        setFormData([...result.data.data.familyInformation]);
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

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
              activeIndex={0}
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
            <h5 className='mt-3 mb-4'>
              Add at max four members of your family
              <span style={{ color: 'red' }}>*</span>
            </h5>
            <ComplexComponent
              buttonName='Add Family Member'
              onSubmit={async (data) => {
                /// Make your API call here
                setFormData([...data]);
              }}
              rowLimit={4}
              columnNames={[
                {
                  label: 'Family Member Name',
                  key: 'name',
                  isRequired: true,
                },
                {
                  label: 'Relationship',
                  key: 'relationship',
                  isRequired: true,
                },
                {
                  label: 'DOB',
                  key: 'familyDob',
                  isRequired: true,
                  type: 'date',
                },
                {
                  label: 'Blood Group',
                  key: 'bloodGroup',
                  isRequired: true,
                },
                {
                  label: 'Occupation',
                  key: 'occupation',
                  isRequired: true,
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
                            familyInformation: formData,
                            TFamilyInformation: true,
                          },
                        }),
                        config
                      );
                      history.push('/information/healthInformation');
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
      </div>
    </Container>
  );
};

export default FamilyInformation;
