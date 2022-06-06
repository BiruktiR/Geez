import React from 'react'
import Fade from 'react-reveal/Fade';
import { Grid, Box, Container, Typography} from '@mui/material';
function Banner ({title}) {
  return (
    <section className='page-title bg-1'>
      <Container>
        <Grid container justifyContent="center">
          <Grid item sm={12} md={6} lg={6} >
          <Box className='section-title'>
              <Typography variant='h2' className='content-title mb-4'>
              {title}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Container>
    </section>
  )
}

export default Banner
