import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReadings } from '../store/actions/readings';
import ReadingItem from '../components/ReadingItem';

class ReadingsList extends Component {
    componentDidMount() {
        this.props.fetchReadings();
    }
// ********* clear reading state whenever logged out or failed login
    render() {
        const { readings } = this.props;
        let readingsList = readings.map(r => (
            <ReadingItem
                key={r.id}
                url={r.url}
                word_count={r.word_count}
            />
        ));
        return (
            <div className='row col-sm-8'>
                <div className='offset-1 col-sm-10'>
                    <div className='list-group' id='readings'>
                        {readingsList}
                    </div>
                </div>
            </div>
        )
    }
    // render() {
    //     return (
    //         <div className='ArticleList'>
    //             <h1 className='display-1 text-center'>Articles!</h1>
    //             {this.props.articles.map(a => (
    //                 <div className='row' key={a.url}>
    //                     <h3 className='mt-3'>
    //                         <li> URL - {a.url} </li>
    //                         <li> WORD COUNT - {a.word_count} </li>
    //                     </h3>
    //                 </div>
    //             ))}
    //         </div>
    //     )
    // }
}

function mapStateToProps(state) {
    return {
        readings: state.readings
    }
}

export default connect(mapStateToProps, { fetchReadings })(ReadingsList);

// article list
    // article
        // user, url, date, word count
// navbar
    // sign up
    // log out
    // log in
// post url