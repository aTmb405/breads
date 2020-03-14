import React from "react";
import { Link } from "react-router-dom";
import ReadingsTimeline from "./ReadingsTimeline";

const Homepage = ({ currentUser }) => {
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
            <ReadingsTimeline/>
        </div>
    )
}

export default Homepage;