import React from 'react'
import './AddComment.css'

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: this.props
        }
    }

componentDidMount() {
    this.setState({
        newComment: this.state.text,
        newUsername: this.state.username
    })
}

render() {
    return (
        <form className="comment-form" onSubmit={this.props.addComment}>
            <p><strong>Add comment...</strong></p>
            <input 
                type="text" 
                name="inputUsername"
                placeholder="username"
                value={this.props.newUsername}
                onChange={this.props.handleChange}
            /> 
            <input 
                type="text"
                name="inputText"
                placeholder="comment"
                value={this.props.newComment}
                onChange={this.props.handleChange}
            />
            <button type="submit">Submit</button>        
        </form>
        )
    }
}

export default AddComment