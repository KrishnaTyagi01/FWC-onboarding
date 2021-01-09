import React, { useState, useEffect } from 'react';
import {
  Container,
  HeroContainer,
  MainPara,
  MainHeader,
} from './secondpage.styles';
import Header from '../../components/header/Header';
import Card2 from '../../components/card/Card2';
import axios from 'axios';
import { config } from '../../util/RequestUtil';
import FwcHeader from '../../components/header/FwcHeader';

function HealthPage() {
  const [completedSectionsCount, setCompletedSectionsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const list = ['Family Members Information', 'Employee Health Information'];
  const pathname = ['familyInformation', 'healthInformation'];

  const sectionNames = ['THealthInformation', 'TFamilyInformation'];

  useEffect(() => {
    const getState = async () => {
      setIsLoading(true);
      const result = await axios.get(
        '/api/employee?select=' + sectionNames.join(','),
        config
      );
      setIsLoading(false);
      const { data } = result.data;
      let count = 0;
      for (const sectionName of sectionNames) {
        if (data[sectionName]) count++;
      }
      setCompletedSectionsCount(count);
    };
    getState();
    //eslint-disable-next-line
  }, []);
  return (
    <Container>
      {/* <Header pathname='/' /> */}
      <FwcHeader pathname='/' />
      <HeroContainer className='box d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 order-1 order-lg-1 d-flex flex-column justify-content-start mt-5 mb-5'>
              <MainHeader>My Application</MainHeader>
              <MainPara>
                Please fill in your on-boarding application form. We are
                delighted to have you here!
              </MainPara>
            </div>
            <div className='col-lg-7 order-1 order-lg-2'>
              <Card2
                title='Health and Family Information'
                subTitle={
                  isLoading
                    ? 'Loading...'
                    : `${completedSectionsCount}/${sectionNames.length} Sections Completed`
                }
                iconClass='fas fa-address-card fa-2x'
                percentage={Math.floor(
                  (completedSectionsCount / sectionNames.length) * 100
                ).toString()}
                list={list}
                pathname={pathname}
              />
            </div>
          </div>
        </div>
      </HeroContainer>
    </Container>
  );
}

export default HealthPage;
