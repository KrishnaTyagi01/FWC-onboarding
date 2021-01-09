import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { config } from '../../util/RequestUtil';
import axios from 'axios';
import { OPLoader } from '../../util/LoaderUtil';
import { toast } from '../../util/ToastUtil';

const CustomModal = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sectionNames = [
    'TBasicInformation1',
    'TBasicInformation2',
    'TDesignationInformation',
    'TDocumentalInformation',
    'TAddressInformation',
    'TLanguageInformation',
    'TWorkInformation',
    'TAcademicInformation',
    'THealthInformation',
    'TFamilyInformation',
    'TOtherInformation',
    'TUploadInformation',
  ];

  const [isFormDisabled, setIsFormDisabled] = useState(false);

  useEffect(() => {
    const fetchValidity = async () => {
      try {
        const result = await axios.get(
          '/api/employee?select=isFormComplete',
          config
        );
        if (result.data.data.isFormComplete) setIsFormDisabled(true);
        console.log('Is form compelte', result.data.data.isFormComplete);
      } catch (e) {}
    };
    fetchValidity();
  }, []);

  return (
    <>
      <OPLoader isLoading={isLoading} />
      <div
        style={{
          // width: 610,
          display: isFormDisabled ? 'none' : undefined,
        }}>
        <Button
          variant='primary'
          onClick={async () => {
            setIsLoading(true);
            const result = await axios.get(
              '/api/employee?select=' + sectionNames.join(','),
              config
            );
            setIsLoading(false);
            const { data } = result.data;
            let count = 0;
            for (const sectionName of sectionNames) {
              if (data[sectionName]) count++;
            }
            if (count === sectionNames.length) {
              handleShow();
            } else {
              toast('Please complete filling your form');
            }
          }}
          className='submit-button w-100 font-weight-bold'
          style={{ backgroundColor: '#0d3c61', border: 'none' }}>
          Submit Application
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Submit?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to submit application?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            No
          </Button>
          <Button
            variant='primary'
            onClick={async () => {
              const body = JSON.stringify({
                postParams: {
                  isFormComplete: true,
                },
              });
              setIsLoading(true);
              await axios.post('/api/employee', body, config);
              setIsLoading(false);
              handleClose();
            }}
            className='font-weight-bold'
            style={{ backgroundColor: '#296284', border: 'none' }}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
