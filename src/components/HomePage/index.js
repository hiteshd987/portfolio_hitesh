
import SideBar from "../Sidebar";
import Description from "../Description";
import Projects from "../Projects";
import Skills from "../Skills";
import Timeline from "../Timeline";
import Parallax from "../Parallax";
import Contact from "../Contact";

const HomePageComp = () => {
  return (
    <div>
      <section id="Overview">
        <SideBar />
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
