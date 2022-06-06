import React from 'react'
import Fade from 'react-reveal/Fade';
import { Box, Grid, Typography, Button, Container} from '@mui/material';
function Slider () {
  return (
    <>
      <section className='slider'>
        <Container>
          <Grid container justifyContent="center">
            <Grid item sm={12} md={12} lg={9}>
              <Fade>
                <Box 
                  container 
                  justifyContent="center" 
                  sx={{ 
                        color: "red",
                        display: "flex"
                }}
                  >
                  <Typography variant='h4' color="white">
                  መስተምረ ግዕዝ 
                  </Typography>
                  <div></div>
                  <Typography variant='h1'color="white">
                  Learn Ge'ez
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className='mt--4 position-relative slider-cta'>
        <Container className='row align-items-center bg-primary p-2 p-sm-3 rounded'>
          <Grid container justifyContent="center">
            <Grid item sm={12} md={12} lg={8}>
            <Typography variant='p' color="white" className='text-white-25'>
            Geʽez is an ancient Ethiopian Semitic language. The language originates from what is now northern Ethiopia and Eritrea.
                  </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Slider
