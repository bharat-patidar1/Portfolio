import React from 'react'
import './Contact.css'
import {AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from "react-icons/bs";
import { Rotate } from 'react-awesome-reveal';
import { LightSpeed } from '../../extra/LightSpeedAnimation';
import {FaFacebook } from 'react-icons/fa'
import contact_img from '../../Images/download.jpeg'
const Contact = () => {
  return (
    <>
       <div className="contact" id="contact">
           <div className="card card0 border-0">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                        <div className="card1">
                            <div className="row border-line">
                                <LightSpeed>
                                <img src={contact_img} alt='contact' className='image' ></img>
                                </LightSpeed>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Rotate>
                      <div className="card2 d-flex card-border-0 px-4 py-3">
                        <div className="row">
                            <div className="row">
                                <h6> 
                                    Contact With
                                    <AiFillLinkedin color="blue" size={30} className='ms-2'/>
                                     <BsGithub  color="black" size={30} className='ms-2'/>
                                     <FaFacebook color="blue" size={30} className='ms-2' />
                                </h6>
                            </div>

                            <div className="row px-3 mb-4">
                                <div className="line"/>
                                <small className='or text-center'>OR</small>
                                <div className="line"/>
                            </div>
                            <div className="row px-3">
                                <input 
                                type="text" 
                                name="name"
                                placeholder='Write Your Name' 
                                className='mb-3'
                               
                                >
                                </input>
                            </div>
                            <div className="row px-3">
                                <input 
                                type="email" 
                                name="email"
                                placeholder='Enter Your Email Address' 
                                className='mb-3'
                                
                                >
                                </input>
                            </div>
                            <div className="row px-3">
                                <textarea
                                type="text" 
                                name="msg"
                                placeholder='Write Your Message' 
                                className='mb-2'
                                
                                />
                            </div>
                            <div className="row px-3">
                                <button className='button' type="submit" >SEND MESSAGE</button>    
                            </div>
                        </div> 
                      </div>
                      </Rotate>
                    </div>
                </div>
           </div>
       </div>
    </>
  )
}

export default Contact