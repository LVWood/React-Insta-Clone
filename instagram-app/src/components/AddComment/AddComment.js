import React from 'react'
import './AddComment.css'

const AddComment = props => {
    return (
        <form className="comment-form" onSubmit={props.addComment}>
            <p><strong>Add comment...</strong></p>
            <input 
                type="text" 
                name="inputUsername"
                placeholder="username"
                value={props.newUsername}
                onChange={props.handleChange}
            /> 
            <input 
                type="text"
                name="inputText"
                placeholder="comment"
                value={props.newComment}
                onChange={props.handleChange}
            />
            <button type="submit">Submit</button>        
        </form>
        )
    }

export default AddComment