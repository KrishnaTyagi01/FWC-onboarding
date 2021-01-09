import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CustomModal from '../../components/modal/CustomModal';
import { HeroContainer } from '../../components/hero/hero.styles';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';

const OnboardingPage = () => {
  return (
    <Fragment>
      <Header pathname='/' />

      <HeroContainer className='box flex align-items-center'>
        <div className='container'>
          <div className='d-flex flex-column'>
            <div className='hero-row d-flex flex-row justify-content-center'>
              <CustomModal />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-6 '>
              <div
                style={{
                  width: 526,
                  height: 820,
                }}>
                <div className='d-flex flex-column'>
                  <div className='hero-row d-flex flex-row justify-content-center'>
                    <Link className='link' to={{ pathname: '/personal' }}>
                      <Card
                        title='Personal Information'
                        sectionNames={[
                          'TBasicInformation1',
                          'TBasicInformation2',
                          'TDesignationInformation',
                          'TDocumentalInformation',
                          'TAddressInformation',
                          'TLanguageInformation',
                        ]}></Card>
                    </Link>
                    <Link className='link' to={{ pathname: '/work' }}>
                      <Card
                        title='Academic Information'
                        sectionNames={[
                          'TWorkInformation',
                          'TAcademicInformation',
                        ]}></Card>
                    </Link>
                  </div>
                  <div className='hero-row d-flex flex-row justify-content-center '>
                    <Link className='link' to={{ pathname: '/health' }}>
                      <Card
                        title='Health & Family'
                        sectionNames={[
                          'THealthInformation',
                          'TFamilyInformation',
                        ]}></Card>
                    </Link>
                    <Link className='link' to={{ pathname: '/other' }}>
                      <Card
                        title='Other Information'
                        sectionNames={[
                          'TOtherInformation',
                          'TUploadInformation',
                        ]}></Card>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3'></div>
          </div>
        </div>
      </HeroContainer>
    </Fragment>
  );
};

export default OnboardingPage;
