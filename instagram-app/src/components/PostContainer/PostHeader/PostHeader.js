import React from 'react';
import './PostHeader.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img src={props.thumbnail} alt=''></img>
            <p><strong>{props.username}</strong></p>
        </div>
    )
}

export default PostHeader;