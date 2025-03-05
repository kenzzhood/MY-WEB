import "./navbar.scss";
import {motion} from "framer-motion"
import Sidebar from "../sidebar/sidebar";
import React from 'react';  

const Navbar = () => {
    return (
        <div className="navbar">
        {/*Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span className= "Logo" initial=
            {{opacity: 0, scale: 0.5}} 
            animate={{opacity: 1, scale: 1}} 
            transition={{ duration: 0.5 }}><img src="/G-removebg-preview.png" alt ="" /></motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/goutham-srinath-380446288/" target="_blank" rel="noopener noreferrer">
                    <img src="/techlogo/65a6560f146646659dbdefe7ae0c82ac.png" alt="" style={{ transform: 'scale(1.27)' }} />
                </a>
                <a href="https://github.com/kenzzhood" target="_blank" rel="noopener noreferrer">
                    <img src="/transparent-github-icon-silhouette-of-cat-with-curled-body-and-open-mouth65cb0db59501c4.8162897917078061336103.png" alt="" style={{ transform: 'scale(1.3)' }} />
                </a>
                <a href="https://www.instagram.com/_goutham.srinath_/" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram.png" alt="" style={{ transform: 'scale(1)' }} />
                </a>

            </div>
        </div>
        </div>
    )
}

export default Navbar;
