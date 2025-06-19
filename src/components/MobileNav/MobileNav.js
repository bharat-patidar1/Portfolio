import React, { useState } from 'react'
import './MobileNav.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';
import { FcHome,FcAbout,FcReading,FcPortraitMode} from "react-icons/fc";
import { DiTechcrunch } from "react-icons/di";
import { FaRegUserCircle,FaTasks } from "react-icons/fa";
const MobileNav = () => {
    const [open , setOpen] = useState(false)
    const handleOpen = ()=>{
        setOpen(!open)
    }
    const handleMenuClick = ()=>{
      setOpen(false)
    }
  return (
    <>
        <div className="mobile-nav">
            <div className="mobile-nav-header">
                {open ? (<GiHamburgerMenu size={30} className='mobile-nav-icon-open' onClick={handleOpen}/>) : (
                  <GiHamburgerMenu size={30} className='mobile-nav-icon-close' onClick={handleOpen}/>
                )}
                <span className='mobile-nav-title'>My Portfolio App</span>
            </div>
            {open && (
              <div className="mobile-nav-menu">
              <div className='nav-items'>
                      <div className='nav-item'>
                       <div className='nav-link'>
                         <Link to='home' spy={true} duration={100} smooth={true} offset={-50} onClick={handleMenuClick}>
                           <FcHome onClick={handleOpen}/>
                           Home
                         </Link>
                       </div>
                       <div className='nav-link'>
                         <Link to="about" spy={true} duration={100} smooth={true} offset={-50} onClick={handleMenuClick}>
                         <FcAbout onClick={handleOpen}/>
                         About
                         </Link>
                       </div>
                       <div className='nav-link'>
                         <Link to="education" spy={true} duration={100} smooth={true} offset={-50} onClick={handleMenuClick}>
                         <FcReading onClick={handleOpen}/>
                         Education
                         </Link>
                       </div>
                       <div className='nav-link'>
                         <Link to="tech" spy={true} duration={100} smooth={true} offset={-50} onClick={handleMenuClick}>
                         <DiTechcrunch />
                         Tech Stack
                         </Link>  
                       </div>
                       <div className='nav-link'>
                         <Link to="project" spy={true} duration={100} smooth={true} offset={-50} onClick={handleMenuClick}>
                         <FaTasks />
                         Projects
                         </Link>
                       </div>
                       <div className='nav-link'>
                         <Link to="work" spy={true} duration={100} smooth={true} offset={-50} onClick={handleMenuClick}>
                         <FcPortraitMode />
                         Work Experience
                         </Link>                                                                                
                       </div>
                       <div className='nav-link'>
                        {/* link is used to bind text and icon */}
                         <Link to="contact" spy={true} duration={100} smooth={true} offset={-50} onClick={handleMenuClick}>
                         <FaRegUserCircle/>
                         Contact
                         </Link>
                       </div>
                      </div>
                   </div>
              </div>
            )}
        </div>
    </>
  )
}

export default MobileNav