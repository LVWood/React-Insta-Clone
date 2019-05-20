import React from 'react';
import compass from './compass.png';
import open_heart from './open_heart.png';
import person from './person.png';
import SearchBarStyles, { RightLogos, Logos } from '../SearchBarStyles'

const Icons = () => {
    return (
        <RightLogos>
            <Logos src={compass} alt='' />
            <Logos src={open_heart} alt='' />
            <Logos src={person} alt='' /> 
        </RightLogos>
    )
}

export default Icons;