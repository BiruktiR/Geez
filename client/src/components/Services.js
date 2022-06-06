
import React from 'react'
import { TiDeviceDesktop } from 'react-icons/ti'
import { BsLayers, BsBarChart } from 'react-icons/bs'
import { FaVectorSquare } from 'react-icons/fa'
import { AiFillAndroid } from 'react-icons/ai'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { ImRocket } from 'react-icons/im'
import { GiMechanicGarage } from 'react-icons/gi'
import { GiFarmTractor } from 'react-icons/gi'
import { GiElectricalResistance } from 'react-icons/gi'
import Fade from 'react-reveal/Fade'

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
                <TiDeviceDesktop className='w-100 text-color text-lg' />
                <Typography variant='h5' className='mb-4'>
                Anicent Ethiopian Litereture
                </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <GiElectricalResistance className='w-100 text-color text-lg'/>
                <Typography variant='h5' className='mb-4'>
                Anicent Ethiopian Arictecture
                </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <GiFarmTractor className='w-100 text-color text-lg'/>
                <Typography variant='h5' className='mb-4'>
                Ge'ez Writting system
                </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <ImRocket className='w-100 text-color text-lg'/>
                <Typography variant='h5' className='mb-4'>
                Ge'ez Scripts.
                </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <AiFillAndroid className='w-100 text-color text-lg'/>
                <Typography variant='h5' className='mb-4'>
                Ge'ez Bible
                </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className='card mb-4 p-5 text-center'>
                <GiMechanicGarage className='w-100 text-color text-lg'/>
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