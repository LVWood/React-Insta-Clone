import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    console.log(props);
    return (
        <div className="comment-section">
            <p><strong>{props.comment.username}</strong></p>
            <p>{props.comment.text}</p>
        </div>
        
    )
}

export default CommentSection;