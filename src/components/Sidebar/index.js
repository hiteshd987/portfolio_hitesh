import { useState, useRef, useEffect } from 'react'
import {motion} from "framer-motion"
import './index.scss'
import LinksComp from "./Links"
import ToggleButton from './ToggleButton'

const SideBar = () => {

    const [open,setOpen] = useState(false)
    const sidebarRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        const handleScroll = () => {
            setOpen(false);
        }

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setOpen])

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
        <motion.div className='sidebar' animate={open ? "open" : "closed"} ref={sidebarRef} >
            <motion.div className='bg' variants={variants}>
                <LinksComp setOpen={setOpen}/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
}

export default SideBar