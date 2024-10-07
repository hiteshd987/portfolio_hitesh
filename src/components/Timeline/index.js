import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'; 
import "react-vertical-timeline-component/style.min.css"
import timelineItems from './timelineItems.js'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Image from 'antd/lib/image';
import { motion } from "framer-motion";
import "./index.scss"

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
              icon={
              <motion.img src={item.img} alt="" className="project-img" />
              // <Image src={item.img} alt="timelineicon" />
            }
              
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
