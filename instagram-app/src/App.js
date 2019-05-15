import React from 'react';
import dummyData from './dummyData';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage/PostsPage'
import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    data: [],
    search: ''
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  handleChanges = e => {
    this.setState({
     search: e.target.value
     });
  }

  filterSearch = e => {
    e.preventDefault();
    if (this.state.search === this.state.data.username) {
      this.state.data.filter(item => {
        this.setState({
          data: item
        })
      })
    } 
  }


  render() {
    return (
      <div className="app-container">
        <SearchBar 
          handleChanges={this.handleChanges} 
          filterSearch={this.state.filterSearch}
          search={this.state.search}/> 
        <PostsPage />
        {this.state.data.map(post => { return <PostContainer post={post} /> } )}
      </div>
    )
  }
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
};

App.defaultProps = {
  dummyData: []
};

export default App;