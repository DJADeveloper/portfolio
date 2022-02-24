import { Container, Grid } from '@mui/material';
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectContainer = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item>
          <ProjectCard
            image='assets/Linkedin.png'
            alt='Linkedin'
            projectName='Linkedin Clone'
          />
        </Grid>
        <Grid item className='mt-5'>
          <ProjectCard
            image='assets/TeslaClone.png'
            alt='Tesla'
            projectName='Tesla Clone'
          />
        </Grid>
        <Grid item>
          <ProjectCard
            image='assets/Facebook.png'
            alt='Facebook'
            projectName='Facebook Clone'
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectContainer;
