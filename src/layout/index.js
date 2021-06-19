import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navigation from './navigation'

export default function Layout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="md" 
        style={{ marginTop: '3em' }}
      >
        {props.children}
      </Container>
    </React.Fragment>
  );
}
