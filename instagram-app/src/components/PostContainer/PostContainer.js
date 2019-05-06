import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import './PostContainer.css';
import App from '../../App';

const PostContainer = props => {

    return (
        <div className="post-container">
            <div className="post-header">
                <img src={props.item.thumbnailUrl} alt=""></img>
                <p className="username"><strong>{props.item.username}</strong></p>
            </div>
            <div className="main-image">
                <img src={props.item.imageUrl} alt=""></img>
            </div>
            <div className="likes">
                <div className="reaction-icons">
                </div>
                <p>{props.item.likes} likes</p>

            </div>
            {props.item.comments.map(comment => {
                return <CommentSection 
                    comment={comment}
                    key={comment.id} 
                    text={comment.text} 
                    username={comment.username}
                />
            })} 
            <div className="comment-input">
                <p>Add a comment...</p>
                <input type="hidden" value=""></input>
        </div>
        </div>
    )
    PostContainer.propTypes = {
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
}
}

export default PostContainer;