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
        <div className='wrapper'>
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
              {/* <Image 
              width={20}
              height={20}
                src="/facebook.png"
              /> */}
            </a>
            <a href="#">
             <img src="/instagram.png" alt="" />
              {/* <Image 
              width={20}
              height={20}
                src="/instagram.png"
              /> */}
            </a>
          </div>
        </div>
      </div>

    //    <div>
    //     <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    //   <Col className="gutter-row" span={6}>
    //     <div 
    //     >Projects</div>
    //   </Col>
    //   <Col className="gutter-row" span={6}>
    //     <div>Skills</div>
    //   </Col>
    //   <Col className="gutter-row" span={6}>
    //     <div>About</div>
    //   </Col>
    // </Row>
    //    </div>
    );
}
export default NavigationBar;