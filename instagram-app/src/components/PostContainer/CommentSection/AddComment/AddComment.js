import React from 'react';
import './AddComment.css';

const AddComment = props => {
    console.log('AddComment props: ', props);
    return (
        <form className="comment-form" onSubmit={props.addComment}>
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