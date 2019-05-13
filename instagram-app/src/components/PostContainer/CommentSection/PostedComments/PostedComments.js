import React from 'react';
import './PostedComments.css';

const PostedComments = props => {
    return (
        <div className='posted-comments'>
             <p><strong>{props.username}</strong></p>
             <p>{props.text}</p>
        </div>
    )
}

export default PostedComments;