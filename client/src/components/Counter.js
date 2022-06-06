import React from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, Box, Container, Typography} from '@mui/material';
function Counter () {
  return (
    <section className='section counter'>
      <Container>
        <Fade bottom>
          <Grid container justifyContent="center" >
            <Grid item sm={6} md={6} lg={3}>
              <div
                className='counter-item text-center mb-5 mb-lg-0 '
              >
                <Typography variant='h3' className='mb-0'>
                  <span className='counter-stat '>0</span> +
                </Typography>
                <Typography variant='p' className='text-muted'>
                  New Ge'ez Learners
                </Typography>
              </div>
            </Grid>

            <Grid item sm={6} md={6} lg={3}>
              <div
                className='counter-item text-center mb-5 mb-lg-0 '
              >
                <Typography variant='h3' className='mb-0'>
                  <span className='counter-stat '>0</span>
                </Typography>
                <Typography variant='p' className='text-muted'>
                  Yeneta Student
                </Typography>
              </div>
            </Grid>

            <Grid item sm={6} md={6} lg={3}>
              <div
                className='counter-item text-center mb-5 mb-lg-0 '
              >
                <Typography variant='h3' className='mb-0'>
                  <span className='counter-stat '>5</span>
                </Typography>
                <Typography variant='p' className='text-muted'>
                  Trainer
                </Typography>
              </div>
            </Grid>

            <Grid item sm={6} md={6} lg={3}>
              <div
                className='counter-item text-center mb-5 mb-lg-0 '
              >
                <Typography variant='h3' className='mb-0'>
                  <span className='counter-stat '>100</span>
                </Typography>
                <Typography variant='p' className='text-muted'>
                  Project Completed
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </section>
  )
}

export default Counter
