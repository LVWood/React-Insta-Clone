import React from 'react';
import Likes from './Likes/Likes';
import PostedComments from './PostedComments/PostedComments';
import AddComment from './AddComment/AddComment';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="comment-section">
            <Likes likes={props.likes}/>
            {props.comments.map(comment => {
                return <PostedComments username={comment.username} text={comment.text} />
            })}
            <AddComment />
        </div>
        )
}

export default CommentSection;