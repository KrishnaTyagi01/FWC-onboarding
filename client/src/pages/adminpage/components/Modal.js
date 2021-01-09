import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Axios from 'axios';
import { toast } from '../../../util/ToastUtil';
import { EmployeeContext } from '../context/employeeList';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };
  const data = useContext(EmployeeContext);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p id='simple-modal-title' style={{ fontSize: '20px' }}>
        {' '}
        Are you sure you want to delete {props.name}?{' '}
      </p>
      <p id='simple-modal-description'>
        <Button
          style={{ backgroundColor: 'red', color: 'white' }}
          onClick={async (e) => {
            console.log(props.id);
            try {
              await Axios.delete(`/api/admin/employee/${props.id}`);
              toast('Employee Deleted ');
            } catch (error) {
              toast('Not Allowed');
            }
            await data.getEmployeeList();
            handleClose();
          }}>
          {' '}
          Delete{' '}
        </Button>
      </p>
      <SimpleModal />
    </div>
  );

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'>
      {body}
    </Modal>
  );
}
