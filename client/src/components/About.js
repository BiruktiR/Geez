import React from 'react';
import home from '../assets/images/logo.jpg';
import Fade from 'react-reveal/Fade';
import { Grid, Box, Container, Typography} from '@mui/material';
// this is about page  

function About () {
  return (
    <section className='about'>
      <Container>
        <Grid container justifyContent="center">
          <Grid item sm={12} md={6} lg={6} >
            <div
              className='about-img mb-5 mb-lg-0'
            >
              <Fade left>
                <img src={home} alt='' className='img-fluid' />
              </Fade>
            </div>
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <div className='about-item pl-3 mt-4 mt-lg-0'>
              <Typography variant='h2' className='mt-3 mb-4 font-secondary'>
                Why do you need to learn Ge'ez?
              </Typography>
                <Typography variant='p' className='mb-4'>
                  It’s an important language for the study of late ancient Christianity and early Islam. 
                  It’s the language of some of the earliest Judeo-Christian writings.
                    Its vocabulary can be found throughout the Quran. 
                    Yet the classical language Ge’ez is little known beyond the Horn of Africa.
                </Typography>
                <Typography variant='p' className='mb-4'>
                  However, the Geʽez script later replaced Epigraphic 
                  South Arabian in the Kingdom of Aksum. Epigraphic South Arabian letters were 
                  used for a few inscriptions into the 8th century BCE, though not any South 
                  Arabian language since Dʿmt. Early inscriptions 
                  in Geʽez and Geʽez script have been dated to as early as the 5th century BC
                  <p>Because Geʽez is no longer spoken in daily life by large communities, 
                    the early pronunciation of some consonants is not completely certain. 
                    Gragg (1997:244) writes "The consonants corresponding to the graphemes ś (Geʽez ሠ) and ṣ́ (Geʽez ፀ) have merged with ሰ and ጸ respectively in the phonological system represented by the traditional pronunciation—and indeed in all modern Ethiopian Semitic. ... There is, however, no evidence either in the tradition or in Ethiopian Semitic 
                    [for] what value these consonants may have had in Geʽez."</p>
                </Typography>
              </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default About
