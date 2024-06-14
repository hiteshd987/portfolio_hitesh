import { useRef, useState } from "react";
import "./index.scss"
import {Row, Col, Card, Space} from 'antd'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ProjectDialog from "./modal";
import projectItems from './projectItems'

const Single = ({ item }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogText, setDialogText] = useState('');
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    const openDialog = () => {
      // setDialogText(item.desc);
      setIsDialogOpen(true);
    };

    return (
      <>
      <section 
      // ref={ref}
      >
        <div className="container">
          <Row gutter={[16, 16]} className="project-row"> 
          {/* <div className="img-container"> */}
            <Col className="project-img-col" xs={24} sm={12} md={12} lg={12}>
              <img src={item.img} alt="" className="project-img" />
            </Col>
          {/* </div> */}
            <Col xs={24} sm={12} md={12} lg={12} className="project-text-col"> 
            <motion.div className="textContainer" style={{y}}>
              <h3>{item.company}</h3>
              <h2>{item.title}</h2>
              <p><b>Technologies:</b> {item.Technologies}</p>
              <p>{item.desc}</p>
              <button onClick={openDialog}>More Details</button>
            </motion.div>
            { isDialogOpen && (
              <ProjectDialog 
              className="projectDialog"
              isDialogOpen={isDialogOpen} 
              dialogText={item}
              setIsDialogOpen={setIsDialogOpen}
              />
            )
            } 
            </Col>
          </Row>
        </div>
      </section>
      </>
    );
  };

const Projects = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref, offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 50
    })

    return ( 
        <div className="projects" ref={ref}>
          <Row className="progress" gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24}>
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              {projectItems.map(item => (
                <Single item={item} key={item.id} /> 
              ))}
            </Col>
          </Row>
        </div>
        
    )
}

export default Projects;