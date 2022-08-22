import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from "react-icons/all";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Skills = () => {

    let variant1 = {
        initial: {x: -50, opacity: 0},
        whileInView: {x: 0, opacity: 1, transition: {type: "spring"}},
        viewport: {once: false, amount: 0.5}
    }
    let variant2 = {
        initial: {x: 50, opacity: 0},
        whileInView: {x: 0, opacity: 1, transition: {type: "spring"}},
        viewport: {once: false, amount: 0.5}
    }
    return (
        <section id="skills">
            <h5>I have worked on these</h5>
            <h2>Skills</h2>
            <div className="container experience_container">
                <motion.div className="experience_frontend" {...variant1}>
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>HTML</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>CSS</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>JavaScript</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>BootStrap</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Tailwind</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>React.js</h4>
                        </article>
                    </div>
                </motion.div>
                <motion.div className="experience_backend" {...variant2}>
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Django</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Django rest Framework</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>MySql</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>FireBase</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Python</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_detail-icon'/>
                            <h4>Node.js</h4>
                        </article>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}

export default Skills