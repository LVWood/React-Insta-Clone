import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer'
import PropTypes from 'prop-types';

const PostsPage = props => {

    return (
      <div className="app-container">
        <SearchBar 
          handleSearchInput={props.handleSearchInput} 
          filterSearch={props.filterSearch}
          search={props.search}/> 
        {props.data.map(post => { 
          return <PostContainer 
            post={post} 
            filteredData={props.filteredData} /> } )}
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