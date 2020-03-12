import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }
    render() {
        const { email, username, password } = this.state;
        const { heading, buttonText } = this.props;
        return (
            <div>
                <div className='row justify-content-md-center text-center'>
                    <div className='col-md-6'>
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            <label htmlFor='email'>E-mail:</label>
                            <input
                                autoComplete='off'
                                className='form-control'
                                id='email'
                                name='email'
                                onChange={this.handleChange}
                                type='text'
                                value={email}
                            />
                            <label htmlFor='password'>Password:</label>
                            <input
                                autoComplete='off'
                                className='form-control'
                                id='password'
                                name='password'
                                onChange={this.handleChange}
                                type='password'
                                value={password}
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthForm;