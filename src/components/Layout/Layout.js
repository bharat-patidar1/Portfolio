import React,{useState} from 'react'
import Home from '../../pages/Home/Home'
import './Layout.css'
import { MdChevronLeft , MdChevronRight } from "react-icons/md";
import Menus from '../Menus/Menus';

const Layout = () => {

 const [toggle , setToggle] = useState(true) 

 const handleToggle = ()=>{
    setToggle(!toggle);
 }

  return (
    <>
       <div className='sidebar-section' >
            <div className={toggle ? "slidebar-toggle sidebar" : "sidebar"}>
                <div className='sidebar-toggle-icons'>
                    <p onClick={handleToggle}>
                       {
                       toggle?(<MdChevronLeft size={30}/>):(<MdChevronRight size={30}/>)
                       }
                    </p>
                </div>
                 {/* yha toggle ko menus pr pass kr diya */}
                 <Menus toggle={toggle}/> 
            </div>
            <div className='container'>
                <Home/>
            </div>
       </div>
    
    </>
  )
}

export default Layout