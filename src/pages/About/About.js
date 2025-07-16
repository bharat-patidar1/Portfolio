import './About.css'
import image from '../../Images/my_img.png'
import React from 'react'
import { Jump } from '../../extra/JumpAnimation';

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
                <p>
                       I’m <strong>Bharat Patidar</strong>, a final-year B.Tech student at the Institute of Engineering and Technology (IET DAVV), Indore, passionate about building scalable and impactful software applications. I specialize in Full Stack Web Development (MERN) and have a strong foundation in Java, Data Structures & Algorithms, and SQL/MySQL.
                       I enjoy working on both the frontend and backend — whether it's building APIs, writing clean database queries, or creating smooth user interfaces. I also have a strong foundation in Data Structures and Algorithms, which helps me write efficient, optimized code. I’m always learning new technologies and believe in writing code that is simple, maintainable, and scalable
                </p>
            </div>
        </div>
     </div>
     </Jump>
    </>
  )
}

export default About
