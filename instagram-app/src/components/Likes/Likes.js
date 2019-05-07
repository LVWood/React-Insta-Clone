import React from 'react'
import open_heart from './open_heart.png';
import quotebubble from './quotebubble.png';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.likes
        }
    }

    handleClick(e) {
        this.setState({
            counter: e.target.counter
        })
    }

    addLikes (e) {
        e.preventDefault();
        this.setState = {
            counter: this.state.counter + 1
        }
    }

    render() {
        return (
            <div className="likes">
                <div className="reaction-icons">
                    <img onClick={this.state.addLikes} className="img-logo" src={open_heart} alt="logo"></img>
                    <img className="img-logo" src={quotebubble} alt="logo"></img>
                </div>
                <p><strong>{this.state.counter} likes</strong></p>
            </div>
        )
    }   
}

export default Likes;