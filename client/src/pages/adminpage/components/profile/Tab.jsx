import React from 'react';
import {Paper,Tabs,Tab} from '@material-ui/core';

export default function TabNav(props) {


  const [value, setValue] = React.useState(props.tab);

  const handleChange = (event, newValue) => {
    setValue(newValue)
    props.state(newValue);
  };

  return (
    <Paper square >
      <Tabs
        centered
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Employee Information" />
        <Tab label="Employee Documents"  />
        <Tab label="Add reportee" />
      </Tabs>
    </Paper>
  );
}
