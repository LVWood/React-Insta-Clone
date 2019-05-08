import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummyData'


class App extends React.Component {
  constructor() {
    super();
    this.state={
      data: dummyData,
      inputText: '',
      inputUsername: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("handleChange invoked here: ", e.target.name);
  };

  addComment = e => {
    console.log("button clicked");
    e.preventDefault();
    this.setState({
      data: [
        ...this.state.data,
        {newComment: this.state.inputText, newUsername: this.state.inputUsername}
      ],
      inputText: '',
      inputUsername: '',
    });
  };

  render(){
    return (
      <div>
        <SearchBar />

        {this.state.data.map(post => {
          return <PostContainer 
            post={post} 
            key={post.timestamp}
            username={this.state.data.username}
            thumbnailUrl={this.state.data.thumbnailUrl}
            imageUrl={this.state.data.imageUrl}
            likes={this.state.data.likes}
            comments={this.state.data.comments}
            handleChange={this.handleChange}
            inputText={this.state.data.inputText}
            inputUsername={this.state.data.Username}
            addComment={this.addComment}
            />
        })}
      </div>
    )
  }
}

export default App;
