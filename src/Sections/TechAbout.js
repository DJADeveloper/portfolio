import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import '../../src/App.css';
import { Code } from '@mui/icons-material';

const Tech_About = () => {
  return (
    <Container className='vh-100 bg-dark d-flex '>
      <Container maxWidth='xs d-flex flex-column align-items-center justify-content-center w-75'>
        <Typography variant='h2' color='white' className='text-start mb-2'>
          Technologies
        </Typography>
        <Typography
          variant='body'
          color='secondary'
          className='text-center d-flex'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          ratione dolores ab accusamus.
        </Typography>
      </Container>
      <Container className='d-flex flex-column justify-content-center  '>
        <Container className='mb-4'>
          <Grid container className='  d-flex  ' spacing={3}>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center bg-gradient'>
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center py-4'>
                  {''}
                </Typography>
              </Container>
            </Grid>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <img
                  src='https://img.icons8.com/color/28/000000/html-5--v1.png'
                  className='mx-2'
                />
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center'>
                  HTML5
                </Typography>
              </Container>
            </Grid>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <img
                  src='https://img.icons8.com/color/28/000000/css3.png'
                  className='mx-2'
                />
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center'>
                  CSS3
                </Typography>
              </Container>
            </Grid>

            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center py-4'>
                  {''}
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
        <Container className='mb-4'>
          <Grid container className='mt-3  d-flex ' spacing={3}>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <img
                  src='https://img.icons8.com/color/28/000000/javascript--v1.png'
                  className='mx-2'
                />
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center'>
                  Javascript
                </Typography>
              </Container>
            </Grid>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <img
                  src='https://img.icons8.com/color/28/000000/react-native.png'
                  alt='reactlogo'
                  className='mx-2'
                />
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center'>
                  React
                </Typography>
              </Container>
            </Grid>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <img src='https://img.icons8.com/ios-filled/28/000000/solidity.png' />
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center'>
                  Solidity
                </Typography>
              </Container>
            </Grid>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <img
                  src='https://inceptum-stor.icons8.com/prQ17OiPBXZY/MetaMask_Fox.svg.png'
                  className='metamask'
                />

                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center '>
                  MetaMask
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container className='mt-3  d-flex  ' spacing={3}>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center py-4'>
                  {''}
                </Typography>
              </Container>
            </Grid>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <img src='https://img.icons8.com/ios/28/000000/globe--v2.png' />
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center'>
                  Web3.js
                </Typography>
              </Container>
            </Grid>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <img src='https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/28/000000/external-blockchain-cryptocurrency-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png' />
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center'>
                  Blockchain
                </Typography>
              </Container>
            </Grid>
            <Grid item md={3}>
              <Container className='border bg-gradient py-2 rounded-3 border-dark shadow d-flex flex-column justify-content-start align-items-center'>
                <Typography
                  variant='title'
                  color='white'
                  className='fw-bolder d-flex align-items-center justify-content-center py-4'>
                  {''}
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Container>
  );
};

export default Tech_About;
