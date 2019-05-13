import React from 'react';

const MainImage = props => {
    console.log("props from MainImage: ", props);
    return <img src={props.mainImage} alt=''></img>
}

export default MainImage;