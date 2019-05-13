import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <img src={props.thumbnailUrl} alt=''></img>
            <p><strong>{props.username}</strong></p>
        </div>
    )
}

export default PostHeader;