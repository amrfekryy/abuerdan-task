import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '2rem 0'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid({temprature={}, humidity={}}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper 
            className={classes.paper}
            style={{backgroundColor: '#FBDCE2'}}
          >{`Maximum Temprature is ${temprature.max.value} (F) at ${temprature.max.time}`}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper 
            className={classes.paper}
            style={{backgroundColor: '#FBDCE2'}}
          >{`Minimum Temprature is ${temprature.min.value} (F) at ${temprature.min.time}`}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper 
            className={classes.paper}
            style={{backgroundColor: '#D2E8F7'}}
          >{`Maximum Humidity is ${humidity.max.value} at ${humidity.max.time}`}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper 
            className={classes.paper}
            style={{backgroundColor: '#D2E8F7'}}
          >{`Minimum Humidity is ${humidity.min.value} at ${humidity.min.time}`}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
