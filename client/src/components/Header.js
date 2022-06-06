import React, { useState, useEffect } from 'react'
import  { FaPhone, FaEnvelope, FaGlobe, FaBars, FaAngleRight } from 'react-icons/fa'
import  { TiSocialFacebook, TiSocialTwitter, TiSocialGithub } from 'react-icons/ti'
import {
  Link, Redirect
} from "react-router-dom";
import {Button} from "@mui/material";
 // this is header page
import {AuthContext} from "./routing/authContext";

function Header () {
  const [show, setShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const [authenticated, setAuth]=useState(!(localStorage.getItem('authToken')))

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setAuth(true)
    }
  }, [authenticated]);

  const getAuth=()=>{
    if(localStorage.getItem("authToken")){
      return true
    }else {
      return false
    }
  }

  function handleScrollUp() {
    if(window.scrollY >= 10 && !isScroll) {
      setIsScroll(true);
      return;
    }
    setIsScroll (false);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrollUp);
    return () => {
      window.removeEventListener('scroll', handleScrollUp);
    };
  }, []);
  return (

    <header className='navigation '>
      <AuthContext.Consumer>
        {auth => (
<>

      <div className='header-top d-none d-md-block d-lg-block'>
        <div className='container'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-lg-8 col-md-8'>
              <div className='header-top-info'>
                <a href='tel:+23-345-67890'>
                  <FaPhone className='mr-2' />
                  <span>+251 11 127 5737</span>
                </a>
                <a href='/'>
                  <FaEnvelope className='mr-2' />
                  <a href='https://yenetanet.com/contact/' target='_blank'>
                    <span>Yeneta@gmail.com</span>
                  </a>
                 
                </a>
                
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='header-top-socials text-center text-lg-right'>
                <a href='https://www.facebook.com/yenetatubedotnet/' target='_blank'>
                  <TiSocialFacebook />
                </a>
                <a href='https://twitter.com/derilloeyob/status/1056965253450383361?lang=en' target='_blank'>
                  <TiSocialTwitter />
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className={`navbar navbar-expand-lg  main-nav py-3${isScroll ? ' nav-top awake': ''}`} id='navbar'>
        <div className='container'>
          <a className='navbar-brand' href='index.html'>
            <span>Yeneta</span>
          </a>

          <button
            className='navbar-toggler collapsed'
            type='button'
            onClick={() => setShow(!show)}
          >
            <FaBars />
          </button>

          <div className={`collapse navbar-collapse ${show ? 'show': ''}`} id='navbarsExample09'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/services'>
                  Courses
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Contact Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/dashboard'>
                  DashBoard
                </Link>
              </li>

              {

                !authenticated? (
                  <>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/login'>
                        Login
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/register'>
                        Register
                      </Link>
                    </li>
                  </>
              ) : (
                  <li className='nav-item'>
                    <Button variant="outlined" onClick={()=>{
                      localStorage.removeItem("authToken")
                      setAuth(false)
                    }}>Logout</Button>
                  </li>
              )}



            </ul>
            </div>
        </div>
      </nav>
  </> )}
        </AuthContext.Consumer>
      </header>
  )
}

export default Header
