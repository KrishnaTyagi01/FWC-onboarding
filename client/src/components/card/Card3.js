import React from 'react';
import { Title, Subtitle, PayslipCard } from './card.styles';
import { Link } from 'react-router-dom';

const Card3 = ({ title, subTitle }) => {
  return (
    <PayslipCard className='sub-card h-100 w-100'>
      <hr />
      <div className='row'>
        <div className='col-md-12 col-lg-12'>
          <Title>{title}</Title>
          <Subtitle>{subTitle}</Subtitle>
        </div>
        <div className='col-md-12 col-lg-12'>
          <div>
            <Link to='/payslip' className='sub-card-container'>
              {' '}
              <span className='sub-card-content text-center'>View</span>
            </Link>
          </div>
        </div>
      </div>
    </PayslipCard>
  );
};

export default Card3;
