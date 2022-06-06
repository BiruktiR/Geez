import React from 'react'
import { BsPlay } from 'react-icons/bs'
function Cta () {
  return (
    <section className='section cta-section position-relative'>
      <div className='bg-2 w-50 bg-absolute d-none d-sm-block d-md-block d-lg-block'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 offset-lg-5'>
            <div className='cta-item p-5  position-relative ml-4'>
              <a href='https://www.youtube.com/watch?v=x_F0lXQaOaM' className='videoplay mr-3 text-white'>
                <BsPlay />
              </a>
              <div className='cta-content-block'>
                <h2 className='mt-2 mb-4  font-secondary'>See How we Help You!</h2>
                <p>
                we help in the process of designing, developing, and growing new ideas and projects from the start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
