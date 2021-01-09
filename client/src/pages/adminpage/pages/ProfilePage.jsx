import React, { useState, useContext, useEffect } from 'react';
import clsx from 'clsx';
import LOGO from '../../../assets/img/FWC - Low Res - Square - Transparent.png';
import WHITELOGO from '../../../assets/img/logo-white.png';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import userContext from '../../../context/userContext';
import Axios from 'axios';
import {
  Container,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  IconButton,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PeopleIcon from '@material-ui/icons/People';
import Profile from './Profile';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  subhead: {
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '150%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'white',

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },

  heading: {
    fontFamily: 'Coolvetica',
    fontStyle: 400,
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '160%',
    marginBottom: '9px',
    marginLeft: '97px',
    letterSpacing: '0.15px',
  },

  admin: {
    fontFamily: 'Roboto',
    // fontStyle: normal,
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '160%',
    color: '#0D3C61',
  },

  itemActive: {
    background: '#0D3C61',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '157%',
    letterSpacing: '0.1px',
    color: 'white',
    '&:hover': {
      color: '#000',
    },
  },
  iconActive: {
    color: '#FFF',
    '&:hover': {
      color: '#000',
    },
  },

  signout: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0.4px',
    marginTop: 'auto',
    width: '100%',
    textAlign: 'center',
    // textTransform: uppercase,
    color: 'rgba(0, 0, 0, 0.87)',
  },
}));

export default function ProfilePage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const context = useContext(userContext);
  const [info, setInfo] = React.useState({ role: 'admin', user: 'Admin' });
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const info = await Axios.get('api/auth/validate-token');
    console.log(info.data);
    setInfo({
      role: info.data.role,
      user: info.data.user,
    });
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [redirectToHome, setRedirectToHome] = useState(false);

  const clickAdmin = () => {
    setRedirectToHome(true);
  };

  const redirect = () => {
    if (redirectToHome) {
      return <Redirect to='/admin' />;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            // display={window.innerWidth>'800px' ? 'none': ''}
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>

          <img src={WHITELOGO} height={24} style={{ margin: ' 0 20px' }}></img>
          <Typography className={classes.subhead} noWrap display='block'>
            Employee Information
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        // variant='persistent'
        variant={'persistent'}
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'>
        <div className='wrapper'>
          <div className={classes.drawerHeader}>
            <div style={{ width: 240, textAlign: 'center' }}>
              <img src={LOGO} height={'70'}></img>
            </div>

            {
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            }
          </div>
          <Divider />
          <List>
            <ListItem button onClick={clickAdmin}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.admin}>
                  {info.role === 'admin'
                    ? 'Admin'
                    : info.role === 'sub-admin'
                    ? 'Sub-Admin'
                    : 'Admin'}
                </Typography>
                <Typography>{info.user}</Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
            <ListItem button className={classes.itemActive}>
              <ListItemIcon>
                <PeopleIcon className={classes.iconActive} />
              </ListItemIcon>
              <ListItemText primary='Visit Profile' />
            </ListItem>
            {/* <ListItem button>
              <ListItemIcon>
                
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary='Add an Employee' />
            </ListItem> */}
            {/* <ListItem button>
              <ListItemIcon>
                
                <FeaturedPlayListIcon />
              </ListItemIcon>
              <ListItemText primary='Add/View Listing' />
            </ListItem> */}
            {/* ))} */}
          </List>
          {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        </div>
        <Link
          href='#'
          className={classes.signout}
          onClick={() => {
            context.logout();
          }}>
          SIGN OUT
        </Link>
      </Drawer>
      <main
        style={{
          backgroundColor: '#f2f2f2',
          marginTop: '-8px',
          paddingTop: 0,
          // maxHeight: '90vh',
        }}
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <Container style={{ width: '1200', marginTop: 35 }}>
          <div className={classes.toolbar} />
          <Profile />
        </Container>
      </main>
      {redirect()}
    </div>
  );
}
