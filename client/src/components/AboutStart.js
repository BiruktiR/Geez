import React from 'react'
import about1 from '../assets/images/ab1.jpg'
import about2 from '../assets/images/ab3.jpg'
import about3 from '../assets/images/ab5.jpg'
import Fade from 'react-reveal/Fade';
function AboutStart () {
  return (
    <section className='section about-2 position-relative'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-10 col-md-10 text-center'>
            <h1>
            we help in the process of Learning, Gaining, and growing new knowledge and language from the start.
            </h1>
            <p className='mb-5 lead mt-4 font-weight-normal'>
            




            
            </p>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-lg-4 mb-4 mb-lg-0 col-md-6'
          >
            <Fade bottom>
              <img src={about1} alt='' className='img-fluid rounded' />
              <div className='about-info-item mt-4'>
                <h3 className='mb-3'>Our Mission</h3>
                <p>
                We build learning system to extract and have Ge'ez language ideas in the region to enact wealth and democractic action through successful learning process


                </p>
              </div>
            </Fade>
          </div>
          <div
            className='col-lg-4 mb-4 mb-lg-0 col-md-6'
          >
            <Fade bottom delay={200}>
              <img
                src={about2}
                alt=''
                className='img-fluid rounded'
              />
              <div className='about-info-item mt-4'>
                <h3 className='mb-3'>Vission</h3>
                <p>
                To be a center of excellence that fosters synergy between the academia and 
                the industry that fuels the ancient history language and widing research bent 
                of mind among yeneta students to help them to be self reliant and contribute to the 
                nation history..
                </p>
              </div>
            </Fade>
          </div>
          <div className='col-lg-4'>
            <Fade bottom={400}>
              <img
                src={about3}
                alt=''
                className='img-fluid rounded'
              />
              <div className='about-info-item mt-4'>
                <h3 className='mb-3'>Our Approach</h3>
                <p>
              
                We use external and internal approached to nurture and grow the e-learning  by supporting them through 
                beginner stages .
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStart
