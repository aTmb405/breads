import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserReadings, removeReading } from '../store/actions/readings';
import { fetchSummary, removeSummary } from '../store/actions/summary';
import ReadingItem from '../components/ReadingItem';

class UserReadingsList extends Component {
    componentDidMount() {
        this.props.fetchUserReadings(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchUserReadings(this.props.match.params.id);
        }
    }
// clear reading state whenever logged out or failed login
    render() {
        const { readings, removeReading, summary, fetchSummary, removeSummary, currentUser } = this.props;
        let userReadingsList = readings.map(r => (
            <ReadingItem
                key={r.id}
                id={r.id}
                title={r.title}
                domain={r.domain}
                url={r.url}
                word_count={r.word_count}
                username={r.username}
                image={r.image}
                user_id={r.user_id}
                summary={summary.summary}
                viewSummary={fetchSummary.bind(this, r.id, r.article_url)}
                removeSummary={removeSummary}
                removeReading={removeReading.bind(this, r.user_id, r.id)}
                isCorrectUser={currentUser === r.user_id}
            />
        ));
        return (
            <div className='row col-sm-8 offset-md-2'>
                {this.props.readings.length ? (
                    <div className='offset-1 col-sm-10'>
                        <div className='list-group' id='readings'>
                            {userReadingsList}
                        </div>
                    </div>
                ) : (
                    <div className='d-flex justify-content-center'>
                        <div className='spinner-grow text-primary' role='status'>
                            <span className='sr-only'>Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        readings: state.readings,
        summary: state.summary,
        currentUser: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchUserReadings, fetchSummary, removeReading, removeSummary })(UserReadingsList);