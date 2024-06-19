import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'; 
import "react-vertical-timeline-component/style.min.css"
import timelineItems from './timelineItems.js'
import { Row, Col } from 'antd';
import "./index.scss"
// import WorkIcon from "./work.svg"
// import SchoolIcon from "./school.svg"

// import { Chrono } from 'react-chrono';

const Timeline = () => {
  let workIconStyles = { background: "#06D6A0" }
  let schoolIconStyles = { background: "#f9c74f" }
  return (
      <div className='timeline-container'>
      <Row justify="center">
          <Col span={24}>
            <p className='timeline-title'>Timeline</p>
          </Col>
      </Row>

      <Row className='timeline-row' justify="center">
          <Col xs={24} md={20}>
       <VerticalTimeline 
        animate={false}
       >
        <div className='timeline-elements-container'>
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
              icon={<img src={item.img} alt="icon" />}
              
            >
              <p className='vertical-timeline-element-title'>
              {item.title}
              </p>
              <p className='vertical-timeline-element-subtitle'>
              {item.location}
              </p>
              <p id="description">{item.description}</p>
              {showButton && (
                <a
                  className="work-button"
                  href="#Projects"
                >
                  {item.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          )
        })}
        </div>
       </VerticalTimeline>
       </Col>
      </Row>
      </div>
  );
};

export default Timeline;
