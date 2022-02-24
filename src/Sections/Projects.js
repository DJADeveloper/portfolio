import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Card, Grid } from '@mui/material';
import ProjectCard from '../Components/SubComponents/ProjectCard';
import ProjectContainer from '../Components/SubComponents/ProjectContainer';

const Projects = () => {
  return (
    <Container
      sx={{}}
      className=' d-flex justify-content-center align-items-center mt-5 vh-100  '>
      <Grid container spacing={3} className='d-flex justify-content-center'>
        <Grid item>
          <Typography
            variant='h2'
            className='text-start'
            color='white'
            sx={{ mb: 3 }}>
            Projects
          </Typography>
        </Grid>
        <Grid item className='  container-fluid'>
          <ProjectContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
