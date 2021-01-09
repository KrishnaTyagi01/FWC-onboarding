import React from 'react';
import LoadingGIF from '../assets/img/loading.gif';

export const OPLoader = ({ isLoading }) => {
  if (!isLoading) return <div />;
  if (isLoading)
    return (
      <div>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100vw',
            height: '100vh',
          }}></div>
        <div
          style={{
            display: 'block',
            position: 'absolute',
            zIndex: 1051,
            // top: '50%',
            left: '50%',
          }}>
          <div className='col'>
            <div>
              <img alt='Page Loading' src={LoadingGIF}></img>
            </div>
            <span
              className='row text-center'
              style={{
                marginLeft: '5px',
                fontSize: '24px',
                color: '#f8f8f8',
              }}>
              Loading ...
            </span>
          </div>
        </div>
      </div>
    );
};
