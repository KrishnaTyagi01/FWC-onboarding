import clsx from 'clsx';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import isSameDay from 'date-fns/isSameDay';
import endOfWeek from 'date-fns/endOfWeek';
import React, { useState, useContext } from 'react';
import startOfWeek from 'date-fns/startOfWeek';
import isWithinInterval from 'date-fns/isWithinInterval';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createStyles } from '@material-ui/styles';
// this guy required only on the docs site to work with dynamic date library
import { makeJSDateObject } from '../../util/helper';
import { IconButton, withStyles } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment'
import TimesheetContext from '../../context/timesheet/timesheetContext'


const styles = createStyles((theme) => ({
  dayWrapper: {
    position: 'relative',
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: '0 2px',
    color: 'inherit',
  },
  customDayHighlight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '2px',
    right: '2px',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '50%',
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled,
  },
  highlightNonCurrentMonthDay: {
    color: '#676767',
  },
  highlight: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  firstHighlight: {
    extend: 'highlight',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  endHighlight: {
    extend: 'highlight',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  },
}));

const getWeekData = (date, numberOfDays) => {
  const startDate = startOfWeek(makeJSDateObject(date));
  let weekDates= []; // 10/01/2021
  let weekDisplay=  []; // 10 Sun
  const weekNumber = moment(startDate).week();
  const month = moment(startDate).format('MM');
  const year = moment(startDate).year().toString();
    for (var i = 0; i < numberOfDays; i++) {
      weekDates.push(moment(startDate).add(i, 'days').format('DD/MM/YYYY'));
      weekDisplay.push(moment(startDate).add(i, 'days').format('DD ddd'));
    }
     return { weekNumber, month, year, weekDates, weekDisplay };
  };
  
  const OPWeekPicker = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    // const Timesheet  = useContext(TimesheetContext);
    const {setEmployeeTimesheetState,EmployeeTimesheetState} =  useContext(TimesheetContext);
    console.log( EmployeeTimesheetState);

  console.log(selectedDate);
  
    const handleWeekChange = (date) => {
      
      const { weekNumber, month, year, weekDates, weekDisplay } = getWeekData(
        date,
        7,
      );
         
        setEmployeeTimesheetState({
            weekNumber,
            month,
            year,
            weekDates,
            weekDisplay,
          });

      setSelectedDate(startOfWeek(makeJSDateObject(date)));
    }; 

  // const handleWeekChange = (date) => {
  //   setSelctedDate(startOfWeek(makeJSDateObject(date)));
  // };

  const formatWeekSelectLabel = (date, invalidLabel) => {
    let dateClone = makeJSDateObject(date);

    return dateClone && isValid(dateClone)
      ? `Week of ${format(startOfWeek(dateClone), 'MMM do')}`
      : invalidLabel;
  };

  const renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
    const { classes } = props;
    let dateClone = makeJSDateObject(date);
    let selectedDateClone = makeJSDateObject(selectedDate);

    const start = startOfWeek(selectedDateClone);
    const end = endOfWeek(selectedDateClone);

    const dayIsBetween = isWithinInterval(dateClone, { start, end });
    const isFirstDay = isSameDay(dateClone, start);
    const isLastDay = isSameDay(dateClone, end);

    const wrapperClassName = clsx({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay,
    });

    const dayClassName = clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
    });

    return (
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {format(dateClone, 'd')} </span>
        </IconButton>
      </div>
    );
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label='Week Picker'
        value={selectedDate}
        onChange={handleWeekChange}
        renderDay={renderWrappedWeekDay}
        labelFunc={formatWeekSelectLabel}
      />
    </MuiPickersUtilsProvider>
  );
};

export default withStyles(styles)(OPWeekPicker);
