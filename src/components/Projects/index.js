import { useRef, useState } from "react";
import "./index.scss"
// import {Row, Col, Card, Space} from 'antd'
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
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const openDialog = () => {
      // setDialogText(item.desc);
      setIsDialogOpen(true);
    };

    return (
      <>
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} 
              alt="" />
            </div>
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
          </div>
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
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {projectItems.map(item => (
               <Single item={item} key={item.id} /> 
            ))}
        </div>
    )
}

export default Projects;