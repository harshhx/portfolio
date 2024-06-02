import React from 'react';
import './about.css'
import ME from '../../assets/Harsh Gupta Blob.png'
import { FaAward } from "react-icons/all";

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know </h5>
            <h2>About me</h2>

            <div className="container about_container">
                <div className="about_me-image">
                    <img src={ME} alt="me" />
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
                        I have valuable experience as a Software Development Engineer (SDE 1) at Datacultr, where I specialized in building highly scalable backend applications.
                        I have also worked at Adani Digital Labs where I build applications which created a lot of impact for the organization. 
                        During my academic journey and professional career, I have excelled in creating and deploying REST APIs with Django Rest Framework, working on React.js and Next.js applications, and integrating these services with user-friendly components to efficiently manage high client traffic while ensuring the best user experience.

                        I am now actively seeking new opportunities to apply my knowledge and skills in software development and further contribute to the tech industry.
                    </p>

                    <a className='btn btn-primary' href="#contact"> Lets Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About
