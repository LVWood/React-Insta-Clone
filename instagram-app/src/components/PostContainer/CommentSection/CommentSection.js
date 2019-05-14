import React from 'react';
import Likes from './Likes/Likes';
import PostedComments from './PostedComments/PostedComments';
import AddComment from './AddComment/AddComment';
import './CommentSection.css';
import PropTypes from 'prop-types';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
        currentComment: {username: this.props.comments.username, text: this.props.comments.text}
        }
    }

    handleInput = e => {
        this.setState({
            currentComment: {...this.state.currentComment, [e.target.name]: e.target.value }
        });
    }

    addComment = e => {
        e.preventDefault();
        console.log('in addComment, log button clicked');
        const newComment = this.state.currentComment
        const comments = [...this.state.comments, newComment]
        this.setState({
            comments: comments,
            currentComment: { username: '', text: ''}
        });
    }

    render() {
        return (
            <div className="comment-section">
                <Likes likes={this.props.likes}/>
                {this.state.comments.map(comment => {
                    return <PostedComments username={comment.username} text={comment.text} />
                })}
                <AddComment 
                    handleInput={this.handleInput} 
                    addComment={this.addComment} 
                    text={this.state.currentComment.text} 
                    username={this.state.currentComment.username}/>
            </div>
            )
    }
}


CommentSection.propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape({
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.string)
    }))
  };
  
  CommentSection.defaultProps = {
    props: []
  };

export default CommentSection;