import React, { useEffect, useState, useContext } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
// Admin

// import ProfilePage from '../pages/profilepage/Profilepage';
// import AdminPage from '../pages/adminpage/AdminPage';

// admin v2

import EmployeeDashboard from '../pages/adminpage/pages/EmployeeDashboard';

import ProfilePage from '../pages/adminpage/pages/ProfilePage';

// import formpage from '../pages/formpages/formpage';
import LoginPage2 from '../pages/loginpage/LoginPage2';
import Address from '../pages/formpages/personalformpages/Address';
import BasicInformation1 from '../pages/formpages/personalformpages/BasicInformation1';
import BasicInformation2 from '../pages/formpages/personalformpages/BasicInformation2';
import DesignationInformation from '../pages/formpages/personalformpages/DesignationInformation';
import DocumentalInformation from '../pages/formpages/personalformpages/DocumentalInformation';
import LanguageInformation from '../pages/formpages/personalformpages/LanguageInformation';
import PersonalPage from '../pages/secondpage/personalpage';

import HealthPage from '../pages/secondpage/healthpage';
import HealthInformation from '../pages/formpages/healthformpages/HealthInformation';
import FamilyInformation from '../pages/formpages/healthformpages/FamilyInformation';
import OtherPage from '../pages/secondpage/otherpage';
import OtherInformation from '../pages/formpages/otherformpages/OtherInformation';
import Uploads from '../pages/formpages/otherformpages/Uploads';

import SchoolAndWorkPage from '../pages/secondpage/schoolandworkpage';
import AcademicInformation from '../pages/formpages/workformpages/AcademicInformation';
import WorkInformation from '../pages/formpages/workformpages/WorkInformation';
import axios from 'axios';
import Payslippage from '../pages/secondpage/Payslippage';
import LoadingGIF from '../assets/img/loading.gif';
import PrivateRoute from './PrivateRoute';
import UserContext from '../context/userContext';
import ResetPasswordPage from '../pages/loginpage/reset-password-page/ResetPasswordPage';
import { OPLoader } from '../util/LoaderUtil';
import OnboardingPage from '../pages/secondpage/OnboardingPage';
import FwcHomePage from '../pages/homepage/FwcHomePage';

const adminRoutes = ['admin', 'profile', 'profilepage'];

const Routes = () => {
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { checkLogin, setLoginState } = useContext(UserContext);
  useEffect(() => {
    const _checkLogin = async () => {
      try {
        setIsLoading(true);
        checkLogin();
        const res = await axios.get('/api/auth/validate-token').then();
        // console.log(res.data.role);
        const path = location.pathname.split('/')[1];
        // console.log(path);
        setLoginState(true);
        // console.log(location.pathname);
        if (res.data.role === 'admin') {
          if (location.pathname === '/') history.push('/admin');
          else if (adminRoutes.includes(path)) history.push(location.pathname);
          else history.push('/404');
        } else if (res.data.role === 'sub-admin') {
          if (location.pathname === '/') history.push('/admin');
          else if (adminRoutes.includes(path)) history.push(location.pathname);
          else history.push('/404');
        } else {
          if (!adminRoutes.includes(path)) history.push(location.pathname);
          else history.push('/404');
        }
      } catch (error) {
        history.push('/login');
        setLoginState(false);
      } finally {
        setIsLoading(false);
      }
    };

    _checkLogin();
    // eslint-disable-next-line
  }, []);
  return isLoading ? (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 100,
          backgroundColor: 'rgba(0,0,0,0.9)',
          width: '100vw',
          height: '100vh',
        }}></div>
      <div
        style={{
          display: 'block',
          position: 'absolute',
          zIndex: 1051,
          top: '50%',
          left: '50%',
        }}>
        <div className='col'>
          <div>
            <img alt='Page Loading' src={LoadingGIF}></img>
          </div>
          <span
            className='row text-center'
            style={{
              marginLeft: '5px',
              fontSize: '24px',
              color: '#f8f8f8',
            }}>
            Loading ...
          </span>
        </div>
      </div>
    </div>
  ) : (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className='switch-wrapper'>
      <PrivateRoute exact path='/' component={FwcHomePage} />
      <Route exact path='/login' component={LoginPage2} />
      <PrivateRoute
        exact
        path='/reset-password'
        component={ResetPasswordPage}
      />

      <PrivateRoute exact path='/profilepage/:id' component={ProfilePage} />
      <PrivateRoute exact path='/admin' component={EmployeeDashboard} />
      <PrivateRoute exact path='/onboarding' component={OnboardingPage} />

      <PrivateRoute exact path='/payslip' component={Payslippage} />
      <PrivateRoute exact path='/personal' component={PersonalPage} />
      <PrivateRoute exact path='/information/address' component={Address} />
      <PrivateRoute
        exact
        path='/information/basicInformation-1'
        component={BasicInformation1}
      />
      <PrivateRoute
        exact
        path='/information/basicInformation-2'
        component={BasicInformation2}
      />
      <PrivateRoute
        exact
        path='/information/designationInformation'
        component={DesignationInformation}
      />
      <PrivateRoute
        exact
        path='/information/documentalInformation'
        component={DocumentalInformation}
      />
      <PrivateRoute
        exact
        path='/information/languageInformation'
        component={LanguageInformation}
      />

      <PrivateRoute exact path='/work' component={SchoolAndWorkPage} />
      <PrivateRoute
        exact
        path='/information/academicInformation'
        component={AcademicInformation}
      />
      <PrivateRoute
        exact
        path='/information/workInformation'
        component={WorkInformation}
      />

      <PrivateRoute exact path='/health' component={HealthPage} />
      <PrivateRoute
        exact
        path='/information/healthInformation'
        component={HealthInformation}
      />
      <PrivateRoute
        exact
        path='/information/familyInformation'
        component={FamilyInformation}
      />

      <PrivateRoute exact path='/other' component={OtherPage} />
      <PrivateRoute
        exact
        path='/information/otherInformation'
        component={OtherInformation}
      />
      <PrivateRoute exact path='/information/uploads' component={Uploads} />

      <Route path='*' component={NotFound} />
    </AnimatedSwitch>
  );
};
const NotFound = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [shouldLogin, setShouldLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const _checkLogin = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('/api/auth/validate-token').then();
        // console.log(res.data.role);

        if (res.data.role === 'admin') {
          setIsAdmin(true);
        } else if (res.data.role === 'sub-admin') {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        setShouldLogin(true);
      } finally {
        setIsLoading(false);
      }
    };

    _checkLogin();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <OPLoader isLoading={isLoading} />
      <section class='page_404'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12 '>
              <div class='col-sm-10 col-sm-offset-1  text-center'>
                <div class='four_zero_four_bg'>
                  <h1 class='text-center '>404</h1>
                </div>

                <div class='contant_box_404'>
                  <h3 class='h2'>Look like you're lost</h3>

                  <p>The page you are looking for not avaible!</p>

                  <div
                    style={{
                      cursor: 'pointer',
                    }}
                    href='/'
                    class='link_404'
                    onClick={() => {
                      if (shouldLogin) history.push('/login');
                      if (isAdmin) history.push('/admin');
                      else history.push('/');
                    }}>
                    Go to Home
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Routes;
