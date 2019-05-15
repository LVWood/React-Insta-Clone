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
            currentComment: {username: this.props.comments.username, text: this.props.comments.text},
            likesCounter: this.props.likes,
            click: true,
            showForm: false
        }
    }

    handleInput = e => {
        this.setState({
            currentComment: {...this.state.currentComment, [e.target.name]: e.target.value }
        });
    }

    toggleClick = () => {
        this.setState({ click: !this.state.click })
        if (this.state.click === true) {
            this.setState({ likesCounter: this.state.likesCounter + 1});
        } else {
            this.setState({ likesCounter: this.state.likesCounter - 1});
        }
    }
    
    addComment = e => {
        e.preventDefault();
        const newComment = this.state.currentComment
        const comments = [...this.state.comments, newComment]
        this.setState({
            comments: comments,
            currentComment: { username: '', text: ''}
        });
    }

    toggleCommentForm = () => {
        this.setState({ showForm: !this.state.showForm})
    }

    render() {
        return (
            <div className="comment-section">
                <Likes 
                    likes={this.state.likesCounter}  
                    toggleClick={this.toggleClick}
                    toggleCommentForm={this.toggleCommentForm} />
                    
                {this.state.comments.map(comment => {
                    return <PostedComments 
                    username={comment.username} 
                    text={comment.text} />
                })}
                <AddComment 
                    handleInput={this.handleInput} 
                    addComment={this.addComment} 
                    text={this.state.currentComment.text} 
                    username={this.state.currentComment.username} 
                    toggleCommentForm={this.toggleCommentForm}
                    showForm={this.state.showForm} />
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