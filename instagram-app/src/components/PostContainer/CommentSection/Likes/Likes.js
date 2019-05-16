import React from 'react';
import open_heart from './open_heart.png';
import open_heart_red from './open_heart._red.png';
import quotebubble from './quotebubble.png';
import './Likes.css';

const Likes = props => {
    return (
        <div className="likes">
            <div className="icons">
                
                <img onClick={props.toggleClick} className="icons" src={open_heart} alt="" />
                <img onClick={props.toggleCommentForm} className="icons" src={quotebubble} alt="" />
            </div>
            <p><strong>{props.likes} likes </strong></p>
        </div>   
    )
}

export default Likes;