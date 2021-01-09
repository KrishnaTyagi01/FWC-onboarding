import React, { useState, useContext, useEffect } from 'react';
import { SubAdminContext } from '../context/SubAdminContext';
import InfoCard from '../components/profile/Infocard';
import SalaryInfo from '../components/profile/SalaryInfo';
import ContactInfo from '../components/profile/ContactInfo';
import WorkInfo from '../components/profile/WorkInfo';
import AddReportee from '../components/profile/AddReportee';
import TabNav from '../components/profile/Tab';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { EmployeeContext } from '../context/employeeList';
import Documents from '../components/profile/Documents';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#ffffff',
  },
}));

const Profile = () => {
  const classes = useStyles();
  const data = useContext(EmployeeContext);
  const [userData, setUserData] = useState([]);

  // subadmins

  const subAdminData = useContext(SubAdminContext);
  const [subAdmins, setSubAdmins] = useState([]);
  useEffect(() => {
    (async () => {
      console.log();
      setSubAdmins(await subAdminData.getSubAdmins());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      // console.log(await data.getEmployeeList());
      setUserData(
        await data.getSelectedUserData(
          window.location.pathname.split('/')[2].toString()
        )
      );

      console.log(
        await data.getSelectedUserData(
          window.location.pathname.split('/')[2].toString()
        )
      );
    })();
  }, []);

  // const[values, setValues] = useState(userData);

  const [tab, setTab] = useState(0);

  return (
    <>
      <Container className={classes.root} >
        <Grid container spacing={3}>
          <Grid item md={3} sm={12} xs={12}>
            <InfoCard
              data={data.selectedUserData}
              setData={data.setSelectedUserData}
            />
          </Grid>

          <Grid item md={9} sm={12} xs={12}>
            <TabNav tab={tab} state={setTab} />
            {tab == 0 ? (
              <>
                <SalaryInfo
                  data={data.selectedUserData}
                  setData={data.setSelectedUserData}
                />
                <ContactInfo
                  data={data.selectedUserData}
                  setData={data.setSelectedUserData}
                />
                <WorkInfo
                  data={data.selectedUserData}
                  setData={data.setSelectedUserData}
                />
              </>
            ) : tab == 1 ? (
              <Documents />
            ) : tab === 2 ? (
              <AddReportee
                subAdmins={subAdmins}
                addReportee={subAdminData.addReportee}
                employeeId={window.location.pathname?.split('/')[2]?.toString()}
              />
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
