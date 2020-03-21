import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReadings } from '../store/actions/readings';
import { fetchSummary } from '../store/actions/summary';
import ReadingItem from '../components/ReadingItem';

class ReadingsList extends Component {
    componentDidMount() {
        this.props.fetchReadings();
    }
// clear reading state whenever logged out or failed login
    render() {
        const { readings, summary, fetchSummary } = this.props; //currentUser
        let readingsList = readings.map(r => (           
            <ReadingItem
                key={r.id}
                id={r.id}
                article_url={r.url}
                word_count={r.word_count}
                // image={readings[1].image} //not correct user
                user_id={r.user_id}
                title={r.title}
                domain={r.domain}
                summary={summary.summary}
                viewSummary={fetchSummary.bind(this, r.id, r.article_url)}
            />     
        ));
        return (
            <div className='row col-sm-8'>
                {this.props.readings.length ? (
                    <div className='offset-1 col-sm-10'>
                        <div className='list-group' id='readings'>
                            {readingsList}
                        </div>
                    </div>
                ) : (
                    <h2>Nobody has read anything!</h2>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        readings: state.readings,
        summary: state.summary,
        // currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { fetchReadings, fetchSummary })(ReadingsList);