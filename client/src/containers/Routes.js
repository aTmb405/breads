import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'; //Redirect
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import UsersList from './UsersList';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
// refactor
import { fetchSubscriptions } from '../store/actions/subscriptions';
import SubscriptionList from './SubscriptionList';
import UserReadingsTimeline from '../components/UserReadingsTimeline'


const Routes = props => {
    const { authUser, errors, removeError, currentUser, readings, users } = props;
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={props => {
                    return (
                        <Homepage
                            errors={errors}
                            currentUser={currentUser}
                            readings={readings}
                            users={users}
                            {...props}
                        />
                    )
                }}
            />
            <Route
                exact
                path='/signin'
                render={props => {
                    return (
                        <AuthForm
                            onAuth={authUser}
                            removeError={removeError}
                            errors={errors}
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
                            removeError={removeError}
                            errors={errors}
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
                path='/users'
                render={props => {
                    return (
                        <UsersList
                            users={users}
                            {...props}
                        />
                    )
                }}
            />
            {/* refactor */}
            <Route 
                exact
                path='/readings'
                render={props => {
                    return (
                        <UserReadingsTimeline
                                image={currentUser.user.image}
                                username={currentUser.user.username}
                                readings={readings}
                        />
                    )
                }}
            />
            
            <Route
                exact
                path='/subscriptions'
                render={props => {
                    return (
                        <SubscriptionList />
                    )
                }}
            />
            {/* <Redirect to='/articles' /> */}
        </Switch>
    );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    readings: state.readings,
    users: state.users
  };
}

export default withRouter(
  connect(mapStateToProps, { authUser, removeError, fetchSubscriptions })(Routes)
);