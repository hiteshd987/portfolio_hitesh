
import Link from "next/link";
import { Row, Col } from "antd";
import NavigationBar from "../NavigationBar"
import styles from '../comp.module.css'
import Description from "../Description";
import Projects from "../Projects";
import Skills from "../Skills";
import About from "../About";
import Parallax from "../Parallax";


const HomePageComp = () => {
    return (
        <div>
            <section id="HomePage">
                <NavigationBar />
                <Description /> 
            </section>
            <section id="Projects"><Parallax type="projects" /></section>
            <Projects />
            {/* <section id="Skills"><Parallax type="skills" /></section>
            <Skills /> */}
            <section id="About"><About /></section>
            {/* <section className={styles.section}><NavigationBar /> </section>
            <section className={styles.section}><Description /></section>
            <section className={styles.section}><Projects /></section>
            <section className={styles.section}><Skills /></section> */}
        </div>

    //     <>
    //         <div>
    //             <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    //              <Col className="gutter-row" span={10}>
    //                 <div><NavigationBar /></div>
    //             </Col>
    //             <Col className="gutter-row" span={6}>
    //                 <div>Social Media</div>
    //             </Col>
    //             </Row>
    //         </div>

    //         <div>
    //             <Row>
    //                 <Col span={24}>
    //                     <div className={styles.content}>
    //                     <Description />
    //                     </div>
    //                 </Col>
    //             </Row>
    //             <Row>
    //             <h1 className={styles.heading}>Projects</h1>
    //                 <Col span={24}>
    //                     <div className={styles.content}>
    //                     <Projects />
    //                     </div>
    //                 </Col>
    //             </Row>
    //                 <Row>
    //                 <h1 className={styles.heading}>Skills</h1>
    //                 <Col span={24}>
    //                     <div className={styles.content}>
    //                     <Skills />
    //                     </div>
    //                 </Col>
    //                 </Row>
    //                 <Row>
    //                 <h1 className={styles.heading}>Educational Details </h1>
    //                 <Col span={6}>
    //                     <div className={styles.content}>
    //                         Carousel
    //                     </div>
    //                 </Col>
    //             </Row>
    //         </div>
    // </>
    )
}

export default HomePageComp;