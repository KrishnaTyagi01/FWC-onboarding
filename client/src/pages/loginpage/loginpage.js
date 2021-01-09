import React, { useState, useContext } from 'react';

import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/userContext';

import {
  Center,
  LoginHead,
  Heading,
  SubHeading,
  // FormBottom,
  BottomLinks,
} from './loginpage.styles';
import LOGO from '../../assets/img/FWC - High Res - Square - Transparent.png';

const LoginPage = () => {
  const history = useHistory();
  const { setLoginState } = useContext(UserContext);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // const [success, setSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    setError(false);
    try {
      let loginResult = await axios.post('/api/auth/login', {
        password,
        email,
      });

      if (loginResult.data.success) {
        console.log('done');
        setIsLoading(false);
        localStorage.setItem('token', loginResult.data.token);
        setError(false);
        setLoginState(true);
        if (loginResult.data.role === 'admin') {
          history.push('/admin');
        } else {
          history.push('/');
        }
      }
    } catch (err) {
      setIsLoading(false);
      setLoginState(false);
      setError(true);
    }
  };
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <LoginHead>
        <img alt='logo' src={LOGO} />
      </LoginHead>
      <Heading> Sign in to your dashboard</Heading>
      <SubHeading>Enter your email address and password to continue</SubHeading>

      <Center>
        <Form.Group>
          <form>
            <Form.Control
              onChange={(e) => {
                setemail(e.target.value);
              }}
              name='User'
              type='email'
              required
              placeholder='Email Id'
            />
            <br />
            <Form.Control
              type='password'
              placeholder='Password'
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <br />
            <div className='button-wrapper'>
              <button
                type='submit'
                className='submit-button'
                onClick={onFormSubmit}>
                {isLoading ? 'Logging you in ... ' : 'sign in'}
              </button>
            </div>
            <p
              id='inv'
              style={{
                color: 'red',
                width: 400,
                textAlign: 'Center',
                fontWeight: 500,
              }}>
              {error ? 'Invalid Credentials' : ''}
            </p>
          </form>

          {/* <FormBottom>
            <p>
              Click here for{' '}
              <strong>
                <Link to='#!' className='empLogin'>
                  Employee Login
                </Link>
              </strong>
            </p>
            <Link to='#!' className='forgot'>
              {' '}
              Forgot Password?
            </Link>
          </FormBottom> */}
        </Form.Group>

        <BottomLinks>
          <Link to='#!' className='BtmLink'>
            Privacy & Terms
          </Link>
          <Link to='#!' className='BtmLink'>
            Legal
          </Link>
          <Link to='#!' className='BtmLink'>
            Contact Us
          </Link>
        </BottomLinks>
      </Center>
    </div>
  );
};

export default LoginPage;
