import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { FacebookTwoTone, GitHub, Instagram } from '@mui/icons-material';

const About = () => {
  return (
    <div>
      <Container className='vh-100 bg-dark d-flex '>
        <Container maxWidth='xs d-flex flex-column align-items-center justify-content-center'>
          <Typography variant='h2' color='white' className='text-start '>
            About Me
          </Typography>
          <img
            src='assets/HeadShot.png'
            alt='Me'
            className='rounded-circle pictureOfMe mb-3'
          />
          <div className='container-fluid Social mb-1'>
            <GitHub color={'secondary'} className='mx-2' />
            <FacebookTwoTone color='primary' className='mx-2' />
            <Instagram className='text-warning mx-2 ' />
          </div>
          <Typography variant='subtitle1' color='white  '>
            Blockchain Developer
          </Typography>
        </Container>
        <Container className='d-flex flex-column justify-content-center'>
          <Typography variant='body2' color='white' className='mb-3 text-start'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eius
            distinctio at ipsum assumenda. Eligendi alias ex modi quo ullam
            magni repellat distinctio, rem ratione dolorem expedita amet commodi
            tempora quod neque praesentium doloremque nemo nulla. Asperiores,
            nisi similique. Voluptatem nostrum eaque totam repellendus
            reprehenderit molestias est, aliquam illo beatae.
          </Typography>
          <Typography variant='body2' color='white' className='text-start mb-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eius
            distinctio at ipsum assumenda. Eligendi alias ex modi quo ullam
            magni repellat distinctio, rem ratione dolorem expedita amet commodi
            tempora quod neque praesentium doloremque nemo nulla. Asperiores,
            nisi similique. Voluptatem nostrum eaque totam repellendus
            reprehenderit molestias est, aliquam illo beatae.
          </Typography>
          <Grid container className='d-flex'>
            <Grid item md={3} className='bg-warning p-1 rounded me-2'>
              <div className='mx-2 d-flex justify-content-center'>
                <Typography variant='subtitle1' color='white'>
                  2017
                </Typography>
                <Container className='border-top border-2 ms-3 mt-3'></Container>
              </div>
              <Typography color='white'>Started my journey</Typography>
            </Grid>
            <Grid item md={3} className='bg-warning p-1 rounded me-2'>
              <div className='mx-2 d-flex justify-content-center'>
                <Typography variant='subtitle1' color='white'>
                  2019
                </Typography>
                <Container className='border-top border-2 ms-3 mt-3'></Container>
              </div>
              <Typography color='white'>Started my journey</Typography>
            </Grid>
            <Grid item md={3} className='bg-warning p-1 rounded me-2'>
              <div className='mx-2 d-flex justify-content-center'>
                <Typography variant='subtitle1' color='white'>
                  2020
                </Typography>
                <Container className='border-top border-2 ms-3 mt-3'></Container>
              </div>
              <Typography color='white'>Started my journey</Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default About;
