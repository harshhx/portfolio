import React from 'react';
import './about.css'
import ME from '../../assets/Harsh Gupta Blob.png'
import {FaAward} from "react-icons/all";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import {useInView} from "react-intersection-observer";

const About = () => {
    const isMobile = window.innerWidth < 768;
    let variant1 = {}
    let variant2 = {}
    // if (isMobile) {
    //     variant1 = {
    //         initial: {x: -100, opacity: 0},
    //         whileInView: {x: 0, opacity: 1, transition: {type: "spring"}},
    //         viewport: {once: false, amount: 0.5}
    //     }
    //     variant2 = {
    //         initial: {x: 100, opacity: 0},
    //         whileInView: {x: 0, opacity: 1, transition: {type: "spring"}},
    //         viewport: {once: false, amount: 0.5}
    //     }
    // }


        variant1 = {
            initial: {x: -50, opacity: 0},
            whileInView: {x: 0, opacity: 1, transition: {type: "spring"}},
            viewport: {once: false, amount: 0.5}
        }
        variant2 = {
            initial: {x: 50, opacity: 0},
            whileInView: {x: 0, opacity: 1, transition: {type: "spring"}},
            viewport: {once: false, amount: 0.5}
        }

    return (
        <section id='about'>
            <h5>Get to Know </h5>
            <h2>About me</h2>

            <div className="container about_container"
            >
                <motion.div className="about_me-image"
                            // initial={{x: -100, opacity: 0}}
                            // whileInView={{x: 0, opacity: 1, transition: {type: "spring"}}}
                            // viewport={{once: false, amount: 0.5}}
                            {...variant1}
                >
                    <img src={ME} alt="me"/>
                </motion.div>
                <motion.div className="about_content"
                            // initial={{x: 100, opacity: 0}}
                            // whileInView={{x: 0, opacity: 1, transition: {type: "spring"}}}
                            // viewport={{once: false, amount: 0.5}}
                            {...variant2}
                >
                    {/*<div className="about_cards">*/}
                    {/*    <article className='about_card'>*/}
                    {/*        <FaAward className='about_icon'/>*/}
                    {/*        <h5>Experience</h5>*/}
                    {/*        <small>something</small>*/}
                    {/*    </article>*/}
                    {/*    <article className='about_card'>*/}
                    {/*        <FaAward className='about_icon'/>*/}
                    {/*        <h5>Experience</h5>*/}
                    {/*        <small>something</small>*/}
                    {/*    </article>*/}
                    {/*</div>*/}
                    <p>
                        I am currently pursuing my under graduation in Information Technology Engineering from Maharaja
                        Agrasen Institute of Technology in New Delhi. I mostly engage in Backend Development with
                        satisfactory knowledge of frontend frameworks. I am a keen learner ready to learn new and
                        exciting technologies.
                    </p>

                    <a className='btn btn-primary' href="#contact"> Lets Talk</a>
                </motion.div>
            </div>
        </section>
    );
}

export default About
