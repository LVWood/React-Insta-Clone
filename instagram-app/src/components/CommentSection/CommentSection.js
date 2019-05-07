import React from 'react';
import PropTypes from 'prop-types';


import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props
        }
    }

    addNewComment(event, index) {
        console.log("add New Comment is here.");
    }

    render() {
        return (
            <div className="comment-section">
                <p><strong>{this.state.comments.username}</strong></p>
                <p>{this.state.comments.text}</p>
            </div>
            
        )
    }
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};

export default CommentSection;