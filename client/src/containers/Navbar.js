import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
// import { displayGlobal, displayUser } from '../store/actions/currentList';
import { withRouter } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }

    changeList = e => {
        e.preventDefault();
        this.props.currentList.list === 'global' ? this.props.displayUser() : this.props.displayGlobal()
    }

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>
                        ABREAD
                    </Link>
                    <Link to='/users'>
                        <button className='btn btn-outline-primary btn-sm mb-2'>Find Friends</button>
                    </Link>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className='nav navbar-nav navbar-right'>
                            <li>
                                <Link to='/'>
                                    <button className='btn btn-outline-primary btn-sm mb-2'>Global Reads</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/readings'>
                                    <button className='btn btn-outline-primary btn-sm mb-2'>Your Reads</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/subscriptions'>
                                    <button className='btn btn-outline-primary btn-sm mb-2'>Subscriptions</button>
                                </Link>
                            </li>
                            <ArticleForm history={this.props.history}/>
                            <li>
                                <button onClick={this.logout} className='btn btn-outline-primary btn-sm mb-2'>Log out</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className='nav navbar-nav navbar-right'>
                            <li>
                                <Link to='/signup'>
                                    <button className='btn btn-outline-primary btn-sm mb-2'>Sign up</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/signin'>
                                    <button className='btn btn-outline-primary btn-sm mb-2'>Log in</button>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        currentList: state.currentList
    };
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar));