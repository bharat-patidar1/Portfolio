// this is the home page i have made for my website and it is very good
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import './home.css'
import { Fade } from 'react-awesome-reveal';
import resume from '../../assets/docs/Bharat_Patidar_CV.pdf'
import Typewriter from 'typewriter-effect';
import {BsFillMoonStarsFill , BsFillSunFill } from 'react-icons/bs'
const Home = () => {
  const [theme , setTheme] = useTheme()
  //now handle theme on btn click
  const handleTheme = ()=>{
    setTheme((prevState)=>(prevState === 'light' ? 'dark' : 'light'))
  }
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
           { theme === 'light' ? (<BsFillMoonStarsFill/>) : (<BsFillSunFill/>) }
        </div>
         <div className="container home-content">
         <Fade right>
           <h2>Hi 👋 i am a </h2>
           <h1>
           <Typewriter
               options={{
               strings: ['Coder', 'Developer'],
               autoStart: true,
               loop: true,
            }}
          />
            </h1>
          </Fade>
          <Fade bottom>
           <div className="home-buttons">
             <a className='btn btn-hire' 
             href="https://api.whatsapp.com/send?phone=7024187781"
             rel="noreferrer"
             target="_blank"
             >Hire Me</a>
             <a className='btn btn-cv' href={resume} alt="Resume" download="Bharat_cv.pdf">My Resume</a>
           </div>
           </Fade>
         </div>
      </div>
    </>
  )
}

export default Home