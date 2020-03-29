import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReadings } from '../store/actions/readings';
import { fetchSummary, removeSummary } from '../store/actions/summary';
import { fetchUsers } from '../store/actions/users';
import { postNewSubscription } from '../store/actions/subscriptions';
import ListItem from '../components/ListItem';

class ReadingsList extends Component {
    componentDidMount() {
        this.props.fetchReadings();
    }
    // componentDidUpdate(prevProps) {
    //     console.log('UPDATE 1');
    //     if (JSON.stringify(this.props.readings) !== JSON.stringify(prevProps.readings)) {
    //         console.log('UPDATE 2');
    //         this.props.fetchReadings();
    //     }
    // }
// clear reading state whenever logged out or failed login
    render() {
        const { readings, summary, fetchSummary, removeSummary, postNewSubscription } = this.props;
        let readingsList = readings.map(r => (  
            <ListItem
                key={r.id}
                id={r.id}
                title={r.title}
                domain={r.domain}
                url={r.url}
                word_count={r.word_count}
                user_id={r.user_id}
                username={r.username}
                image={r.image}
                summary={summary.summary}
                viewSummary={fetchSummary.bind(this, r.id, r.article_url)}
                removeSummary={removeSummary}
                newSubscription={postNewSubscription.bind(this, r.user_id)}
            />              
        ));
        return (
            <div className='col-lg-6 col-sm-10 offset-sm-1 offset-lg-0'>
                {this.props.readings.length ? (
                    <div className='list-group' id='readings'>
                        {readingsList}
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
        summary: state.summary
        // users: state.users,
    }
}

export default connect(mapStateToProps, { fetchReadings, fetchSummary, removeSummary, fetchUsers, postNewSubscription })(ReadingsList);