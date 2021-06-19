import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  paper: {
    height: 400,
    maxWidth: 400,
    margin: 'auto',
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const cameraIcon = <IconButton color="primary" aria-label="upload picture" component="span">
    <PhotoCamera />
  </IconButton>


  return (
    <Paper className={classes.paper}>
      <form className={classes.form} noValidate autoComplete="off">
        <Badge 
          badgeContent={cameraIcon} 
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
        <Avatar 
          style={{
            margin: "10px",
            width: "100px",
            height: "100px",
          }} 
          />
          </Badge>

        <TextField id="standard-basic" label="First Name" />
        <TextField id="standard-basic" label="Last Name" />
    
        <Button variant="outlined" color="primary">
          Save
        </Button>
      </form>
    </Paper>
  );
}


