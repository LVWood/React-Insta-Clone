import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../../AddComment/AddComment';
import Likes from '../Likes/Likes';
import PropTypes from 'prop-types';


import './PostContainer.css';

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
            <Likes likes={props.item.likes}/>
            {props.item.comments.map(comment => {
                return <CommentSection 
                    comment={comment}
                    key={comment.id} 
                    text={comment.text} 
                    username={comment.username}
                />
            })} 
            <div className="comment-input">
                <AddComment />
        </div>
        </div>
    )
}

PostContainer.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object),
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
    })
};

export default PostContainer;