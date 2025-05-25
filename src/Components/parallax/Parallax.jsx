import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";


const Parallax = ({type}) => {
    const ref = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    });

    // Define ranges for desktop and mobile
    const yTextRange = isMobile ? ["-50%", "50%"] : ["-100%", "100%"];
    const yBgRange = isMobile ? ["-50%", "150%"] : ["-115%", "730%"]; // For stars (corrected to y-axis)
    const yPgRange = isMobile ? ["-20%", "100%"] : ["-40%", "300%"]; // For planets (y-axis)
    const xPgRange = isMobile ? ["0%", "5%"] : ["0%", "20%"]; // For planets (x-axis, assumed horizontal motion)


    const ytext = useTransform(scrollYProgress, [0, 1], yTextRange);
    const yBg = useTransform(scrollYProgress, [0, 1], yBgRange); // Stars y-motion
    const yPg = useTransform(scrollYProgress, [0, 1], yPgRange); // Planets y-motion
    const xPg = useTransform(scrollYProgress, [0, 1], xPgRange); // Planets x-motion (horizontal)
    
    return(
        <div className="parallax" ref={ref} style={{background:type === "services" ? 
            "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
        }}
        >
            <motion.h1 style={{y: ytext}}>
                {type === "services" ? "ABOUT ME" : "MY PROJECTS"}
            </motion.h1> 
            <motion.div className="mountains"></motion.div>
            <motion.div 
                className="planets" 
                style= {{
                    y: yPg,
                    x: xPg, 
                    backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,
                }} 
            ></motion.div>
            <motion.div style={{y: yBg}} className="stars"></motion.div> {/* Corrected to y: yBg */}
        </div>
    )
}

export default Parallax
