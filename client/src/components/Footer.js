import React from 'react'
import  { FaFacebookF } from 'react-icons/fa'
import  { FiTwitter } from 'react-icons/fi'
import  { DiGithubAlt } from 'react-icons/di'
import  { IoLogoDribbble } from 'react-icons/io'
// this is for footer page 

function Footer () {
  return (
    <footer className='footer section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 ml-auto col-sm-12'>
            <div className='widget'>
              <div className='logo mb-4'>
                <h3 className='text-white'>
                  <span>Yeneta address</span>
                </h3>
              </div>
              <a href='/' className='text-white'>
              yeneta@gmail.com
              </a>
              <p className='mt-4 mb-3'>
                Addis Ababa , Ethiopia
              </p>
              <a href='/'>
                <span className='text-white h4'>+251 11 127 5737</span>
              </a>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='widget'>
              <h4 className='text-capitalize mb-4 text-white'>Quick Links</h4>

              <ul className='list-unstyled footer-menu lh-35'>
                <li>
                  <a href='/'>About</a>
                </li>
                <li>
                  <a href='/'>Courses</a>
                </li>
                <li>
                  <a href='/'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='widget'>
              <h4 className='text-capitalize mb-4 text-white'>Follow us</h4>
              <ul className='list-unstyled footer-socials'>
                <li>
                  <a href='https://www.facebook.com/yenetatubedotnet/'>
                    <FaFacebookF className='mr-2 text-muted'/>facebook
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/derilloeyob/status/1056965253450383361?lang=en'>
                    <FiTwitter className='mr-2 text-muted'/>Twitter
                  </a>
                </li>
                
               
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-btm pt-4 pb-3'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div className='copyright'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
