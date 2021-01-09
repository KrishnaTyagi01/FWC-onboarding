import React, { useState, useContext } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { Modal } from 'antd';
// import bcrypt from 'bcryptjs';
import { a, useHistory } from 'react-router-dom';
// import './loginStyle.css';
import { HOLDER } from './LoginPage2.styles';
import LOGO from '../../assets/img/FWC - High Res - Wide - Transparent.png';
import { toast } from '../../util/ToastUtil';
import UserContext from '../../context/userContext';

export const LoginPage2 = () => {
  const history = useHistory();
  const { setLoginState } = useContext(UserContext);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // const [success, setSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const onFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    setError(false);

    try {
      let pass = jwt.sign(password, process.env.REACT_APP_PASSWORD_SECRET);

      let loginResult = await axios.post('/api/auth/login', {
        password: pass,
        email,
      });

      if (loginResult.data.success) {
        setIsLoading(false);
        setError(false);
        setLoginState(true);
        if (
          loginResult.data.role === 'admin' ||
          loginResult.data.role === 'sub-admin'
        ) {
          history.push('/admin');
        } else {
          history.push('/');
        }
      }
    } catch (err) {
      setIsLoading(false);
      setLoginState(false);
      setError(true);
      toast('Invalid Credentials');
    }
  };

  return (
    <HOLDER>
      <body className='background-here-login'>
        <nav className='.navBAAR'>
          <div className='heading'>
            <h4>
              <img src={LOGO} alt='FWC Logo' height='50px' />
            </h4>
          </div>
        </nav>
        <main className='main-Login'>
          <div className='card'>
            <div className='card-left'>
              <h3>Welcome to</h3>
              <h2 className='cb gutterBottom'>FWC</h2>
              <p className='small-text'>
                fwc is an established IT consultancy services company which is
                powered by a team of seasoned professionals and driven by its
                proven track record in providing consultants with experience in
                some of the most advanced technologies. Our talisman is our pool
                of IT consultants backed by a portfolio which includes
                assignments with Fortune 500 companies and other blue chip
                corporations.
              </p>
              <div className='icon-text'>
                <i className='material-icons'>library_books</i>
                <span className='small-text'>
                  {' '}
                  <a
                    href='http://www.futureworldconsultancy.com/'
                    className='unchange'>
                    Resources
                  </a>
                </span>
                <i className='material-icons'>support</i>
                <span className='small-text'>
                  {' '}
                  <a
                    href='http://www.futureworldconsultancy.com/'
                    className='unchange'>
                    Support{' '}
                  </a>
                </span>{' '}
              </div>
            </div>
            <div className='card-right'>
              <form action='' className='form' onSubmit={onFormSubmit}>
                <div className='input-icons'>
                  <label className='input-label' htmlFor='username'>
                    Username
                  </label>
                  <br />
                  <i className='material-icons icon'>person</i>
                  <input
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    className='input-field'
                    type='text'
                    placeholder='Enter Your Email'
                  />
                </div>
                <div className='input-icons'>
                  <label className='input-label' htmlFor='password'>
                    Password
                  </label>
                  <br />
                  <i className='material-icons icon'>lock</i>
                  <input
                    className='input-field'
                    placeholder='Enter Your Password'
                    type='password'
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>
                <input
                  className='btn-primary gutterBottom'
                  type='submit'
                  value={isLoading ? 'Logging you in ... ' : 'Sign In'}
                />
                <a className='link gutterBottom' onClick={showModal}>
                  Forgot your Password?
                </a>
                <a
                  className='link'
                  href='http://www.futureworldconsultancy.com/contact.html'>
                  Contact Us
                </a>
              </form>
            </div>
            <Modal
              title='Forgot password?'
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}>
              Please contact your admin to reset your password. <br />
              You will receive an E-mail with with a temporary password.
            </Modal>
          </div>
        </main>
      </body>
    </HOLDER>
  );
};
export default LoginPage2;
