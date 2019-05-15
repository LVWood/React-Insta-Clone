import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import withAuthenticate from './authentication/withAuthenticate'
import PostContainer from '../PostContainer/PostContainer'
import PropTypes from 'prop-types';

//const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    data: props.data,
    search: props.search
    }
  }

  componentDidMount() {
    this.setState({
      data: this.state.data
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
        {this.state.data.map(post => { return <PostContainer post={post} /> } )}
      </div>
    )
  }
}

PostsPage.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
};

PostsPage.defaultProps = {
  dummyData: []
};

export default PostsPage;