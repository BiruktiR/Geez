import React from 'react'
import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'
import Location from'../components/Location'
function Contact() {
  return (
    <div>
      <Banner title='Get In Touch' justifyContent="center"/>
      <ContactForm />
      <Location/>
    </div>
  )
}

export default Contact
