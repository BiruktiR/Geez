import React from 'react'
import team1 from '../assets/images/img5.jpg'
import team2 from '../assets/images/img6.jpg'
import team3 from '../assets/images/img7.jpg'
import team4 from '../assets/images/img8.jpg'
import team5 from '../assets/images/img9.jpg'
import team6 from '../assets/images/img10.jpg'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import Fade from 'react-reveal/Fade';
const teams = [
  {
    src: team1,
    title: 'YENETA',
    name: 'student'
  },
  {
    src: team2,
    title: 'traditional mesemhere geez',
    name: 'Yeneta'
  },
  {
    src: team3,
    title: 'Learner',
    name: 'Yeneta '
  },
  {
    src: team4,
    title: 'Mesetemhere geez',
    name: 'Yeneta'
  },
  {
    src: team6,
    title: 'Geez',
    name: 'Yeneta'
  },
  {
    src: team5,
    title: 'Learning',
    name: 'Yeneta'
  }
]
function Team () {
  return (
    <section className='section team position-relative'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 text-center'>
            <div className='section-title'>
              <h2 className='mb-4'>completed learning process
              and gained and some others </h2>
              
            </div>
          </div>
        </div>

        <div className='row justify-content-center'>
          {teams.map((item, index) =>(
            <div key={index} className='col-lg-4 col-md-6 col-sm-6'>
              <Fade right delay={200*index}>
                <div
                  className='team-item-wrap mb-5'
                >
                  <img
                    src={item.src}
                    alt=''
                    className='img-fluid w-100 rounded'
                  />
                  <div className='team-item-content'>
                    <p className='text-sm mb-0'>{item.title}</p>
                    <h3 className='mt-0 mb-2 text-capitalize'>{item.name}</h3>

                    
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
