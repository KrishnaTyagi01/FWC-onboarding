import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import Job from '../featured-jobs/Job';
import OnboardingItem from '../form-list/OnboardingItem';
import { Link } from 'react-router-dom';
import HomeContext from '../../context/home-page/homeContext';
import CustomModal from '../modal/CustomModal';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FwcTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { featuredJobs } = useContext(HomeContext);

  const onboardingItems = [
    {
      pathname: '/personal',
      title: 'Personal Information',
      sectionNames: [
        'TBasicInformation1',
        'TBasicInformation2',
        'TDesignationInformation',
        'TDocumentalInformation',
        'TAddressInformation',
        'TLanguageInformation',
      ],
    },
    {
      pathname: '/work',
      title: 'Academic Information',
      sectionNames: ['TWorkInformation', 'TAcademicInformation'],
    },
    {
      pathname: '/health',
      title: 'Health & Family',
      sectionNames: ['THealthInformation', 'TFamilyInformation'],
    },
    {
      pathname: '/other',
      title: 'Other Information',
      sectionNames: ['TOtherInformation', 'TUploadInformation'],
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const jobsTab = featuredJobs?.map((data) => (
    <div className='mb-1 p-2' key={data._id} style={{ border: 'none' }}>
      <Job {...data} />
    </div>
  ));

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          variant='fullWidth'
          onChange={handleChange}
          aria-label='simple tabs example'>
          <Tab label='FEATURED JOBS' {...a11yProps(0)} />
          <Tab label='ONBOARDING' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel
        value={value}
        index={0}
        style={{ maxHeight: 304, overflow: 'auto' }}>
        {(() => {
          switch (featuredJobs?.length) {
            case 0:
              return (
                <Box m={10} style={{ padding: '50px' }}>
                  <h4 className='text-center'>No Featured Jobs Currently</h4>
                </Box>
              );

            case 1:
              return (
                <Box mb={21}>
                  {featuredJobs?.map((data) => (
                    <div
                      className='mb-1 p-2'
                      key={data._id}
                      style={{ border: 'none' }}>
                      <Job {...data} />
                    </div>
                  ))}
                </Box>
              );

            case 2:
              return (
                <Box mb={4}>
                  {featuredJobs?.map((data) => (
                    <div
                      className='mb-1 p-2'
                      key={data._id}
                      style={{ border: 'none' }}>
                      <Job {...data} />
                    </div>
                  ))}
                </Box>
              );
            default:
              return featuredJobs?.map((data) => (
                <div
                  className='mb-1 p-2'
                  key={data._id}
                  style={{ border: 'none' }}>
                  <Job {...data} />
                </div>
              ));
          }
        })()}
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{ maxHeight: 304, overflow: 'auto' }}>
        <Box m={1} p={1}>
          <CustomModal />
        </Box>
        {onboardingItems.map((data) => (
          <Link
            className='link'
            key={data.title}
            to={{ pathname: data.pathname }}>
            <OnboardingItem
              title={data.title}
              sectionNames={data.sectionNames}
            />
          </Link>
        ))}
      </TabPanel>
    </div>
  );
}
