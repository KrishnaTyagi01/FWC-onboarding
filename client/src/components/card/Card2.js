import React from 'react';
import { Card2Header, Card2Container } from './card.styles';
import ProgressBar from '../progress-bar/Progress';
import { Link } from 'react-router-dom';

const Card = ({ title, subTitle, iconClass, percentage, list, pathname }) => {
  return (
    <Card2Container className='sub-card h-100 w-100'>
      <div className='row'>
        <div className='col-md-12 col-lg-12'>
          <div className='row' style={{ padding: '20px' }}>
            <div className='col-md-3' style={{ padding: 0.5 }}>
              <ProgressBar iconClass={iconClass} percentage={percentage} />
            </div>
            <div className='col-md-9 d-flex align-items-center'>
              <div className='col-md-12'>
                <Card2Header>{title}</Card2Header>
                <div className='center'>
                  <p>
                    <em>{subTitle}</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12 col-lg-12'>
          <div>
            {list.map((item, index) => (
              <Link
                key={index}
                to={`information/${pathname[index]}`}
                className='sub-card-container'>
                {' '}
                <span className='sub-card-content'>{item}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Card2Container>
  );
};

export default Card;
