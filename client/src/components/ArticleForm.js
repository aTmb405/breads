import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewReading } from '../store/actions/readings';

class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
    }

    handleChange = e => {
        this.setState({
            url: e.target.value
        });
    };

    handleNewMessage = (event) => {
        event.preventDefault();
        this.props.postNewReading(this.state.url);
        this.setState({ url: "" });
        this.props.history.push("/");
        // this.props.history.goBack();
    };

    render() {
        const { url } = this.state;
        const { errors } = this.props;
// need to immediately add to readings list
// need to know why user id is skipping
        return (
            <form onSubmit={this.handleNewMessage} className='form-inline'>
                {errors.message && (
                    <div className='alert alert-danger p-1 mb-2 small'>{errors.message}</div>
                )}
                <div className='form-group mx-sm-3 mb-2'>
                    <label htmlFor='url'></label>
                    <input
                        type='text'
                        className='form-control form-control-sm'
                        id='url'
                        name='url'
                        onChange={this.handleChange}
                        placeholder='www.coolarticle.com'
                        value={url}
                    />
                </div>
                <button type='submit' className='btn btn-outline-primary btn-sm mb-2'>Submit Article</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, { postNewReading })(ArticleForm);