import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import GroupIcon from '@material-ui/icons/Group';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import SettingsIcon from '@material-ui/icons/Settings';
import * as modules from './modules'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Dashboard() {
  const classes = useStyles()
  const [value, setValue] = React.useState('Analysis')

  const Module = modules[value] || modules['NotImplemented']

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
        // className={classes.root}
      >
        <BottomNavigationAction value="Users" label="Users" icon={<GroupIcon />} />
        <BottomNavigationAction value="Analysis" label="Analysis" icon={<EqualizerIcon />} />
        <BottomNavigationAction value="Activities" label="Latest Activities" icon={<RecentActorsIcon />} />
        <BottomNavigationAction value="Settings" label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
      <Module />
    </>
  );
}

