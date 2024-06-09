// import { Col, Divider, Row } from 'antd';
// import Link from 'next/link';
// import Image from 'next/image';
import SideBar from "../Sidebar";
import "./index.scss"
import {motion} from "framer-motion"

const NavigationBar = () => {
    return (

      <div className='navbar'>
        <SideBar />
        {/* <div className='wrapper'>
          <motion.span 
          initial={{ opacity:0, scale:0.5 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration: 0.5 }}
          >
            Hitesh
          </motion.span>
          <div className='social'>
            <a href="#">
              <img src="/facebook.png" alt="" />
            </a>
            <a href="#">
             <img src="/instagram.png" alt="" />
            </a>
          </div>
        </div> */}
      </div>

    );
}
export default NavigationBar;