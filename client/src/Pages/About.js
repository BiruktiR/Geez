import React from 'react';
import AboutStart from '../components/AboutStart';
import Banner from '../components/Banner';
import Count2 from '../components/Count2';

import Team from '../components/Team';

function About() {
  return (
    <div>
      <Banner title='About Us'/>
      <AboutStart />
      <Count2 />
      <Team />
      
    </div>
  )
}

export default About
