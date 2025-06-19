import './About.css'
import image from '../../Images/my_img.png'
import React from 'react'
import Jump from 'react-reveal/Jump'

const About = () => {
  return (
    <>
    <Jump>
     <div className="about " id="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src={image} alt="profile_pic"></img>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About me</h1>
                <p>My name is Bharat Patidar , I am pursuing Engineering from IET DAVV Indore . 
                    have good knowledege of Java and data structures and also I am Expert in Full Stack development MERN 
                </p>
            </div>
        </div>
     </div>
     </Jump>
    </>
  )
}

export default About