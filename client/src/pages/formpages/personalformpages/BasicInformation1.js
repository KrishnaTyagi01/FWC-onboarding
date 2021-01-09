import React, { useState, useEffect } from 'react';
import {
  Container,
  HeroContainer,
  MainHeader,
  //  MainPara, CardHeader, CardPara
} from '../formpage.styles.js';
import ImageUploading from 'react-images-uploading';
import FormPageComponent from '../../../components/form/FormPageComponent';
import axios from 'axios';
import OPBreadCrumb from '../../../components/form/OPBreadCrumb.js';
import { OPLoader } from '../../../util/LoaderUtil.js';
import { config } from '../../../util/RequestUtil';
// eslint-disable-next-line
import { uploadDocument } from '../../../util/UploadFile.js';
import FwcHeader from '../../../components/header/FwcHeader.js';

const BasicInformation1 = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    empNo: '',
    custName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    panFirstName: '',
    panMiddleName: '',
    panLastName: '',
    fFirstName: '',
    fMiddleName: '',
    fLastName: '',
    upload: '',
    photo: '',
  });
  // eslint-disable-next-line
  const {
    // eslint-disable-next-line
    companyName,
    empNo,
    custName,
    firstName,
    middleName,
    lastName,
    panFirstName,
    panMiddleName,
    panLastName,
    fFirstName,
    fMiddleName,
    fLastName,
  } = formData;
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onImageAdd = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(
        '/api/employee?select=companyName,empNo,custName,firstName,middleName,lastName,panFirstName,panMiddleName,panLastName,fFirstName,fMiddleName,fLastName,upload,photo',
        config
      );

      const { data } = result.data;
      console.log(data);
      setFormData({ ...data });
      if (data && data.photo && data.photo !== '')
        setImages([
          {
            data_url: result.data.data.photo,
            file: { name: 'photo.jpg' },
          },
        ]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateBasicInformation = async ({
    companyName,
    empNo,
    custName,
    firstName,
    middleName,
    lastName,
    panFirstName,
    panMiddleName,
    panLastName,
    fFirstName,
    fMiddleName,
    fLastName,
    photo,
    upload,
  }) => {
    let postParams = {};
    const formFieldData = {
      companyName,
      empNo,
      custName,
      firstName,
      middleName,
      lastName,
      panFirstName,
      panMiddleName,
      panLastName,
      fFirstName,
      fMiddleName,
      fLastName,
      upload,
      photo,
      TBasicInformation1: true,
    };
    if (images.length !== 0)
      postParams = {
        ...formFieldData,
        photo: images[0]['data_url'],
      };
    else postParams = { ...formFieldData, photo: '' };
    try {
      setIsLoading(true);
      const body = JSON.stringify({
        postParams,
      });

      await axios.post('/api/employee', body, config);
      history.push('/information/basicInformation-2');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateBasicInformation(formData);
  };

  return (
    <Container>
        <FwcHeader pathname='/personal' />

      <HeroContainer className='box d-flex align-items-center justify-content-center'>
        <MainHeader className='text-center'>Personal Information</MainHeader>
      </HeroContainer>
      <div className=''>
        <FormPageComponent>
          <div className='container-fluid mt-5'>
            {/* <h2>Current Address</h2> */}
            <OPBreadCrumb
              activeIndex={0}
              crumbs={[
                {
                  link: '/information/basicInformation-1',
                  label: 'Basic Info - 1',
                },
                {
                  link: '/information/basicInformation-2',
                  label: 'Basic Info - 2',
                },
                {
                  link: '/information/designationInformation',
                  label: 'Designation',
                },
                {
                  link: '/information/documentalInformation',
                  label: 'Documental',
                },
                {
                  link: '/information/address',
                  label: 'Address',
                },
                {
                  link: '/information/languageInformation',
                  label: 'Language',
                },
              ]}
            />
            {/* <h2>Current Address</h2> */}
            <hr></hr>
            <OPLoader isLoading={isLoading} />
            <form onSubmit={handleSubmit} className='mt-2 text-right'>
              {/* <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}></span> Company Name
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='companyName'
                    placeholder='Future World'
                    name='companyName'
                    value={companyName || ''}
                    // onChange={(e) => handleChange(e)}
                    disabled
                  />
                </div>
              </div> */}
              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}></span> FWID
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='empNo'
                    placeholder=''
                    name='empNo'
                    value={empNo || ''}
                    // onChange={(e) => handleChange(e)}
                    disabled
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Customer Name
                </label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className='form-control'
                    id='custName'
                    placeholder='Future World'
                    name='custName'
                    value={custName || ''}
                    // onChange={(e) => handleChange(e)}
                    disabled
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 form-label'>
                  <span style={{ color: 'red' }}>*</span> Name In Full
                </label>
                <div className='col-sm-3'>
                  <input
                    placeholder='First Name'
                    type='text'
                    className='form-control'
                    id='firstName'
                    name='firstName'
                    value={firstName || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className='col-sm-3'>
                  <input
                    placeholder='Middle Name'
                    type='text'
                    className='form-control'
                    id='middleName'
                    name='middleName'
                    value={middleName || ''}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='col-sm-3'>
                  <input
                    placeholder='Last Name'
                    type='text'
                    className='form-control'
                    id='lastName'
                    name='lastName'
                    value={lastName || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 form-label'>
                  <span style={{ color: 'red' }}>*</span> Name (As In PAN)
                </label>
                <div className='col-sm-3'>
                  <input
                    placeholder='First Name'
                    type='text'
                    className='form-control'
                    id='panFirstName'
                    name='panFirstName'
                    value={panFirstName || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className='col-sm-3'>
                  <input
                    placeholder='Middle Name'
                    type='text'
                    className='form-control'
                    id='panMiddleName'
                    name='panMiddleName'
                    value={panMiddleName || ''}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='col-sm-3'>
                  <input
                    placeholder='Last Name'
                    type='text'
                    className='form-control'
                    id='panLastName'
                    name='panLastName'
                    value={panLastName || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className='form-group row p-2'>
                <label className='col-sm-3 form-label'>
                  <span style={{ color: 'red' }}>*</span> Father Name
                </label>
                <div className='col-sm-3'>
                  <input
                    placeholder='First Name'
                    type='text'
                    className='form-control'
                    id='fFirstName'
                    name='fFirstName'
                    value={fFirstName || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className='col-sm-3'>
                  <input
                    placeholder='Middle Name'
                    type='text'
                    className='form-control'
                    id='fMiddleName'
                    name='fMiddleName'
                    value={fMiddleName || ''}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='col-sm-3'>
                  <input
                    placeholder='Last Name'
                    type='text'
                    className='form-control'
                    id='fLastName'
                    name='fLastName'
                    value={fLastName || ''}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </div>
              <div className='form-group row p-2'>
                <label className='col-sm-3 col-form-label'>
                  <span style={{ color: 'red' }}>*</span> Passport Sized Photo
                  (Max File Size 50KB)
                </label>
                <div className='col-sm-9'>
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onImageAdd}
                    maxNumber={maxNumber}
                    dataURLKey='data_url'
                    maxFileSize={50000}>
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      <div className='upload__image-wrapper'>
                        {images.length === 0 ? (
                          <div
                            className='btn selected-crumb'
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={async () => {
                              onImageUpload();
                            }}
                            {...dragProps}>
                            Click or Drop here
                          </div>
                        ) : (
                            <div />
                          )}
                        &nbsp;
                        {imageList.map((image, index) => (
                          <div key={index} className='row ml-5'>
                            <img src={image['data_url']} alt='' width='100' />
                            <div className='ml-5 col'>
                              <div className='row mb-5'>
                                <div
                                  className='btn selected-crumb'
                                  onClick={() => onImageUpdate(index)}>
                                  Update
                                </div>
                              </div>
                              <div className='row'>
                                <div
                                  className='btn selected-crumb'
                                  onClick={() => onImageRemove(index)}>
                                  Remove
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
                </div>
              </div>

              <div className='form-group row p-2 d-flex justify-content-center mt-4 mb-5'>
                <div className='col-sm-12'>
                  <button
                    type='submit'
                    className='btn selected-crumb submit-button crumb-item w-100 font-weight-bold'>
                    <i className='far fa-check-circle'></i> Save and Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </FormPageComponent>
      </div>
    </Container>
  );
};

export default BasicInformation1;
