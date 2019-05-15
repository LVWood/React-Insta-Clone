import React from 'react';
import './AddComment.css';

const AddComment = props => {
    return (
        <form className={props.toggleCommentForm} className={props.showForm ? 'show-form' : 'hide-form'} onSubmit={props.addComment}>
            <input 
                value={props.username} 
                name='username'
                placeholder='username'
                onChange={props.handleInput} />
            <input 
                value={props.text} 
                name='text'
                placeholder='comment' 
                onChange={props.handleInput}/>
            <button onClick={props.addComment}>submit</button>
        </form>
    )
}

export default AddComment;