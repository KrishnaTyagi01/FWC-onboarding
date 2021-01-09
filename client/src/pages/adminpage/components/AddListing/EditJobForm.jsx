import React, { useEffect, useContext } from 'react';
import {
  Container,
  OutlinedInput,
  FormControl,
  InputLabel,
  Button,
  Box,
  Typography,
} from '@material-ui/core';
import { DeleteIcon, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { ListingContext } from '../../context/ListingContext';
import moment from 'moment';
const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    borderRadius: 4,
    // padding: 24,
    height: 601.41,
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  labelSpan: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '175%',
    letterSpacing: 0.15,
    marginLeft: 11,
  },
  innerContainer: {
    borderTop: '2px solid #0D3C61',
    padding: 20,
  },
  savebtn: {
    overflow: 'hidden',
    width: 139,
    height: 40,
    marginRight: 30,
    background: '#42668F',
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    marginBottom: 20,
  },
  dltBtn: {
    overflow: 'hidden',
    width: 139,
    background: '#db2404ea',

    height: 40,
    marginRight: 30,
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    marginBottom: 20,
  },
}));

const EditJobForm = ({ setJob, job, formType, setShowForm }) => {
  const classes = useStyles();
  const context = useContext(ListingContext);
  const emptyData = {
    createdAt: '-',
    deadline: '-',
    experience: '-',
    imageUrl: '-',
    isDeleted: false,
    location: '-',
    longDescription: '-',
    salary: '-',
    shiftType: '-',
    shortDescription: '-',
    title: '-',
    type: '-',
    updatedAt: '-',
    user: '-',
  };
  useEffect(() => {
    if (formType === 'addJob') {
      // data.setSelectedJob(emptyData);
    }
  }, []);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (formType === 'addJob') {
          await context.addNewJob();
          setJob(emptyData);
          setShowForm(false);
        } else {
          console.log('Update job');
          await context.updateJob();
          setShowForm(false);
        }
      }}>
      <Container className={classes.root}>
        <Typography className={classes.labelSpan}>Title</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            required
            type='text'
            value={job?.title}
            onChange={(e) =>
              setJob({
                ...job,
                title: e.target.value,
              })
            }
            variant='outlined'
            placeholder='Job Location'
            id='outlined-adornment-amount4'
            name='outlined-adornment-amount4'
          />
        </FormControl>{' '}
        <Typography className={classes.labelSpan}>Job Type</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            required
            type='text'
            value={job?.type}
            onChange={(e) =>
              setJob({
                ...job,
                type: e.target.value,
              })
            }
            variant='outlined'
            placeholder='Job Location'
            id='outlined-adornment-amount4'
            name='outlined-adornment-amount4'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Shift Type</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            required
            type='text'
            value={job?.shiftType}
            onChange={(e) =>
              setJob({
                ...job,
                shiftType: e.target.value,
              })
            }
            variant='outlined'
            placeholder='Shift Type'
            id='outlined-adornment-amount3'
            name='outlined-adornment-amount3'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Job Location</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            required
            type='text'
            value={job?.location}
            onChange={(e) =>
              setJob({
                ...job,
                location: e.target.value,
              })
            }
            variant='outlined'
            placeholder='Job Location'
            id='outlined-adornment-amount4'
            name='outlined-adornment-amount4'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Created At</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            disabled
            value={
              formType === 'addJob'
                ? job?.createdAt
                : moment(job?.createdAt).format('DD-MM-YYYY')
            }
            onChange={(e) =>
              setJob({
                ...job,
                createdAt: e.target.value,
              })
            }
            variant='outlined'
            placeholder='Create At'
            id='outlined-adornment-amount5'
            name='outlined-adornment-amount5'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Company Image Url</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            required
            type='text'
            value={job?.imageUrl}
            onChange={(e) =>
              setJob({
                ...job,
                imageUrl: e.target.value,
              })
            }
            variant='outlined'
            placeholder='Company Image Url'
            id='outlined-adornment-amount6'
            name='outlined-adornment-amount6'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>CTC offered</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            required
            type='text'
            value={job?.salary}
            onChange={(e) =>
              setJob({
                ...job,
                salary: e.target.value,
              })
            }
            variant='outlined'
            placeholder='CTC offered'
            id='outlined-adornment-amount7'
            name='outlined-adornment-amount7'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Deadline</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            required
            type='text'
            value={job?.deadline}
            onChange={(e) =>
              setJob({
                ...job,
                deadline: e.target.value,
              })
            }
            variant='outlined'
            placeholder='Deadline'
            id='outlined-adornment-amount8'
            name='outlined-adornment-amount8'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>
          Relevent Experience(years)
        </Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            required
            type='text'
            value={job?.experience}
            onChange={(e) =>
              setJob({
                ...job,
                experience: e.target.value,
              })
            }
            variant='outlined'
            placeholder='Relevent Experience(years)'
            id='outlined-adornment-amount9'
            name='outlined-adornment-amount9'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Short Description</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            required
            type='text'
            value={job?.shortDescription}
            onChange={(e) =>
              setJob({
                ...job,
                shortDescription: e.target.value,
              })
            }
            multiline
            rows={3}
            variant='outlined'
            placeholder='Short Description'
            id='outlined-adornment-amount10'
            name='outlined-adornment-amount10'
          />
        </FormControl>
        <Typography className={classes.labelSpan}>Long Description</Typography>
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <OutlinedInput
            required
            type='text'
            multiline
            rows={4}
            variant='outlined'
            placeholder='Long Description'
            id='outlined-adornment-amount11'
            name='outlined-adornment-amount11'
            value={job?.longDescription}
            onChange={(e) =>
              setJob({
                ...job,
                longDescription: e.target.value,
              })
            }
            onClick={(e) => console.log(job.longDescription)}
          />
        </FormControl>
        <Box
          mt={2}
          ml={4}
          mr={0}
          pr={0}
          width={'100%'}
          style={{ marginBottom: '24px' }}
          textAlign='right'>
          {formType === 'addJob' ? (
            <></>
          ) : (
            <Button
              onClick={async () => {
                await context.deleteJob();
                setShowForm(false);
              }}
              variant='contained'
              className={classes.dltBtn}>
              <Delete />
              DELETE JOB
            </Button>
          )}

          <Button
            variant='contained'
            type='submit'
            style={{ marginBottom: '24px' }}
            className={classes.savebtn}>
            {formType === 'addJob' ? ' ADD JOB' : 'UPDATE JOB'}
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default EditJobForm;
