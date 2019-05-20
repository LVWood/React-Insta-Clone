import React from 'react';
import PropTypes from 'prop-types';
import './PostHeader.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img src={props.thumbnail} alt=''></img>
            <p><strong>{props.username}</strong></p>
        </div>
    )
}

PostHeader.propTypes = {
    props: PropTypes.arrayOf(PropTypes.string)
  };
  
PostHeader.defaultProps = {
    props: []
  };

export default PostHeader;