import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {

    return (
        <div className="app-container">
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
                return (
                <div>
                    <p>{props.item.username}</p>
                    <CommentSection comment={comment}/>
                </div>
                )
            })} 
        </div>
    )
}

export default PostContainer;