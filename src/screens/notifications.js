import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 360,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Notifications() {
  const count = 17
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {Array(count).fill(
        <div>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <NotificationsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Notification Content"
              />
          </ListItem>
          <Divider light />
        </div>
      )}
    </List>
  );
}
