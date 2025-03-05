import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
              target:ref,
              offset:["start start", "end start"]
    });

    


    const yBg = useTransform(scrollYProgress, [0, 1], ["-120%", "750%"])
    const yPg = useTransform(scrollYProgress, [0, 1], ["-40%", "300%"])
    const xPg = useTransform(scrollYProgress, [0, 1], ["2%", "2%"])
    const ytext = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"])

    return(
        <div className="parallax" style={{background:type == "services" ? 
            "linear-gradient(180deg, #111132, #0c0c1d)"
        : "linear-gradient(180deg, #111132, #505064)",
        }}
        >
        <motion.h1 style={{y: ytext}}>
            {type === "services" ? "ABOUT ME" : "MY PROJECTS"}</motion.h1> 
        <motion.div className="mountains" ></motion.div>
        <motion.div className="planets" style= {{y: yPg,
        x: xPg,
            backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,

        }} ></motion.div>
        <motion.div style={{x: yBg}} className="stars" ></motion.div>
        </div>
    )
    
}

export default Parallax
