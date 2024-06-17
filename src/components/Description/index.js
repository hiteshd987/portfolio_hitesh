import Image from 'next/image'
// import profilePic from '../../app/vk.jpg'
import { motion } from 'framer-motion';
import "./index.scss"
import { Row, Col } from 'antd';
import Link from 'next/link';

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
        <>
        {/* <div className='description'>
                <div className='wrapper'>
                <motion.div className='profile-container' variants={textVariants} initial="initial" animate="animate">
                    <motion.h1 variants={textVariants}>HITESH DERKAR</motion.h1>
                    <motion.h2 variants={textVariants}>FrontEnd Developer/Student</motion.h2>
                    <motion.div variants={textVariants} className='profile-desc-container'>
                    <motion.p variants={textVariants}>
                        Experienced web developer with expertise in Reactjs and Nextjs. Currently pursuing a Master's in
                        Computer and Systems Engineering at Technical University Ilmenau, with a strong command over
                        front-end technologies and Adobe Experience Manager.
                    </motion.p>
                    </motion.div>
                    <motion.div variants={textVariants} className='profile-social-container'>
                        <a href="https://github.com/hiteshd987" className="profile-social-anchor">
                                <img src="/githubwhite.png" alt="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/" className="profile-social-anchor">
                                <img src="/linkedin.png" alt="Linkedin" />
                        </a>    
                    </motion.div>
                    <motion.div className='profile-img-container'>                          
                    <motion.img variants={textVariants} src="/profile.jpg" alt="" className="profile-img" />
                    </motion.div>
                    <motion.img 
                    variants={textVariants} 
                    animate="scrollButton" 
                    src="/scroll.png" alt="" className="scroll-img" />
                </motion.div>
                </div>
            <motion.div className='slidingTextContainer' variants={silderVariants} initial="initial" animate="animate">
                Student & FrontEnd Developer
            </motion.div>
        </div> */}

        <div className='description'>
            <Row gutter={[16, 16]} justify='center' className='profile-container-row'>
                <Col xs={24} sm={24} md={24} lg={24} align="middle" className='profile-container-col'>
                <motion.div className='profile-container' variants={textVariants} initial="initial" animate="animate">
                    <Col xs={24} sm={24} md={24} lg={24} className='profile-element'>
                        <motion.h1 variants={textVariants}>HITESH DERKAR</motion.h1>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} className='profile-element'>
                        <motion.h2 variants={textVariants}>FrontEnd Developer/Student</motion.h2>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} className='profile-element'>
                        <motion.div variants={textVariants} className='profile-desc-container'>
                            <motion.p variants={textVariants}>
                                Experienced web developer with expertise in Reactjs and Nextjs. Currently pursuing a Master's in
                                Computer and Systems Engineering at Technical University Ilmenau, with a strong command over
                                front-end technologies and Adobe Experience Manager.
                            </motion.p>
                        </motion.div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} className='profile-element profile-social-container'>
                        <motion.div variants={textVariants} className='profile-social-container'>
                            <a href="https://github.com/hiteshd987" 
                            // className='profile-social-container'
                            >
                                    <img src="/githubwhite.png" alt="Github" />
                            </a>
                            <a href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/" 
                            // className='profile-social-container'
                            >
                                    <img src="/linkedin.png" alt="Linkedin" />
                            </a>    
                        </motion.div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} className='profile-element profile-img-container'>
                        <motion.div className='profile-img-container'>                          
                        <motion.img variants={textVariants} src="/profile.jpg" alt="" className="profile-img" />
                        </motion.div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} className='profile-element' >
                        <motion.img 
                        variants={textVariants} 
                        animate="scrollButton" 
                        src="/scroll.png" alt="" className="scroll-img" />
                    </Col>
                </motion.div> 
                </Col>
            </Row>
        </div>
        </>
        
    )
}

export default Description;