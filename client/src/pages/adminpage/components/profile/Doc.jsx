import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Button, Grid, Divider } from '@material-ui/core';
import { DatePicker } from 'antd';
import { toast } from '../../../../util/ToastUtil';
import { config } from '../../../../util/RequestUtil';

import axios from 'axios';

import moment from 'moment';
const useStyles = makeStyles((theme) => ({
//  root:{
//    display:'flex',
//    flexDirection:"column",

//  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 45,
  },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  // },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  labelSpan: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '160%',
    letterSpacing: 0.15,
    color: 'rgba(0, 0, 0, 0.87)',
    margin: 'auto 0',
    marginRight: 30,
    width:'10rem',
    marginTop: '2rem'
  },
  form: {
    width: 374,
  },
  Btn: {
    minWidth: 148,
    height: 36,
    background: '#0D3C61',
    boxShadow:
      ' 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: 4,
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  BtnContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  head: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    // lineHeight: '133.4%',
    color: 'rgba(0, 0, 0, 0.87)',
    marginTop: 30,
  },
  divider:{
    background: '1px solid rgba(0, 0, 0, 0.54)',
    width: 524,
    marginTop: '10px' ,

  },
  monthSelect:{
    marginTop:"2rem",
    fontSize: 20,
    fontWeight: 'bold' 
  },
  monthInput:{
    marginLeft:"3rem",
    width:"350px"
  }
}));

export const Downloader = (props) => {
  const classes = useStyles();
  const [dateString, setDateString] = React.useState('');
  const [enabledDates, setEnabledDates] = React.useState([]);
  const handleClick = () => {
    console.log(props.docType, dateString);
    handleDownloadZip(props.docType, dateString);
  };

  const onChange = (date, string) => {
    console.log(string);
    setDateString(string);
  };
  let resArr = [];

  useEffect(() => {
    getEnabledDates();
  }, []);

  const getEnabledDates = async () => {
    try {
      const res = await axios.post('/api/admin/financial-documents', {
        userId: window.location.pathname.split('/')[2].toString(),
        documentType: props.docType,
      });
      const { data } = res.data;
      resArr.splice(0, resArr.length);
      data.forEach((o) => {
        resArr.push(`${o.documentedDate.year}-${o.documentedDate.month}`);
      });
    } catch (e) {
      console.log(e);
      toast('Error fetching document count');
    } finally {
      setEnabledDates(resArr);
    }
  };
  function disabledDate(current) {
    // Can not select days before today and today
    const formatted = current.format('YYYY-MM');

    return !enabledDates.includes(formatted);
  }

  const handleDownloadZip = async (documentType, date) => {
    try {
      const body = JSON.stringify({
        userId: window.location.pathname.split('/')[2].toString(),
        documentType,
        documentedDate: {
          month: date.split('-')[1],
          year: date.split('-')[0],
        },
      });

      await axios
        .post('/api/admin/single-fin-doc', body, config)
        .then((res) => {
          let pdf_url = res.data.data.url;
          window.open(pdf_url);
        });
    } catch (error) {
      console.log(error);
      toast(`${documentType} not available for the selected month`);
    } finally {
      setDateString('');
    }
  };

  return (
    <>
      <Container>

      <Container className={classes.upperContainer}>
          <Typography className={classes.head}>{props.head}</Typography>
          <Divider className={classes.divider} />
        </Container>

        <Container className={classes.monthwrapper}>
          <Typography  className={classes.monthSelect}>
            Select Month:
            <DatePicker
              className={classes.monthInput}
              onChange={onChange}
              size={'large'}
              picker='month'
              monthCellRender={(dateMoment) => {
                const date = moment(dateMoment, 'YYYY-MM');
                const month = date.format('MMM');
                const formattedDate = date.format('YYYY-MM');
                let style = {
                  backgroundColor: 'rgba(13,60,97,1)',
                  borderRadius: 2,
                  color: 'white',
                  fontWeight: '700',
                };
                if (!enabledDates.includes(formattedDate))
                  style = {
                    backgroundColor: 'rgba(13,60,97,.1)',
                    borderRadius: 2,
                    color: 'white',
                    fontWeight: '700',
                  };

                return (
                  <span
                    style={{
                      padding: 10,
                      ...style,
                    }}>
                    {month}
                  </span>
                );
              }}
              value={
                dateString === 'end' || dateString.trim() === ''
                  ? undefined
                  : moment(dateString, 'YYYY-MM')
              }
            />
          </Typography>
        </Container>


        <Container className={classes.BtnContainer}>
          <Button
            disabled={
              !enabledDates.includes(moment(dateString).format('YYYY-MM'))
                ? 'disabled'
                : undefined
            }
            variant='contained'
            className={classes.Btn}
            onClick={handleClick}>
            {props.btntxt}
          </Button>
        </Container>

      </Container>
    </>
  );
};
