import React from 'react'
import {IoMdSchool } from 'react-icons/io'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
const Education = () => {
  return (
    <> 
       <div className="education" id='education'>
       <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education details</h2>
       <hr/>
       <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2020-2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<IoMdSchool  />}
          >
        <h3 className="vertical-timeline-element-title">Higher Secondary School</h3>
        <h4 className="vertical-timeline-element-subtitle">IPS School Narayangarh ,Mandsaur</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2022-2026"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<IoMdSchool  />}
          >
        <h3 className="vertical-timeline-element-title">Bachelor of Engineering</h3>
        <h4 className="vertical-timeline-element-subtitle">IET , DAVV INDORE</h4>
        <p> Branch - Electronics and Telecommunication </p>
        </VerticalTimelineElement>
       </VerticalTimeline>
       </div>
    </>
  )
}

export default Education