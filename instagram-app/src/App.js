import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }
  render () {
    return (
      this.state.dummyData.map(item => {
        return <PostContainer item={item}/>
      })
    )
  }
}

export default App;
