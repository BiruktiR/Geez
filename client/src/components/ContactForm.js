import React from 'react'
import Fade from 'react-reveal/Fade';
// this is contact page 
function ContactForm () {
  return (
    <section className='contact-form-wrap section'>
      <div className='container'>
        <Fade bottom>
          <div className='row align-items-center bg-gray'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='google-map'>
                
                <div id='map'>
                  <iframe
                    className='w-100 border-0'
                    src="https://www.google.com/maps/place/Robe/@7.1168611,39.9858138,14z/data=!3m1!4b1!4m5!3m4!1s0x17ca022eb0941543:0xec6efd09bd5f02e4!8m2!3d7.1199031!4d40.0068953" 
                    width='600'
                    height='450'
                    allowFullScreen=''
                    title='map'
                    loading='lazy'
                  ></iframe>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-sm-12'>
              <div className='contact-content pl-lg-5 mt-5 mt-lg-0'>
                <p className='mb-4 mt-2 lead h4'>
                  Don’t Hesitate to contact <br />
                  with us for any kind of information <br />
                  
                </p>
                <h2 className='mb-3'>+251 11 126 5737</h2>
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
  )
}

export default ContactForm
