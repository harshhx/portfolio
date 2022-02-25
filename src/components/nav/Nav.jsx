import React from 'react';
import './nav.css'
import {AiOutlineHome} from "react-icons/all";
import {useState} from 'react'

const Nav =() =>{
    const [activeNav, setActiveNav] = useState('#')
    return(
        <nav>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === "#"? 'active': ''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === "#about"? 'active': ''}><AiOutlineHome/></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === "#experience"? 'active': ''}><AiOutlineHome/></a>
            {/*<a href="#services"><AiOutlineHome/></a>*/}
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === "#contact"? 'active': ''}><AiOutlineHome/></a>
        </nav>
    );
}

export default Nav
