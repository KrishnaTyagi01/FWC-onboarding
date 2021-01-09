import React, { Fragment, useContext } from 'react';
import Routes from './routing/Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import UserState from './context/userState';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { SubAdminContextProvider } from './pages/adminpage/context/SubAdminContext';
import { EmployeeStateProvider } from './pages/adminpage/context/employeeList';
import { ListingContextProvider } from './pages/adminpage/context/ListingContext';
import { LoadingContext } from './pages/adminpage/context/loaderContext';
import OPLoader from './pages/adminpage/components/Loader';
import HomeState from './context/home-page/homeState';
function App() {
  const { open, setOpen } = useContext(LoadingContext);
  return (
    <>
      <OPLoader isLoading={open} />
      <SubAdminContextProvider>
        <EmployeeStateProvider>
          <ListingContextProvider>
            <UserState>
              <HomeState>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Router>
                    <Fragment>
                      <Switch>
                        <Route component={Routes} />
                      </Switch>
                    </Fragment>
                  </Router>
                </ThemeProvider>
              </HomeState>
            </UserState>
          </ListingContextProvider>
        </EmployeeStateProvider>
      </SubAdminContextProvider>
    </>
  );
}

export default App;
