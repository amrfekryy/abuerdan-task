import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navigation from './navigation'

export default function Layout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="md" style={{ backgroundColor: '#cfe8fc', height: '100vh', marginTop: '3em'}}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}
