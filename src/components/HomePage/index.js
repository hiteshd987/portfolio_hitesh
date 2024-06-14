
// import Link from "next/link";
// import { Row, Col } from "antd";
// import NavigationBar from "../NavigationBar"
// import styles from '../comp.module.css'
// import Description from "../Description";
// import Projects from "../Projects";
// import Skills from "../Skills";
// import Timeline from "../Timeline";
// import Parallax from "../Parallax";
// import Contact from "../Contact";


// const HomePageComp = () => {
//     return (
//         <div>
//             <section id="HomePage">
//                 <NavigationBar />
//                 <Description /> 
//             </section>
//             <section id="Projects"><Parallax type="projects" /></section>
//             <Projects />
//             {/* <section id="Skills"><Parallax type="skills" /></section> */}
//             <section id="Skills"><Skills /></section>
//             <section id="Timeline"><Timeline /></section>
//             <section id="Contact"><Contact /></section>
//             {/* <section className={styles.section}><Description /></section>
//             <section className={styles.section}><Projects /></section>
//             <section className={styles.section}><Skills /></section> */}
//         </div>
//     )
// }


// // const HomePageComp = () => {
// //     return (
// //         <div>
// //             <section id="HomePage">
// //                 <NavigationBar />
// //                 <Description /> 
// //             </section>
// //             <section id="Projects"><Parallax type="projects" /></section>
// //             <Projects />
// //             <section id="Skills"><Parallax type="skills" /></section>
// //             <Skills />
// //             <section id="Timeline"><Timeline /></section>
// //             <section id="Contact"><Contact /></section>
// //             {/* <section className={styles.section}><Description /></section>
// //             <section className={styles.section}><Projects /></section>
// //             <section className={styles.section}><Skills /></section> */}
// //         </div>
// //     )
// // }

// export default HomePageComp;

// ************ new ************

import Link from "next/link";
import { Row, Col } from "antd";
import NavigationBar from "../NavigationBar"
import styles from '../comp.module.css'
import Description from "../Description";
import Projects from "../Projects";
import Skills from "../Skills";
import Timeline from "../Timeline";
import Parallax from "../Parallax";
import Contact from "../Contact";

const HomePageComp = () => {
  return (
    <div>
      <section id="HomePage">
        <NavigationBar />
        <Description />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Projects />
      <section id="Skills">
        <Skills />
      </section>
      <section id="Timeline">
        <Timeline />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePageComp;
