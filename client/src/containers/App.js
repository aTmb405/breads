import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { Provider } from 'react-redux'; //makes react and redux connect together
import { configureStore } from '../store';

const store = configureStore(); //store controls all state in app

const App = () => (
  <Provider store={store}>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
  </Provider>
);

// class App extends Component {
//   static defaultProps = {
//     articles: [
//       {
//         url: "https://www.artofmanliness.com/articles/the-prisoner-workout/",
//         word_count: 15008
//       },
//       {
//         url: "https://fs.blog/2017/03/seneca-on-the-shortness-of-time/",
//         word_count: 5484
//       },
//       {
//         url: "https://www.artofmanliness.com/articles/20-rules-for-walking/",
//         word_count: 5810
//       }
//     ]
//   };
//   render() {
//     return (
//       <div>
//         <Navbar/>
//       </div>
      
//     );
//   }
// }

export default App;