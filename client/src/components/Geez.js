import React from 'react'
import home from '../assets/images/logo.jpg'
import Fade from 'react-reveal/Fade';
// this is about page  

function Geez () {
  return (
    <section className='about'>
      
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div
              className='about-img mb-5 mb-lg-0'
            >
              <Fade left>
                <img src={home} alt='' className='img-fluid' />
              </Fade>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='about-item pl-3 mt-4 mt-lg-0'>
              <h2 className='mt-3 mb-4 font-secondary'>
                {' '}
                 
                Why do you need to learn Ge'ez?
              </h2>
              <p className='mb-4'>
                {/* <h4> */}
              It’s an important language for the study of late ancient Christianity and early Islam. 
              It’s the language of some of the earliest Judeo-Christian writings.
                Its vocabulary can be found throughout the Quran. 
                 Yet the classical language Ge’ez is little known beyond the Horn of Africa.
                 {/* </h4> */}
              </p>
            </div>
          </div>
        </div>   
      </div>
    </section>
  )
}

export default Geez

