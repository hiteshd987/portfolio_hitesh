import React, { useState, useEffect } from 'react';
import {Card, Row, Col} from 'antd';
import './index.scss'; // Assuming you have a Timeline.css file for styling

const allSkills = [
  "Reactjs", "Nextjs", "Javascript", "Redux", "Git", "Jira", "HTML", "CSS", "SCSS", 
  "Material UI", "Ant Design", "Adobe Experience Manager","Bootstrap", "Docker"
] 

const Skills = () => {

  return (
    <>
    <div className="skills-wrapper">
      <Row gutter={[16, 16]}>
      <Col className="skills-img-container" xs={24} sm={24} md={24} lg={12}>
        <h1 className="skills-title">Skills</h1>
        {/* <img src='./skills.png' /> */}
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} >
      <div className="skills-container">
          <Row gutter={[24, 24]}
          >
          {allSkills.map((item, index) => (
          <>
          <Col key={index} xs={8} sm={8} md={8} lg={8}>
            <Card
              className="cardSkills"
              >
              <h1>{item}</h1>
            </Card>
          </Col>
          </>
          ))}                   
          </Row>
      </div>
      </Col>
      </Row>
    </div>
    </>
  );
};

export default Skills;
