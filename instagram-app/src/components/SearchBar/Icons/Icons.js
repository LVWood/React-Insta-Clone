import React from 'react';
import compass from './compass.png';
import open_heart from './open_heart.png';
import person from './person.png';
import './Icons.css';

const Icons = () => {
    return (
        <div className="right-logos">
            <img src={compass} alt='' />
            <img src={open_heart} alt='' />
            <img src={person} alt='' /> 
        </div>
    )
}

export default Icons;