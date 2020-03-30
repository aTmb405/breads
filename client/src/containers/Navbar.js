import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import { withRouter } from 'react-router-dom';
import ArticleForm from './ArticleForm';
import SearchForm from './SearchForm';

class Navbar extends Component {
    
    logout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>
                        BREADS
                    </Link>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className='nav navbar-nav navbar-right'>
                            <SearchForm history={this.props.history}/>
                            <li>
                                <NavLink exact to='/' activeClassName='bg-primary text-white' className='btn btn-outline-primary btn-sm mb-2'>
                                    {/* <button className='btn btn-outline-primary btn-sm mb-2'> */}
                                        Global Reads
                                    {/* </button> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to={`/${this.props.currentUser.user.id}`} activeClassName='bg-primary text-white' className='btn btn-outline-primary btn-sm mb-2'>
                                    {/* <button className='btn btn-outline-primary btn-sm mb-2'> */}
                                        Your Reads
                                    {/* </button> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to='/subscriptions' activeClassName='bg-primary text-white' className='btn btn-outline-primary btn-sm mb-2'>
                                    {/* <button className='btn btn-outline-primary btn-sm mb-2'> */}
                                        Subscriptions
                                    {/* </button> */}
                                </NavLink>
                            </li>
                            <ArticleForm history={this.props.history}/>
                            <li>
                                <button onClick={this.logout} className='btn btn-outline-primary btn-sm mb-2'>Log out</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className='nav navbar-nav navbar-right'>
                            <li>
                                <NavLink exact to='/signup' activeClassName='bg-primary text-white' className='btn btn-outline-primary btn-sm mb-2'>
                                    {/* <button className='btn btn-outline-primary btn-sm mb-2'> */}
                                        Sign up
                                    {/* </button> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to='/signin' activeClassName='bg-primary text-white' className='btn btn-outline-primary btn-sm mb-2'>
                                    {/* <button className='btn btn-outline-primary btn-sm mb-2'> */}
                                        Log in
                                    {/* </button> */}
                                </NavLink>
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