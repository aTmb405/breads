import React, { Component } from 'react';
import Routes from "./Routes";
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  static defaultProps = {
    articles: [
      {
        url: "https://www.artofmanliness.com/articles/the-prisoner-workout/",
        word_count: 15008
      },
      {
        url: "https://fs.blog/2017/03/seneca-on-the-shortness-of-time/",
        word_count: 5484
      },
      {
        url: "https://www.artofmanliness.com/articles/20-rules-for-walking/",
        word_count: 5810
      }
    ]
  };
  render() {
    return (
      <div>
        <Navbar/>
        <div className='container'>
          <Routes articles={this.props.articles} />
        </div>
      </div>
      
    );
  }
}

export default App;