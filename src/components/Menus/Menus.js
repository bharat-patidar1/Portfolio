import React from 'react'
import './Menus.css'
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from 'react-scroll';
import pic from '../../Images/my_img.png'
import { FcHome,FcAbout,FcReading} from "react-icons/fc";
import { DiTechcrunch } from "react-icons/di";
import { FaRegUserCircle,FaTasks } from "react-icons/fa";
const Menus = (props) => {
  // or u can directly extract toggle by {toggle} in plaace of props
  const toggle = props.toggle
  return (
  <>
    {/* {toggle &&  <div className='navbar-profile-pic'>
      <img src={pic} alt='Profile pic' />
    </div> } */}
  {toggle ? (
    <>
      <Zoom>
      <div className='navbar-profile-pic'>
          <img src={pic} alt='Profile pic' />
      </div>
      </Zoom>
      <Fade left>
      <div className='nav-items'>
         <div className='nav-item'>
          <div className='nav-link'>
            <Link to='home' spy={true} duration={100} smooth={true} offset={-50}>
              <FcHome/>
              Home
            </Link>
          </div>
          <div className='nav-link'>
            <Link to="about" spy={true} duration={100} smooth={true} offset={-50}>
            <FcAbout/>
            About
            </Link>
          </div>
          <div className='nav-link'>
            <Link to="education" spy={true} duration={100} smooth={true} offset={-50}>
            <FcReading />
            Education
            </Link>
          </div>
          <div className='nav-link'>
            <Link to="tech" spy={true} duration={100} smooth={true} offset={-50}>
            <DiTechcrunch />
            Tech Stack
            </Link>  
          </div>
          <div className='nav-link'>
            <Link to="project" spy={true} duration={100} smooth={true} offset={-50}>
            <FaTasks />
            Projects
            </Link>
          </div>
          <div className='nav-link'>
            <Link to="contact" spy={true} duration={100} smooth={true} offset={-50}>
            <FaRegUserCircle/>
            Contact
            </Link>
          </div>
         </div>
      </div>
      </Fade>
    </>
  ) : (
      <> 
          <div className='nav-items' >
         <div className='nav-item' >
          <div className='nav-link'>
          <Link to='home' spy={true} duration={100} smooth={true} offset={-50}>
          <FcHome  title='Home' size={30} className='mb-2'/>
          </Link>
          </div>
          <div className='nav-link'>
          <Link to='about' spy={true} duration={100} smooth={true} offset={-50}>
          <FcAbout title='About' size={30}/>
          </Link>
            
          </div>
          <div className='nav-link'>
          <Link to='education' spy={true} duration={100} smooth={true} offset={-50}>
          <FcReading  title='Education' size={30}/>
          </Link>
            
          </div>
          <div className='nav-link'>
          <Link to='tech' spy={true} duration={100} smooth={true} offset={-50}>
          <DiTechcrunch  title='Tech Stack' size={30}/>
          </Link>
            
          </div>
          <div className='nav-link'>
          <Link to='project' spy={true} duration={100} smooth={true} offset={-50}>
          <FaTasks   title='Projects'size={30}/>
          </Link>
          </div>
          <div className='nav-link'>  
          </div>
          <div className='nav-link'>
          <Link to='contact' spy={true} duration={100} smooth={true} offset={-50}>
          <FaRegUserCircle  title='Contact' size={30}/>
          </Link>
            
          </div>
         </div>
      </div>
      </>
  )}    
  </>
  )
}

export default Menus