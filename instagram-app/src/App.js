import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import AddComment from './components/AddComment/AddComment'
import dummyData from './dummyData'


class App extends React.Component {
  constructor() {
    super();
    this.state={
      data: dummyData
    }
  }

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

            />
        })}

        <AddComment />
      </div>
    )
  }
}

export default App;
