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
            <nav className='navbar fixed-top navbar-expand-xl navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>
                        BREADS<small> beta</small>
                    </Link>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsable' aria-controls='collapsable' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    {this.props.currentUser.isAuthenticated ? (
                        <div className='collapse navbar-collapse' id='collapsable'>
                            <ul className='nav navbar-nav ml-auto'>
                                <SearchForm history={this.props.history}/>
                                <li>
                                    <NavLink exact to='/' activeClassName='bg-primary text-white' className='btn text-white btn-sm'>
                                        {/* <button className='btn btn-outline-primary btn-sm'> */}
                                            Global Reads
                                        {/* </button> */}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to={`/${this.props.currentUser.user.id}`} activeClassName='bg-primary text-white' className='btn text-white btn-sm'>
                                        {/* <button className='btn btn-outline-primary btn-sm'> */}
                                            Your Reads
                                        {/* </button> */}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to='/subscriptions' activeClassName='bg-primary text-white' className='btn text-white btn-sm'>
                                        {/* <button className='btn btn-outline-primary btn-sm'> */}
                                            Subscriptions
                                        {/* </button> */}
                                    </NavLink>
                                </li>
                                <ArticleForm history={this.props.history}/>
                                <li>
                                    <button onClick={this.logout} className='btn text-white btn-sm'>Log out</button>
                                </li>
                            </ul>
                        </div>
                        
                    ) : (
                        <div className='collapse navbar-collapse' id='collapsable'>
                            <ul className='nav navbar-nav ml-auto'>
                                <li>
                                    <NavLink exact to='/signup' activeClassName='bg-primary text-white' className='btn text-white btn-sm'>
                                        {/* <button className='btn btn-outline-primary btn-sm'> */}
                                            Sign up
                                        {/* </button> */}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to='/signin' activeClassName='bg-primary text-white' className='btn text-white btn-sm'>
                                        {/* <button className='btn btn-outline-primary btn-sm'> */}
                                            Log in
                                        {/* </button> */}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
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