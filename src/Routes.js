import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ArticleList from "./ArticleList";

class Routes extends Component {
  render() {
    return (
      <Switch>
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
export default Routes;
