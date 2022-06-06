import React from 'react'
// import Intro from "../components/Intro";
// import Slider from "../components/Slider";
import Courses from "./Courses";
// import Blog from "../../Components/Blog";
import Banner from "../../components/Banner";

 // this is for home page 
function Home() {
  return (
    <>
      <Banner title='Courses' justifyContent="center"/>
      <Courses/>
      
    </>
  )
}

export default Home
