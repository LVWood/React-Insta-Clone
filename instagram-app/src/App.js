import React from 'react';
import dummyData from './dummyData';
import PostsPage from './components/PostsPage/PostsPage'
import LoginPage from './components/PostsPage/authentication/LoginPage'
import withAuthenticate from './components/PostsPage/authentication/withAuthenticate'
import PropTypes from 'prop-types';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

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

  handleChanges = e => {
      this.setState({
       [e.target.name]: e.target.value
       });
    }
  
    filterSearch = e => {
      e.preventDefault();
      const newArray = []
      this.state.data.filter(item => {
          if (item.username.includes(e.target.value)) {
          this.setState({
            data: newArray
          })
      };
    })
  } 
  

  render() {
    return (
     <PostsPage 
      data={this.state.data} 
      filteredData={this.state.filteredData} 
      handleChanges={this.handleChanges} 
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