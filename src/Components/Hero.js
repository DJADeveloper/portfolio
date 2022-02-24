import { Button, Container, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
  return (
    <div sx={{ bgColor: 'primary' }} className='container-fluid '>
      <Typography variant='h2' className='text-start' color='white'>
        Hi,
      </Typography>
      <br />
      <Typography variant='h2' className='text-start' color='white'>
        Im Darryl,
      </Typography>
      <br />

      <Typography
        variant='h2'
        className='text-start'
        color='white'
        sx={{ mb: 3 }}>
        Software Developer
      </Typography>
      <div className='d-flex align-items-center'>
        <p className='text-light me-1 '> Front End Developer </p>
        <p className='text-light me-1'>|</p>
        <p className='text-light me-1'> React/React Native </p>
        <p className='text-light me-1'>|</p>
        <p className='text-light'> Blockchain Developer </p>
      </div>

      <Button
        variant='contained'
        size='large'
        className='d-flex '
        sx={{ mt: 3 }}
        color='secondary'>
        Learn More
      </Button>
    </div>
  );
};

export default Hero;
