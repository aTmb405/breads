import React from "react";
import { Link } from "react-router-dom";
import ReadingsTimeline from "./ReadingsTimeline";

const Homepage = ({ currentUser, currentList, readings }) => {
    console.log(readings);
    if (!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1>What's Happening?</h1>
                <h4>New to READINGS?</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign up here
                </Link>
            </div>
        );
    }
    return (
        <div>
            <ReadingsTimeline
                image={currentUser.user.image}
                username={currentUser.user.username}
                list={currentList.list}
                readings={readings}
            />  
        </div>
    )
}

export default Homepage;