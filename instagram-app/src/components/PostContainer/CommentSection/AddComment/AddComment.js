import React from 'react';
import './AddComment.css';

const AddComment = () => {
    return (
        <form className="comment-form">
            <input value='' placeholder='username'></input>
            <input value='' placeholder='comment'></input>
            <button>submit</button>
        </form>
    )
}

export default AddComment;