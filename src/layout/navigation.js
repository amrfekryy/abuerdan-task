import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import abuerdan from '../abuerdan.png'
import { navigate } from "@reach/router"


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navigation() {

  const [ title, setTitle ] = React.useState('Dashboard')

  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={()=> {navigate('/notifications'); setTitle('Notifications')}}>
        <IconButton color="inherit">
          <Badge badgeContent={7} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={()=> {navigate('/messages'); setTitle('Messages')}}>
        <IconButton color="inherit">
          <Badge badgeContent={5} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem onClick={()=> {navigate('/dashboard'); setTitle('Dashboard')}}>
        <IconButton color="inherit">
          <DashboardIcon />
        </IconButton>
        <p>Dashboard</p>
      </MenuItem>

      <MenuItem onClick={()=> {navigate('/profile'); setTitle('Profile')}}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <img src={abuerdan} alt="logo" height="40" style={{marginRight: '1em'}}/>
          
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          
          <div className={classes.grow} />
          
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit" onClick={()=> {navigate('/notifications'); setTitle('Notifications');}}>
              <Badge badgeContent={7} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
            <IconButton color="inherit" onClick={()=> {navigate('/messages'); setTitle('Messages')}}>
              <Badge badgeContent={5} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            
            <IconButton color="inherit" onClick={()=> {navigate('/dashboard'); setTitle('Dashboard')}}>
              <DashboardIcon />
            </IconButton>
            
            <IconButton color="inherit" onClick={()=> {navigate('/profile'); setTitle('Profile')}}>
              <AccountCircle />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
