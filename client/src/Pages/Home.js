import React from 'react'
import Intro from "../components/Intro";
import Price from "../components/Price";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Team from "../components/Team";
import Blog from "../components/Blog";
import Counter from "../components/Counter";
import Cta from "../components/Cta";
import About from "../components/About";
 // this is for home page 
function Home() {
  return (
    <>
      <Slider />
      <Intro />
      <About />
      <Counter />
        <Blog />
      <Services />
      <Price />
    </>
  )
}

export default Home
