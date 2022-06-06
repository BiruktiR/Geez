import React from 'react';
import { Grid, Box, Container, Typography} from '@mui/material';

import blog1 from '../assets/images/img2.jpg';
import blog3 from '../assets/images/img3.jpg';
import blog2 from '../assets/images/img4.jpg';
import Fade from 'react-reveal/Fade';
function Blog () {
  return (
    <section className='section bg-gray blog-latest'>
      <Container>
        <Grid container justifyContent="center">
          <Grid item sm={12} md={6} lg={6} >
          <Box className='section-title'>
              <Typography variant='h2' className='content-title mb-4'>
              About Ge'ez
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} colomun={12}>
          <Grid item sm={12} md={6} lg={4} className='mb-4 mb-lg-0'>
            <Fade bottom>
                <Box
                  className='shadow-sm-2 blog-item bg-white rounded'
                >
                  <img
                    src={blog2}
                    className='img-fluid rounded-top'
                    alt='...'
                  />
                  <Box className='p-4'>
                    <Box className=' w-100 justify-content-between'>
                      <span className='text-black'></span>
                      <span></span>
                      <Typography variant='h3'> Ge'ez Script</Typography>
                    </Box>
                    <Box className='mb-2 mt-2'>
                      <a href='https://en.wikipedia.org/wiki/Ge%CA%BDez_script'>
                      <Typography variant='p'>
                      The Geʽez script has been adapted to write other languages, mostly Ethiosemitic, particularly Amharic in Ethiopia, and Tigrinya in both Eritrea and Ethiopia. It has also been used to write Sebat Bet and other Gurage languages and at least 20 other languages of Ethiopia. 
                        In Eritrea it has traditionally been used for Tigre and it has also been used for Bilen
                      </Typography>
                      </a>
                </Box>
                  
                    <a href='https://en.wikipedia.org/wiki/Ge%CA%BDez_script' className='btn btn-main'>
                      Read More
                    </a>
                  </Box>
                </Box>
              </Fade>
          </Grid>
          
          <Grid item sm={12} md={6} lg={4} className='mb-4 mb-lg-0'>
            <Fade bottom delay={200}>
                <Box
                  className='shadow-sm-2 blog-item bg-white rounded'
                >
                  <img
                    src={blog1}
                    className='img-fluid rounded-top'
                    alt='...'
                  />
                  <Box className='p-4'>
                    <Box className='d-flex w-100 justify-content-between'>
                    
                      <span>Ancient History</span>
                    </Box>
                      <a href='blog-single.html'>
                          <Typography variant='h3'>
                        ስለ ግዕዝ
                        </Typography>
                    </a>
                      <Typography variant='p' className='mb-4'>
                      ግዕዝ ፡ በአፍሪካ ቀንድ ፡ በኢትዮጵያና ፡ በኤርትራ ፡ በጥንት ፡ የተመሠረተና ፡ ሲያገለግል ፡ የቆየ ፡ ቋንቋ ነው። የግዕዝ ፡ አመጣጥ ፡ በግምት ፡ የዛሬ ፡ ፫ ፡ ሺህ 
                      ፡ ዓመት ፡ ከየመን ፡ እና ፡ ደቡብ ፡ አረቢያ ፡ በመነሣትና ፡ ቀይ ፡ ባሕርን ፡ በመሻገር ፡ በኤርትራ ፡ እና፡ ሰሜን ፡ ኢትዮጵያ ፡ ውስጥ ፡ ከሰፈሩ ፡ የተለያዩ ፡ 
                      የሳባውያን ፡ ነገዶች ፡ ቋንቋና ፡ በጊዜው ፡ ሰሜን ፡ ኢትዮጵያ ፡ ይነገሩ ፡ በነበሩ ፡ ቋንቋዎች ፡ ዘገምተኛ ፡ ውኅደት ፡ ነው።[1] በአክሱም ፡ መንግሥትና ፡ 
                      በኢትዮጵያ ፡ መንግሥት ፡ መደበኛ ፡ ቋንቋ ፡ ነበር።

                      ግዕዝ ፡ ከአማርኛና ፡ ሌሎች ፡ ኢትዮ-ሴማዊ ፡ ቋንቋዎች ፡ ጋር ፡ ሲወዳደር ፡ «ንጹሕ» ፡ ሴማዊ ፡ ቋንቋ ፡ ነው።
                      </Typography>

                    <a href='https://www.britannica.com/topic/Geez-language' className='btn btn-main'>
                      Read More
                    </a>
                  </Box>
                </Box>
              </Fade>
          </Grid>

          <Grid item sm={12} md={6} lg={4} className='mb-4 mb-lg-0'>
          <Fade bottom delay={200}>
                <Box
                  className='shadow-sm-2 blog-item bg-white rounded'
                >
                  <img
                    src={blog1}
                    className='img-fluid rounded-top'
                    alt='...'
                  />
                  <Box className='p-4'>
                    <Box className='d-flex w-100 justify-content-between'>
                    
                      <span>Ancient L</span>
                    </Box>
                      <a href='blog-single.html'>
                          <Typography variant='h3'>
                          Geʽez abugida 
                        </Typography>
                    </a>
                      <Typography variant='p' className='mb-4'>
                      Modern Geʽez is written from left to right.
                      During the adoption or introduction of Christianity,
                      the Geʽez abugida developed under the influence of Christian 
                      scripture by adding obligatory vocalic diacritics to the consonantal letters. 
                      The diacritics for the vowels, u, i, a, e, ə, o, were fused with the consonants 
                      in a recognizable but slightly irregular way, 
                      so that the system is laid out as a syllabary. 

                      </Typography>

                      <a href='https://omniglot.com/writing/ethiopic.htm' className='btn btn-main'>
                      Read More
                      </a>
                  </Box>
                </Box>
              </Fade>
          </Grid>
        </Grid>
        </Container>
    </section>
  )
}

export default Blog




