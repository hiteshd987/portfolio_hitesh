import React, { useRef } from 'react';
import {Card, Row, Col} from 'antd';
import { motion, useScroll, useTransform } from "framer-motion";
import './index.scss';

const allSkills = [
  "Reactjs", "Nextjs", "Javascript", "Redux", "Git", "Jira", "HTML", "CSS", "SCSS", 
  "Material UI", "Ant Design", "Adobe Experience Manager","Bootstrap", "Docker"
] 

const Skills = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (

    <div className="skills-wrapper" ref={ref}>
      <Row gutter={[16, 16]} className='skills-row-main'>
      <Col className="skills-img-container" xs={24} sm={24} md={24} lg={10}>
      <motion.h1 style={{ y: yText }}>
        Skills
      </motion.h1>
      <motion.img
        className="skills-img"
        src="skillsbg.jpg"
        alt="Skills Background"
        style={{ y: yBg }}
      />
        {/* <h1 className="skills-title">Skills</h1>
        <img src="skillsbg.jpg" className='skills-img' /> */}
      </Col>
      
      <Col xs={24} sm={24} md={24} lg={14} >
        <div className="skills-card-container">
          <Row gutter={[24, 24]} className='skills-card-row'>
          {allSkills.map((item, index) => (
          <Col key={index} xs={8} sm={8} md={8} lg={8}>
            <Card
              className="skills-card"
              >
              <h1>{item}</h1>
            </Card>
          </Col>
          ))}                   
          </Row>  
        </div>  
      </Col>
      </Row>
    </div>
  );
};

export default Skills;
