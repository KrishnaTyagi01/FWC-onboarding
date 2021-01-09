import React, { Fragment, useState, useContext } from 'react';
import logo from '../../../assets/img/FWC - Low Res - Wide - Transparent.png';
import { OPLoader } from '../../../util/LoaderUtil';
import { toast } from '../../../util/ToastUtil';
import axios from 'axios';
import { config } from '../../../util/RequestUtil';
import UserContext from '../../../context/userContext';

const ResetPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const { logout } = useContext(UserContext);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateFormData = async ({
    currentPassword,
    newPassword,
    confirmNewPassword,
  }) => {
    const body = JSON.stringify({
      currentPassword,
      newPassword,
    });

    if (newPassword === confirmNewPassword) {
      try {
        setIsLoading(true);
        await axios.post('/api/auth/update-password', body, config);
        toast('New Password Set, login again with new password');
        logout();
      } catch (error) {
        toast('Invalid Old Password');
      } finally {
        setIsLoading(false);
      }
    } else {
      toast('New passwords do not match');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateFormData(formData);
  };

  return (
    <Fragment>
      <OPLoader isLoading={isLoading} />
      <div
        style={{ paddingTop: '100px', background: '#0d3c61', height: '100vh' }}>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-md-4 col-md-offset-4'></div>
            <div className='col-md-4 col-md-offset-4 shadow p-3 mb-5 bg-white rounded p-5'>
              <div className='panel panel-default '>
                <div className='panel-body'>
                  <div className='text-center'>
                    <h3>
                      <img
                        src={logo}
                        alt='Future-World'
                        classNameName='img-fluid'
                        width='120px'
                      />
                    </h3>
                    <h2 className='text-center mb-3'>Forgot Password?</h2>
                    <div className='panel-body'>
                      <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                          <div className='input-group'>
                            <span className='input-group-addon'>
                              <i className='glyphicon glyphicon-envelope color-blue'></i>
                            </span>
                            <input
                              id='currentPassword'
                              name='currentPassword'
                              placeholder='Old Password'
                              className='form-control'
                              type='password'
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='form-group'>
                          <div className='input-group'>
                            <span className='input-group-addon'>
                              <i className='glyphicon glyphicon-envelope color-blue'></i>
                            </span>
                            <input
                              id='newPassword'
                              name='newPassword'
                              placeholder='New Password'
                              className='form-control'
                              type='password'
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='form-group'>
                          <div className='input-group'>
                            <span className='input-group-addon'>
                              <i className='glyphicon glyphicon-envelope color-blue'></i>
                            </span>
                            <input
                              id='confirmNewPassword'
                              name='confirmNewPassword'
                              placeholder='Confirm New Password'
                              className='form-control'
                              type='password'
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='form-group'>
                          <input
                            name='recover-submit'
                            className='btn btn-lg btn-primary btn-block'
                            value='Reset Password'
                            type='submit'
                            style={{
                              background: '#0d3c61',
                            }}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-md-offset-4'></div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPasswordPage;
