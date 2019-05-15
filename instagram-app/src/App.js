import React from 'react';
import dummyData from './dummyData';
import PostsPage from './components/PostsPage/PostsPage'
import LoginPage from './components/PostsPage/authentication/LoginPage'
import withAuthenticate from './components/PostsPage/authentication/withAuthenticate'

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

  render() {
    return (
     <PostsPage data={this.state.data} search={this.state.search} />
    )
  }
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
};

App.defaultProps = {
  dummyData: []
};


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

export default withAuthenticate(App)(LoginPage)