import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ArticleList from './ArticleList';
import Homepage from './components/Homepage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Homepage/>} //currentUser={currentUser} {...props}
        />
        <Route
          exact
          path='/articles'
          render={() => <ArticleList articles={this.props.articles} />}
        />
        <Redirect to='/articles' />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(
  connect(mapStateToProps, null)(Routes)
);