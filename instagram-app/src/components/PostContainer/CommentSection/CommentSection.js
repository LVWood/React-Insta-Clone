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
            comment: this.props.comments.text,
            user: this.props.comments.username
        }
    }

    handleChanges = e => {
        this.setState({
            comment: e.target.value,
            user: e.target.value 
        })
    }

    addComment = e => {
    const newComment = e.target.value
    const newUser = e.target.value
        e.preventDefault();
        this.setState({
            comment: {...this.state.comment,  newComment},
            user: {...this.state.user, newUser}
        });
        this.setState({
            comment: '',
            user: ''
        })
    }

    render() {
        return (
            <div className="comment-section">
                <Likes likes={this.props.likes}/>
                {this.props.comments.map(comment => {
                    return <PostedComments username={comment.username} text={comment.text} />
                })}
                <AddComment handleChanges={this.handleChanges} addComment={this.addComment}/>
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