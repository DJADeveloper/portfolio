import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Email,
  FacebookTwoTone,
  GitHub,
  Instagram,
  Phone,
} from '@mui/icons-material';
import { Container } from '@mui/material';

const Footer = () => {
  return (
    <Container className='bg-dark p-5'>
      <Container className='d-flex justify-content-around'>
        <Typography variant='body2' color='secondary'>
          <Email /> Email: Darryladams.Developer@gmail.com
        </Typography>
        <Typography variant='body2' color='secondary'>
          <Phone /> Phone: (813) 528 -6024
        </Typography>
        <div className=' Social '>
          <GitHub color={'secondary'} className='mx-2' />
          <FacebookTwoTone color='primary' className='mx-2' />
          <Instagram className='text-warning mx-2 ' />
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
