import React from 'react';
import Instagram_simple_icon from './Instagram_simple_icon.png'; 
import Instagram_text_logo from './Instagram_text_logo.png'
import './InstagramLogos.css';

const InstagramLogos = () => {
    return (
    <div className="left-logos">
        <img className="logo" src={Instagram_simple_icon} alt=''></img>
        <img className="text" src={Instagram_text_logo} alt=''></img>
    </div>
    )
}

export default InstagramLogos;