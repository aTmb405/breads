import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>
                        READINGS
                    </Link>
                    <ul className='nav navbar-nav navbar-right'>
                        <li>
                            <Link to='/signup'>Sign up</Link>
                        </li>
                        <li>
                            <Link to='/signin'>Log in</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, null)(Navbar);