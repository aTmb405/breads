import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'; //Redirect
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import SubscriptionsTimeline from '../components/SubscriptionsTimeline';
import UserReadingsTimeline from '../components/UserReadingsTimeline';
import UsersTimeline from '../components/UsersTimeline';
import PubsTimeline from '../components/PubsTimeline';


const Routes = props => {
    const { authUser, errors, removeError, currentUser, readings, users } = props;
    return (
        <Switch>
            <Route
                exact
                path='/'
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
                        <div>
                            {errors.message && (
                                <div className='alert alert-danger'>{errors.message}</div>
                            )}
                            <UsersTimeline
                                id={currentUser.user.id}
                                image={currentUser.user.image}
                                username={currentUser.user.username}
                                users={users}
                                {...props}
                            />
                        </div>
                        
                    )
                }}
            />
            <Route
                exact
                path='/subscriptions'
                render={props => {
                    return (
                        <div>
                            {errors.message && (
                                <div className='alert alert-danger'>{errors.message}</div>
                            )}
                            <SubscriptionsTimeline 
                                id={currentUser.user.id}
                                image={currentUser.user.image}
                                username={currentUser.user.username}
                            />
                        </div>
                    )
                }}
            />
            <Route
                exact
                path='/:id'
                render={props => {
                    return (
                        <div>
                            {errors.message && (
                                <div className='alert alert-danger'>{errors.message}</div>
                            )}
                            <UserReadingsTimeline
                                id={currentUser.user.id}
                                image={currentUser.user.image}
                                username={currentUser.user.username}
                                readings={readings}
                                {...props}
                            />
                        </div>
                    )
                }}
            />
            <Route
                exact
                path='/:id/pubs'
                render={props => {
                    return (
                        <div>
                            {errors.message && (
                                <div className='alert alert-danger'>{errors.message}</div>
                            )}
                            <PubsTimeline
                                id={currentUser.user.id}
                                image={currentUser.user.image}
                                username={currentUser.user.username}
                                users={users}
                                {...props}
                            />
                        </div>
                    )
                }}
            />
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
  connect(mapStateToProps, { authUser, removeError })(Routes)
);