import React from 'react';
import './AddComment.css';

const AddComment = props => {
    return (
        <form className="comment-form">
            <input 
                value={props.user} 
                placeholder='username'
                onChange={props.handleChanges} />
            <input 
                value={props.comment} 
                placeholder='comment' 
                onChange={props.handleChanges}/>
            <button onClick={props.addComment}>submit</button>
        </form>
    )
}

export default AddComment;