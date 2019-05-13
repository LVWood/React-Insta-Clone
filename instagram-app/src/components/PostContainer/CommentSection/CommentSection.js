import React from 'react';
import Likes from './Likes/Likes';
import PostedComments from './PostedComments/PostedComments';
import AddComment from './AddComment/AddComment';

const CommentSection = () => {
    return (
        <div className="comment-section">
            <Likes />
            <PostedComments />
            <AddComment />
        </div>
        )
}

export default CommentSection;