import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {SiLeetcode} from "react-icons/all";

const Footer= () =>{
    return(
        <footer>
            <a href="#" className='footer_logo'> Harsh Gupta </a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#qualifications">Qualifications</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/harshhx/" target='_blank'><BsLinkedin /></a>
                <a href="https://leetcode.com/harshhx/" target='_blank'><SiLeetcode /></a>
                <a href="https://github.com/harshhx" target='_blank'><BsGithub /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Harsh Gupta. All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer