import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {SiLeetcode} from "react-icons/all";

const HeaderSocials=()=>{
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/harshhx/" target='_blank'><BsLinkedin /></a>
            <a href="https://leetcode.com/harshhx/" target='_blank'><SiLeetcode /></a>
            <a href="https://github.com/harshhx" target='_blank'><BsGithub /></a>
        </div>
    );
}

export default HeaderSocials;