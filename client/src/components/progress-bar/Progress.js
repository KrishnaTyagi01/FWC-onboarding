import React from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const Progress = (props) => {
  return (
    // <div className='container'>
    //   <CircularProgressbar
    //     value={percentage}
    //     strokeWidth={10}
    //     text={`${percentage}%`}>
    //     <img
    //       style={{ width: 20, marginTop: -5 }}
    //       src='https://i.imgur.com/b9NyUGm.png'
    //       alt='doge'
    //     />
    //     <div style={{ fontSize: 12, marginTop: -5, color: 'red' }}>
    //       <strong>66%</strong> mate
    //     </div>
    //   </CircularProgressbar>
    // </div>

    <Box position='relative' display='inline-flex' ml={4}>
      <CircularProgress
        variant='determinate'
        // {...props}
        value={props.percentage}
        size={60}
        thickness={4}
        color='secondary'
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'>
        <Typography variant='secondary' component='div' color='secondary'>
          {`${Math.round(props.percentage)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

Progress.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  percentage: PropTypes.number.isRequired,
};

export default Progress;
