import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PropTypes from 'prop-types';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }

  componentDidMount() {
    this.setState = {
      dummyData: dummyData
    }
  }

  render () {
    return (
      <div>
        <SearchBar onChange=''/>
        {this.state.dummyData.map(item => {
        return <PostContainer item={item} key={item.timestamp}/>
        })}
      </div>

    )
  }
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
  };

export default App;
