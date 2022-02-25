import React from 'react';
import './about.css'
import ME from '../../assets/Harsh Gupta Blob.png'
import {FaAward} from "react-icons/all";

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know </h5>
            <h2>About me</h2>

            <div className="container about_container">
                <div className="about_me-image">
                    <img src={ME} alt="me"/>
                </div>
                <div className="about_content">
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
                </div>
            </div>
        </section>
    );
}

export default About
