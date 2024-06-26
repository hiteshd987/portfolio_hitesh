import { useState } from 'react'
import {motion} from "framer-motion"
import './index.scss'
import LinksComp from "./Links"
import ToggleButton from './ToggleButton'

const SideBar = () => {

    const [open,setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        }
    }

    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.div className='bg' variants={variants}>
                <LinksComp setOpen={setOpen}/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
}

export default SideBar