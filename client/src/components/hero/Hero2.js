import React from 'react';
import {
  Container,
  Hero2Container,
  MainHeader,
  MainPara,
  // CardHeader, CardPara
} from './hero.styles';
import Card2 from '../card/Card2';

function Hero2() {
  return (
    <HeroContainer className='box d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 order-1 order-lg-1 d-flex flex-column justify-content-start mt-5 mb-5'>
            <MainHeader>My Application</MainHeader>
            <MainPara>
              Please fill in your on-boarding application form. We are delighted
              to have you here!
            </MainPara>
          </div>
          <div className='col-lg-7 order-1 order-lg-2'>
            <Card2
              title='Personal Information'
              subTitle='2/4 Sections Completed'
              iconClass='fas fa-address-card fa-2x'
              percentage='50'
            />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}

export default Hero2;
