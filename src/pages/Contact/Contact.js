import React from 'react'
import './Contact.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from "react-icons/bs";
import { Rotate } from 'react-awesome-reveal';
import { LightSpeed } from '../../extra/LightSpeedAnimation';
import { FaFacebook } from 'react-icons/fa'
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
                                                <a href='https://www.linkedin.com/in/bharat-patidar-067872290/' alt="linkedin"><AiFillLinkedin color="blue" size={30} className='ms-2' /></a>
                                                <a href="https://github.com/bharat-patidar1" alt="github link"><BsGithub color="black" size={30} className='ms-2' /></a>
                                                <a href="https://www.facebook.com" alt="facebookLink"><FaFacebook color="blue" size={30} className='ms-2' /></a>
                                            </h6>
                                        </div>

                                        <div className="row px-3 mb-4">
                                            <div className="line" />
                                            <small className='or text-center'>OR</small>
                                            <div className="line" />
                                        </div>

                                        {/* 
                                        <form action="https://formsubmit.co/bharatpatidar399@gmail.com" method="POST">
                                            <textarea
                                                name="message"
                                                placeholder="Type your message here..."
                                                required
                                                className="width: 100%; padding: 8px; margin-bottom: 10px;"
                                            ></textarea>

                                            <input type="hidden" name="_captcha" value="false" />

                                            <button type="submit">Send</button>
                                        </form> */}


                                        <form action="https://getform.io/f/apjpyjxa" method="POST">

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
                                        </form>
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