import Image from 'next/image'
// import profilePic from '../../app/vk.jpg'
import { Row, Col } from "antd";
import { motion } from 'framer-motion';
import "./index.scss"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};

const silderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x:"-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Description = () => {
    return (
        <div className='description'>
            <div className='wrapper'>
                <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>HITESH DERKAR</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div variants={textVariants} className='buttons'>
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className='slidingTextContainer' variants={silderVariants} initial="initial" animate="animate">
                Student & Web Developer
            </motion.div>
            <div className='imageContainer'>
                <img src="/hero.png" alt="" />
            </div>
        </div>

        // <div>
        //     <Row>
        //         <Col span={10}>
        //             <Image
        //                 src={profilePic}
        //                 width={700}
        //                 height={700}
        //                 alt="Picture of the author" 
        //             />
        //         </Col>
                
        //         <Col span={12}>
        //             <h3>Software Engineer</h3>
        //             <h1>Hitesh Derkar</h1> 
        //              Experienced web developer with expertise in Reactjs and Nextjs. Currently pursuing a Master's in
        //             Computer and Systems Engineering at Technical University Ilmenau, with a strong command over
        //             front-end technologies and Adobe Experience Manager. Constantly upskilling with new tools and
        //             technologies. Delivered high-quality work within tight timelines while adhering to industry-standard
        //             coding and security practices. Strong communication and collaboration skills.
        //             <p>More about me '---{'>'}' </p>
        //         </Col>
        //     </Row>
        // </div>
    )
}

export default Description;