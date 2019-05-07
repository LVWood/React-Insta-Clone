import React from 'react';

import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props,
            username: this.props.username,
            text: this.props.text,
            newComment: "",
            newUser: "",

        }
    }

    handleChange(e) {
        this.setState({
            newComment: e.target.value,
            newUser: e.target.value
        })
    }

    addNewComment = (e, index) => {
        e.preventDefault();
        this.setState = ({
            comments: [...this.state.comments, e.target.value]

        })
    }


    render() {
        return (
            <div className="comment-component">
                <div className="comment-section">
                    <p><strong>{this.state.comments.username}</strong></p>
                    <p>{this.state.comments.text}</p>
                </div>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};

export default CommentSection;