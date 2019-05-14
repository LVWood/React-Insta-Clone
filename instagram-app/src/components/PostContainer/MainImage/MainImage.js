import React from 'react';
import PropTypes from 'prop-types';
import './MainImage.css';

const MainImage = props => {
    return (
        <div className="main-image">
            <img src={props.mainImage} alt=''></img>
        </div>
    )
    
}

MainImage.propTypes = {
    props: PropTypes.string
}

MainImage.defaultProps = {
    props: ''
  };

export default MainImage;