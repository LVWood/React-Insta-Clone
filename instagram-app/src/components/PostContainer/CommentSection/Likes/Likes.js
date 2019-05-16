import React from 'react';
import open_heart from './open_heart.png';
import open_heart_red from './open_heart._red.png';
import quotebubble from './quotebubble.png';
import { LikesDiv, IconDiv, Icon } from '../CommentSectionStyles'

const Likes = props => {
    return (
        <LikesDiv > 
            <IconDiv > 
                <Icon onClick={props.toggleClick} className="icons" src={open_heart} alt="" /> 
                <Icon onClick={props.toggleCommentForm} className="icons" src={quotebubble} alt="" />
            </IconDiv >
            <p><strong>{props.likes} likes </strong></p>
        </LikesDiv >   
    )
}

export default Likes;