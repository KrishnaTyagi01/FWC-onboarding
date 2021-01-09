import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TimesheetContext from './timesheetContext'

const TimesheetState = (props) => {
  const [EmployeeTimesheetState, setEmployeeTimesheetState] = useState({
            weekNumber: '',
            month: '',
            year: '',
            weekDates: [''],
            weekDisplay: [''],
  });

  return (
    <TimesheetContext.Provider
      value={{
        EmployeeTimesheetState,
        setEmployeeTimesheetState
      }}>
      {props.children}
    </TimesheetContext.Provider>
  );
};

export default TimesheetState;
