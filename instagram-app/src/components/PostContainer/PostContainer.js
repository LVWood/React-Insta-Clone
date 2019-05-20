import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader/PostHeader';
import MainImage from './MainImage/MainImage';
import CommentSection from './CommentSection/CommentSection';
import './PostContainer.css';


const PostContainer = props => {
    console.log("PostContainer props = ", props);

    return (
        <div className="post-container">
            <PostHeader thumbnail={props.post.thumbnailUrl} username={props.post.username} />
            <MainImage mainImage={props.post.imageUrl} />
            <CommentSection comments={props.post.comments} likes={props.post.likes}/>
        </div>
        )
}

PostContainer.propTypes = {
    props: PropTypes.arrayOf(PropTypes.object)
  };
  
  PostContainer.defaultProps = {
    dummyDate: []
  };

export default PostContainer;