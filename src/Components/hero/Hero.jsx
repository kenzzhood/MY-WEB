import "./hero.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import React, { useState, useRef, useEffect } from "react";

const Hero = () => {
    const [pupilTop, setPupilTop] = useState("50%");
    const [pupilLeft, setPupilLeft] = useState("50%");
    const imageContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (event) => {
        if (!imageContainerRef.current || isMobile) {
            return;
        }

        const containerRect = imageContainerRef.current.getBoundingClientRect();
        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;

        const pupilX = (mouseX / containerRect.width) * 100;
        const pupilY = (mouseY / containerRect.height) * 100;

        setPupilLeft(`${Math.min(Math.max(pupilX, 30), 70)}%`);
        setPupilTop(`${Math.min(Math.max(pupilY, 30), 70)}%`);
    };

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            }
        },
    };

    const SliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            },
        },
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>GOUTHAM SRINATH</motion.h2>
                    <motion.h1 variants={textVariants}>
                        <Typewriter
                            options={{
                                strings: [
                                    "AI&ML",
                                    "AR&VR",
                                    "GenAI"
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 80,
                            }}
                        /> Developer
                    </motion.h1>

                    <motion.div className="buttons">
                        <motion.button variants={textVariants} className="btn btn--outline">
                            <a href="https://drive.google.com/file/d/1EIKbd_CA2BVtS_lUbemYIAKUT5WMg0Ha/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </motion.button>
                        <motion.a variants={textVariants} className="btn btn--outline" href="#Contact">Contact</motion.a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <div 
                className="imageContainer" 
                ref={imageContainerRef} 
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                    setPupilLeft("50%");
                    setPupilTop("50%");
                }}
            >
                <div className="image-and-eyes">
                    <img src="/ggas.png" alt="" />
                    <div className="eyes">
                        <div className="eye">
                            <div
                                className="pupil"
                                style={{
                                    top: pupilTop,
                                    left: pupilLeft,
                                    transform: "translate(-50%, -50%)",
                                }}
                            ></div>
                        </div>
                        <div className="eye">
                            <div
                                className="pupil"
                                style={{
                                    top: pupilTop,
                                    left: pupilLeft,
                                    transform: "translate(-50%, -50%)",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            {!isMobile && (
                <motion.div 
                    className="slidingTextContainer" 
                    variants={SliderVariants} 
                    initial="initial" 
                    animate="animate"
                >
                    AI&ML Developer AR&VR Developer
                </motion.div>
            )}
        </div>
    );
};

export default Hero;