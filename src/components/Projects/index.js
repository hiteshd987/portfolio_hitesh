import { useRef } from "react";
import "./index.scss"
// import {Row, Col, Card, Space} from 'antd'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React App",
        img: "/fleet.jpg",
        company: "Agathsya technology Pvt. Ltd.",
        desc: "Developed a fleet management platform for Dubai Technology to handle clients' requests Decided to build a common form control library using the Ant Design to reuse in different independent modules/projects"
    },
    {
        id: 2,
        title: "React Ecommerce",
        img: "/fleet.jpg",
        company: "Cybage Software Pvt. Ltd.",
        desc: "Developed a fleet management platform for Dubai Technology to handle clients' requests Decided to build a common form control library using the Ant Design to reuse in different independent modules/projects"
    },
    {
        id: 3,
        title: "AEM app",
        img: "/fleet.jpg",
        company: "Cybage Software Pvt. Ltd.",
        desc: "Developed a fleet management platform for Dubai Technology to handle clients' requests Decided to build a common form control library using the Ant Design to reuse in different independent modules/projects"
    }
]

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
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
              <p>{item.desc}</p>
              <button>More Details</button>
            </motion.div>
          </div>
        </div>
      </section>
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
            {items.map(item => (
               <Single item={item} key={item.id} /> 
            ))}
        </div>
    )
}

export default Projects;

// import "./index.scss"
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// const Projects = () => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//       target: ref,
//       offset: ["end end", "start start"]
//   });

//   const scaleX = useSpring(scrollYProgress, {
//       stiffness: 200,
//       damping: 50
//   });

//   return ( 
//       <div className="projects" ref={ref}>
//           <div className="container">
//               <div className="progress">
//                   <h1>Featured Works</h1>
//                   <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//               </div>
//               {items.map(item => (
//                  <Single item={item} key={item.id} scrollYProgress={scrollYProgress} /> 
//               ))}
//           </div>
//       </div>
//   );
// };

// const Single = ({ item, scrollYProgress }) => {
//   const ref = useRef();

//   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

//   return (
//       <section>
//           <div className="company">
//               {item.company}
//           </div>
//           <div className="wrapper">
//               <div className="imageContainer" ref={ref}>
//                   <img src={item.img} alt="" />
//               </div>
//               <motion.div className="textContainer" style={{ y }}>
//                   <h2>{item.title}</h2>
//                   <p>{item.desc}</p>
//                   <button>More Details</button>
//               </motion.div>
//           </div>
//       </section>
//   );
// };

// export default Projects;