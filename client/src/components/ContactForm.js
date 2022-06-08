import React from 'react'
import Fade from 'react-reveal/Fade';
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Location from './Location';
// this is contact page 
export default function ContactForm() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
function Map() {
   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <>
    <Location/>
     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
    <section className='contact-form-wrap section'>
      <div className='container'>
        <Fade bottom>
          <div className='row align-items-center bg-gray'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='google-map'>
              
                <div id='map'>
                  <iframe  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMrH5mCFY1uZ2YH-lE-Ho4AsACkh5JvEg" target="_parent"
          
                    className='w-100 border-0'
                    
                    //src="https://www.google.com/maps/place/Robe/@7.1168611,39.9858138,14z/data=!3m1!4b1!4m5!3m4!1s0x17ca022eb0941543:0xec6efd09bd5f02e4!8m2!3d7.1199031!4d40.0068953" 
                    width='600'
                    height='450'
                    allowFullScreen=''
                    title='map'
                    loading='lazy'
                  >//</iframe>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-sm-12'>
              <div className='contact-content pl-lg-5 mt-5 mt-lg-0'>
                <p className='mb-4 mt-2 lead h4'>
                  Don’t Hesitate to contact <br />
                  with us for any kind of information <br />
                  
                </p>
                <h2 className='mb-3'>+251 929346892</h2>
                <h3 className = "mb-3"> Addis Ababa, Ethiopia</h3>

                <p>
                  
                </p>

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
        <Fade bottom>
          <div className='row justify-content-center mt-5'>
            <div className='col-lg-8 text-center mt-4'>
              <form
                id='contact-form'
                className='contact__form'
                method='post'
                action='#'
              >
                <h3 className='text-md '>Contact Us</h3>
                

                <div className='form-group'>
                  <input
                    name='name'
                    type='text'
                    className='form-control'
                    placeholder='Your Name'
                  />
                </div>
                <div className='form-group'>
                  <input
                    name='email'
                    type='email'
                    className='form-control'
                    placeholder='Email Address'
                  />
                </div>
                <div className='form-group-2 mb-4'>
                  <textarea
                    name='message'
                    className='form-control'
                    rows='4'
                    placeholder='Your Message'
                  ></textarea>
                </div>
                <button className='btn btn-main' name='submit' type='submit'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  </>
  )
}

//export default ContactForm
