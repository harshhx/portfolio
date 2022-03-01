import React from 'react'
import CV from '../../assets/CV.pdf'
import {BsDownload} from "react-icons/all";
const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn btn-primary'> Download CV  <BsDownload style={{marginLeft:"0.5rem"}}/></a>
            <a href="#contact" className='btn'>Lets Talk</a>
        </div>
    );
}

export default CTA;