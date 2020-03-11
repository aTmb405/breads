import React, { Component } from 'react';
// import './ArticleList.css';

class ArticleList extends Component {
    render() {
        return (
            <div className='ArticleList'>
                <h1 className='display-1 text-center'>Articles!</h1>
                {this.props.articles.map(a => (
                    <div className='row' key={a.url}>
                        <h3 className='mt-3'>
                            <li> URL - {a.url} </li>
                            <li> WORD COUNT - {a.word_count} </li>
                        </h3>
                    </div>
                ))}
            </div>
        )
    }
}

export default ArticleList;

// article list
    // article
        // user, url, date, word count
// navbar
    // sign up
    // log out
    // log in
// post url