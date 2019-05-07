import React from 'react';
import './AddComment.css'

const AddComment = props => {
    return (
        <form className="comment-form" onSubmit={props.addNewItem}>
            <p><strong>Add a comment...</strong></p>
            <input type="text" placeholder="username" value={props.newUser}></input>
            <input type="text" placeholder="comment" value={props.newComment}></input>
            <button onClick={props.handleChange}>Submit Comment</button>
        </form>
    )
}

export default AddComment;