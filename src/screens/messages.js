import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import ReplyIcon from '@material-ui/icons/Reply';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 360,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Notifications() {
  const count = 5
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {Array(count).fill(
        <div>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Message Title"
              secondary="Message Content"
              />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <ReplyIcon />
              </IconButton>
            </ListItemSecondaryAction>            
          </ListItem>
          <Divider light />
        </div>
      )}
    </List>
  );
}
