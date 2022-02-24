import { Container, Grid } from '@mui/material';
import React from 'react';
import Nav from '../Components/AppBar';
import Hero from '../Components/Hero';

const Header = () => {
  return (
    <div className='vh-100 bg-dark   d-flex flex-column justify-content-center align-items-center '>
      <Nav />
      <Grid
        container
        spacing={3}
        className='d-flex justify-content-start   h-100 align-items-center '
        sx={{ width: 1200 }}>
        <Grid item xs={6}>
          <Hero />
        </Grid>
        <Grid item xs={5}>
          <img src='logo512.png' alt='' />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
