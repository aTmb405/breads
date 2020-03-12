import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signup ? 'signup' : 'signin';
        this.props.onAuth(authType, this.state).then(
            console.log('LOGGED IN!!!')
        )
    }

    render() {
        const { first_name, last_name, email, username, password } = this.state;
        const { heading, buttonText, signup } = this.props;
        return (
            <div>
                <div className='row justify-content-md-center text-center'>
                    <div className='col-md-6'>
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {signup && (
                                <div>
                                    <label htmlFor='first_name'>First Name:</label>
                                    <input
                                        autoComplete='off'
                                        className='form-control'
                                        id='first_name'
                                        name='first_name'
                                        onChange={this.handleChange}
                                        type='text'
                                        value={first_name}
                                    />
                                    <label htmlFor='last_name'>Last Name:</label>
                                    <input
                                        autoComplete='off'
                                        className='form-control'
                                        id='last_name'
                                        name='last_name'
                                        onChange={this.handleChange}
                                        type='text'
                                        value={last_name}
                                    />
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
                                </div>
                            )}
                            
                            <label htmlFor='username'>Username:</label>
                                    <input
                                        autoComplete='off'
                                        className='form-control'
                                        id='username'
                                        name='username'
                                        onChange={this.handleChange}
                                        type='text'
                                        value={username}
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
                            
                            <button type='submit' className='btn btn-primary btn-block btn-lg'>
                                {buttonText}
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthForm;