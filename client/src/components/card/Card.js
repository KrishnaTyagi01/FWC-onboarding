import React, { useEffect, useState } from 'react';
import { CardHeader, CardContainer } from './card.styles';
// import '../../index.css';
import ProgressBar from '../progress-bar/Progress';
import axios from 'axios';
import { config } from '../../util/RequestUtil';
// import { Link } from 'react-router-dom';

const Card = ({ title, iconClass, sectionNames = [] }) => {
  const [completedSectionsCount, setCompletedSectionsCount] = useState(0);
  useEffect(() => {
    const getState = async () => {
      try {
        const result = await axios.get(
          '/api/employee?select=' + sectionNames.join(','),
          config
        );
        const { data } = result.data;
        let count = 0;
        for (const sectionName of sectionNames) {
          if (data[sectionName]) count++;
        }
        setCompletedSectionsCount(count);
      } catch (e) {}
    };
    getState();
  });
  return (
    <CardContainer
      className='card 
    w-500 
    h-100'>
      <div className=''>
        <CardHeader>{title}</CardHeader>
        <div className='d-flex justify-content-center'>
          <ProgressBar
            iconClass={iconClass}
            percentage={Math.floor(
              (completedSectionsCount / sectionNames.length) * 100
            ).toString()}
          />
        </div>
        <div className='text-center'>
          <p>
            <em>{`${completedSectionsCount}/${sectionNames.length} sections complete`}</em>
          </p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
