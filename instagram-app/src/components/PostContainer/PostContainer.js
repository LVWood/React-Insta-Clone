import React from 'react';
import PostHeader from './PostHeader/PostHeader';
import MainImage from './MainImage/MainImage';
import CommentSection from './CommentSection/CommentSection';



class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           post: props
        }
    }




    render() {
        console.log("from PostContainer: ", this.props);
        return (
            <div className="post-container">
                <PostHeader thumbnail={this.props.thumbnailUrl} username={this.props.username} />
                <MainImage mainImage={this.props.imageUrl} />
                <CommentSection comments={this.props.comments} />
            </div>
            )
    }
}

export default PostContainer;