import React, { Component } from 'react';

class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { url } = this.state;

        return (
            <div>
                <form className='form-inline'>
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
            </div>
            
        )
    }
}

export default ArticleForm;