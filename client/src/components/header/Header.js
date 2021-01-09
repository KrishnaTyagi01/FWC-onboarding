import React from 'react';
import { HeaderContainer } from './header.styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/img/FWC - High Res - Wide - Transparent.png';

function Header({ pathname }) {
  const logOut = async () => {
    await axios.get('/api/auth/logout');
  };
  return (
    <HeaderContainer>
      <div>
        <nav className='navbar navbar-expand-lg'>
          <Link className='navbar-brand ml-5' to='/'>
            <img src={logo} alt='' className='img-fluid' width='80px' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'>
              <i className='fas fa-bars'></i>
            </span>
          </button>
          <div
            className='flex justify-content-xl-end justify-content-lg-end justify-content-md-center   mr-5 collapse navbar-collapse'
            id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active mr-3'>
                <Link className='nav-link' to={pathname}>
                  Home <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item mr-3'>
                <Link className='nav-link' to='/onboarding'>
                  Onboarding
                </Link>
              </li>
              <li className='nav-item active mr-3'>
                <Link className='nav-link' to='/reset-password'>
                  Reset Password
                </Link>
              </li>
              <li className='nav-item mr-3'>
                <Link onClick={logOut} className='nav-link' to='/login'>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </HeaderContainer>
  );
}

export default Header;
