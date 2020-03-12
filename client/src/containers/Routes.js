import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ArticleList from '../ArticleList';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';

const Routes = props => {
    const { authUser } = props;
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={props => <Homepage/>} //currentUser={currentUser} {...props}
            />
            <Route
                exact
                path='/signin'
                render={props => {
                    return (
                        <AuthForm
                            onAuth={authUser}
                            buttonText='Log In'
                            heading='Welcome Back.'
                            {...props}
                        />
                    )
                }}
            />
            <Route
                exact
                path='/signup'
                render={props => {
                    return (
                    <AuthForm
                        onAuth={authUser}
                        signup
                        buttonText='Sign up'
                        heading='Join today!'
                        {...props}
                    />
                    )
                }}
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

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(
  connect(mapStateToProps, { authUser })(Routes)
);