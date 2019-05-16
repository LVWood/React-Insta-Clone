import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import withAuthenticate from './authentication/withAuthenticate'
import PostContainer from '../PostContainer/PostContainer'
import PropTypes from 'prop-types';

//const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

const PostsPage = props => {


  // handleChanges = e => {
  //   this.setState({
  //    search: e.target.value
  //    });
  // }

  // filterSearch = e => {
  //   e.preventDefault();
  //   if (this.state.search === this.state.data.username) {
  //     this.state.data.filter(item => {
  //       this.setState({
  //         data: item
  //       })
  //     })
  //   } 
  // }

  
    return (
      <div className="app-container">
        <SearchBar 
          handleChanges={props.handleChanges} 
          filterSearch={props.filterSearch}
          search={props.Search}/> 
        {props.data.map(post => { return <PostContainer post={post} filteredData={props.filteredData} /> } )}
      </div>
    )
  }



PostsPage.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
};

PostsPage.defaultProps = {
  dummyData: []
};

export default PostsPage;