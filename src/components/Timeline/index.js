import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'; 
import "react-vertical-timeline-component/style.min.css"
import timelineItems from './timelineItems.js'
import "./index.scss"
// import WorkIcon from "./work.svg"
// import SchoolIcon from "./school.svg"

// import { Chrono } from 'react-chrono';

const Timeline = () => {
  let workIconStyles = { background: "#06D6A0" }
  let schoolIconStyles = { background: "#f9c74f" }
  return (
    <div>
      <section className='timeline-container'>
       <p className='timeline-title'>Timeline</p>
       <VerticalTimeline 
        animate={false}
       >
        {timelineItems.map((item, index) => {
          let isWorkIcon = item.icon === "work";
          let showButton =
          item.buttonText !== undefined &&
          item.buttonText !== null &&
          item.buttonText !== ""

          return (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              // icon={<img src={isWorkIcon ? WorkIcon : SchoolIcon} alt="icon" />}
              icon={<img src={item.img} alt="icon" />}
              
            >
              <h3 className='vertical-timeline-element-title'>
              {item.title}
              </h3>
              <h5 className='vertical-timeline-element-subtitle'>
              {item.location}
              </h5>
              <p id="description">{item.description}</p>
              {showButton && (
                <a
                  className="workButton"
                  href="#Projects"
                >
                  {item.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          )
        })}
       </VerticalTimeline>
       </section>
    </div>
  );
};

export default Timeline;
