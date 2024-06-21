import { useRef } from "react";
import "./index.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      className="parallax"
      ref={ref}>
      <motion.h1 style={{ y: yText }}>
        Projects
      </motion.h1>
      <motion.img
        className="project-bg-img"
        src="/projectsbg.jpg"
        alt="Projects Background"
        style={{ y: yBg }}
      />
      {/* <motion.div className="mountains"></motion.div> */}
    </div>
  );
};

export default Parallax;