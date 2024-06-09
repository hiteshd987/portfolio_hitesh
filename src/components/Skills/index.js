import React, { useState, useEffect } from 'react';
import {Card, Row, Col} from 'antd';
import './index.scss'; // Assuming you have a Timeline.css file for styling

const allSkills = [
  "Reactjs", "Nextjs", "Javascript", "Redux", "Git", "Jira", "HTML", "CSS", "SCSS", "Bootstrap", 
  "Material UI", "Ant Design", "Adobe Experience Manager", "Docker"
] 

const Skills = () => {

  return (
    <>
    <section className="skills-wrapper">
      <Row>
      <Col className="gutter-row skills-img-container" span={12}>
        <h1 className="skills-title">Skills</h1>
        {/* <img src='./skills.png' /> */}
      </Col>
      <Col className="gutter-row" span={12}>
      <div className="skills-container">
          <Row 
          // gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
          {allSkills.map((item, index) => (
          <>
          <Col key={index} className="gutter-row" span={8}>
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
    </section>
    </>
  );
};

export default Skills;
