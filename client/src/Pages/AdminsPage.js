import React from 'react';
import Fade from 'react-reveal/Fade';
import Banner from '../components/Banner'
import Header from '../components/Header'
import { useHistory } from "react-router-dom";

import { useEffect, useState } from "react";
import Axios from 'axios';
// this fo admins page 

function ContactForm () {
  const history = useHistory();
  
  const handledHistory = () => {
    history.push("/register");
  };
  const handleViewIncubationCenter = () => {
    history.push("/viewIncubationCenter");
  }
    

  return (
    <div>
      <Banner title="Admin's Page"/>
      <section className='contact-form-wrap section'>
      <div className='container'>
        <Fade bottom>
          <div className='row align-items-center bg-gray'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='google-map'>
                
              <div className='form-group-2 mb-4'>
                  <textarea
                  id= "sizingTextArea"
                    name='message'
                    className='form-control'
                    rows='4'
                    placeholder='Your Message'
                  ></textarea>
                  <button className='btn btn-main' id = "sizing"> post news </button>
                  <button className='btn btn-main' id = "sizing"> upload image </button>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-sm-12'>
              <div className='contact-content pl-lg-5 mt-5 mt-lg-0'>
              <button className='btn btn-main' id = "sizing" onClick = {handledHistory}> Add Incubation Center </button><br />
              <button className='btn btn-main' id = "sizing" onClick = {handleViewIncubationCenter}> View Incubation Center </button><br />
              <button className='btn btn-main' id = "sizing"> Remove Incubation Center </button>
                

                <ul className='social-icons list-inline mt-4'>
                  <li className='list-inline-item'>
                    <a href='/'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='/'>
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='/'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
        
      </div>
    </section>
    </div>
  )
}

export default ContactForm