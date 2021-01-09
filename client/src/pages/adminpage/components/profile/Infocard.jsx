import React, { useContext } from 'react';
import {
  Typography,
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import { Lock, LockOpen } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { UpdateButton, DownloadButton } from './UpdateButton';
import moment from 'moment';
import { EmployeeContext } from '../../context/employeeList';
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles = makeStyles({
  root: {
    border: 'none',
  },
  textPrimary: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '157%',
    letterSpacing: 0.1,
    color: '#000000',
    wordWrap: 'break-word',
  },
  textSecondary: {
    fontSize: 14,
    lineHeight: '157%',
    letterSpacing: 0.1,
    color: '#000000',
    marginBottom: 30,
  },
  textTertiary: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '157%',
    letterSpacing: 0.1,
    color: '#000000',
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
  btnGrp: {
    background: '#0D3C61',

    margin: '5px 0px',
    color: 'white',
    width: '100%',
  },
});

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

    border: '1px solid rgba(0, 0, 0, 0.12)',
    backgroundColor: '#ffffff',
    padding: 16,
  },
}));

const InfoCard = (props) => {
  const { data, setData } = props;
  const userdata = data;
  const classesmain = useStyles1();
  const classes = useStyles();
  const theme = useTheme();
  const context = useContext(EmployeeContext);
  let a = '';
  React.useEffect(() => {
    a = window.location.pathname.split('/')[2].toString();
  }, []);

  return (
    <>
      <Container fixed className={classesmain.root}>
        <img src={userdata?.photo || ''} height='90px' alt='pic' />

        <Card className={classes.root} variant='outlined' align='left'>
          <CardContent>
            <Typography className={classes.textPrimary}>
              {userdata?.FName || ' Loading '}&nbsp;{userdata?.LName || '...'}
            </Typography>
            <Typography
              className={classes.textSecondary}
              variant='h5'
              component='h2'>
               <PhoneIcon style={{marginRight:'10.07px',height:'12px',width:'12px'}}/>
              {userdata?.phoneNumber || ''}
            </Typography>
            <Typography
              className={classes.textSecondary}
              style={{ marginTop: '-30px' }}
              variant='h5'
              component='h2'>
              {userdata?.designation || ''}
            </Typography>
            <Typography className={classes.textTertiary} color='textSecondary'>
              FWD-ID
            </Typography>
            <Typography className={classes.textSecondary} color='textSecondary'>
              {userdata?.empNo || ''}
            </Typography>
            <Typography className={classes.textTertiary} color='textSecondary'>
              Date of joining
            </Typography>
            <Typography className={classes.textSecondary} color='textSecondary'>
              {moment(userdata?.joiningDate || '').format('DD-MM-YYYY')}
            </Typography>
          </CardContent>
          <DownloadButton />
          <ButtonGroup
            className={classes.btnGrp}
            aria-label='outlined primary button group'>
            <Button
              style={{ width: '50%', color: 'white', fontSize: '10px' }}
              onClick={(e) => context.toggleFormComplete(userdata.user)}>
              {userdata?.isFormComplete ? (
                <>
                  <LockOpen fontSize='small' /> OnBoarding
                </>
              ) : (
                <>
                  <Lock fontSize='small' /> OnBoarding
                </>
              )}
            </Button>
            <Button
              onClick={(e) => context.resetPassword(userdata.user)}
              style={{ width: '50%', color: 'white', fontSize: '10px' }}>
              Reset Password
            </Button>
          </ButtonGroup>
          <UpdateButton userData={props.data} setUserData={props.setData} />
        </Card>
      </Container>
      {/* <Container> */}

      {/* </Container> */}
    </>
  );
};

export default InfoCard;
