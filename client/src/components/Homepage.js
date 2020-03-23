import React from 'react';
import { Link } from 'react-router-dom';
import ReadingsTimeline from './ReadingsTimeline';
import UserReadingsTimeline from './UserReadingsTimeline';

const Homepage = ({ errors, currentUser, currentList, readings }) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div className='home-hero'>
                <h1>What's Happening?</h1>
                <h4>New to READINGS?</h4>
                <Link to='/signup' className='btn btn-primary'>
                    Sign up here
                </Link>
            </div>
        );
    }
    return (
        <div>
            {errors.message && (
                <div className='alert alert-danger'>{errors.message}</div>
            )}
            {currentList.list === 'global' ? (
                <ReadingsTimeline
                    image={currentUser.user.image}
                    username={currentUser.user.username}
                    readings={readings}
                /> 
            ) : (
                <UserReadingsTimeline
                    image={currentUser.user.image}
                    username={currentUser.user.username}
                    readings={readings}
                    list={currentList}
                />
            )}
        </div>
    )
}

export default Homepage;