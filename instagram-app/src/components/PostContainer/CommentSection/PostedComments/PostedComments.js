import React from 'react';
import { PostedCommentsDiv, CommentsParagraph } from '../CommentSectionStyles'

const PostedComments = props => {
    return (
        <PostedCommentsDiv >
             <CommentsParagraph><strong>{props.username}</strong></CommentsParagraph>
             <CommentsParagraph>{props.text}</CommentsParagraph>
        </PostedCommentsDiv >
    )
}

export default PostedComments;