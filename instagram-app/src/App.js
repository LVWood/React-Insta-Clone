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
    e.preventDefault();
    this.setState({
      data: [ ...this.state.data, {newComment: this.state.inputText, newUsername: this.state.inputUsername}],
      inputText: '',
      inputUsername: '',
    });
  };

  render(){
    return (
      <div className="app-container">
        <SearchBar 
          inputText={this.state.data.inputText}
          searchFn={this.searchFn}
          handleChange={this.handleChange} />
        
        {this.state.data.map(post => {
          return <PostContainer post={post} key={post.timestamp} />
        })}
      
      </div>
    )
  }
}

export default App;
