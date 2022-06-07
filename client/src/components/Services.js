
import React from 'react'
import Fade from 'react-reveal/Fade'


// icons import
import { FcLibrary } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FaBook } from "react-icons/fa";
import { FcEditImage } from "react-icons/fc";
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { FcDonate } from "react-icons/fc";








import { Grid, Box, Container, Typography} from '@mui/material'
function Services () {
  return (
    <section className='section service bg-gray'>
      <Container container justifyContent="center">
        <Grid container justifyContent="center">
            <Grid item sm={12} md={6} lg={6} >
            <Box className='section-title'>
                <Typography variant='h2' className='content-title mb-4'>
                Diffrenet Application of The Ge'ez Language
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Fade>
            <Grid container spacing={2} colomun={12} justifyContent="center">
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <FcEditImage className='w-100 text-color text-lg' />
                <Typography variant='h5' className='mb-4'>
                Anicent Ethiopian Litereture
                </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <FcLibrary className='w-100 text-color text-lg'/>
                <Typography variant='h5' className='mb-4'>
                Anicent Ethiopian Arictecture
                </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <FcViewDetails className='w-100 text-color text-lg'/>
                <Typography variant='h5' className='mb-4'>
                Ge'ez Writting system
                </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <FcAlphabeticalSortingAz className='w-100 text-color text-lg'/>
                <Typography variant='h5' className='mb-4'>
                Ge'ez Scripts.
                </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <FaBook className='w-100 text-color text-lg'/>
                <Typography variant='h5' className='mb-4'>
                Ge'ez Bible
                </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <FcDonate className='w-100 text-color text-lg'/>
                <Typography variant='h5' className='mb-4'>
                Ge'ez Traditions
                </Typography>
                </Box>
              </Grid>
            </Grid>
        </Fade>
        </Container>
    </section>
  )
}

export default Services