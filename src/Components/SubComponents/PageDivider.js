import { ArrowDownwardRounded } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';

const PageDivider = () => {
  return (
    <div className='container-fluid  d-flex flex-column'>
      <Grid className='d-flex justify-content-center align-items-center'>
        <Grid item xs={4} className='d-flex justify-content-center'>
          {''}
        </Grid>
        <Grid item xs={1} className='d-flex justify-content-center'>
          <ArrowDownwardRounded color='secondary' size='xlg' />
        </Grid>
        <Grid item xs={4} className=' d-flex justify-content-center'>
          {''}
        </Grid>
      </Grid>
    </div>
  );
};

export default PageDivider;
