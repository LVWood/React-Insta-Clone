import React from 'react';
import './MainImage.css';

const MainImage = props => {
    return (
        <div className="main-image">
            <img src={props.mainImage} alt=''></img>
        </div>
    )
    
}

export default MainImage;