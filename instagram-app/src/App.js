import React from 'react';
import dummyData from './dummyData';
import PostsPage from './components/PostsPage/PostsPage'
// import withAuthenticate from './components/PostsPage/authentication/withAuthenticate'
import PropTypes from 'prop-types';

// const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    data: [],
    filteredData: [],
    search: ''
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  handleSearchInput = e => {
    e.preventDefault();
      this.setState({
       search : e.target.value
       });
    }
  
    filterSearch = e => {
      e.preventDefault();
      const filteredPosts = this.state.data.filter(item => {
          if (item.username.includes(this.state.search)) {
            return true; 
          } else {
            return false;
          }
        })
      this.setState({
        data: filteredPosts
      })
      }
  

  // renderPosts = e => {

  // }
    
  

  render() {
    return (
     <PostsPage 
      data={this.state.data} 
      filteredData={this.state.filteredData} 
      handleSearchInput={this.handleSearchInput} 
      filterSearch={this.filterSearch}/>
    )
  }
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
};

App.defaultProps = {
  dummyData: []
};




export default App