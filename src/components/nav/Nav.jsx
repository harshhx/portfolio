import React from 'react';
import './nav.css'
import {AiOutlineHome, CgDetailsMore, GiSkills, ImOffice, AiOutlineProject, MdOutlineReviews, BsFillTelephoneFill} from "react-icons/all";
import {useState} from 'react'


const Nav =() =>{
    const [activeNav, setActiveNav] = useState('#')
    return(
        <nav>
            <div className='tooltip'>
                <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === "#"? 'active': ''}><AiOutlineHome/></a>
                <span className='tooltiptext'>Home</span>
            </div>

            <div className='tooltip'>
                <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === "#about"? 'active': ''}><CgDetailsMore/></a>
                <span className='tooltiptext'>About Me</span>
            </div>


            <div className='tooltip'>
                <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === "#skills"? 'active': ''}><GiSkills/></a>
                <span className='tooltiptext'>My Skills</span>
            </div>

            <div className='tooltip'>
                <a href="#qualifications" onClick={()=>setActiveNav('#qualifications')} className={activeNav === "#qualifications"? 'active': ''}><ImOffice/></a>
                <span className='tooltiptext'>qualifications</span>
            </div>

            <div className='tooltip'>
                <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === "#projects"? 'active': ''}><AiOutlineProject /></a>
                <span className='tooltiptext'>Projects</span>
            </div>
            <div className='tooltip'>
                <a href="#testimonials" onClick={()=>setActiveNav('#testimonials')} className={activeNav === "#testimonials"? 'active': ''}><MdOutlineReviews/></a>
                <span className='tooltiptext'>Testimonials</span>
            </div>
            {/*<div className='tooltip'>*/}
            {/*    <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === "#contact"? 'active': ''}><BsFillTelephoneFill/></a>*/}
            {/*    <span className='tooltiptext'>Contact</span>*/}
            {/*</div>*/}
        </nav>
    );
}

export default Nav
