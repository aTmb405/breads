import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'; //Redirect
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';


const Routes = props => {
    const { authUser, errors, removeError, currentUser, currentList, readings } = props;
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={props => {
                    return (
                        <Homepage
                            removeError={removeError}
                            errors={errors}
                            currentUser={currentUser}
                            currentList={currentList}
                            readings={readings}
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
                            removeError={removeError}
                            errors={errors}
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
                            removeError={removeError}
                            errors={errors}
                            onAuth={authUser}
                            signup
                            buttonText='Sign up'
                            heading='Join today!'
                            {...props}
                        />
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
    currentList: state.currentList,
    readings: state.readings
  };
}

export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Routes)
);