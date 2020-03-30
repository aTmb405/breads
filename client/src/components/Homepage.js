import React from 'react';
import { Link } from 'react-router-dom';
import Timeline from './Timeline';
import UserAside from './UserAside';
import ReadingsList from '../containers/ReadingsList';

const Homepage = ({ errors, currentUser }) => {
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
            <Timeline>
                <UserAside 
                    id={currentUser.user.id}
                    image={currentUser.user.image}
                    username={currentUser.user.username}
                />
                <ReadingsList />
            </Timeline>
        </div>
    )
}

export default Homepage;