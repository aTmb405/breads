import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubscriptions } from '../store/actions/subscriptions';
import { fetchSummary, removeSummary } from '../store/actions/summary';
import SubscriptionItem from '../components/SubscriptionItem';

class SubscriptionsList extends Component {
    componentDidMount() {
        this.props.fetchSubscriptions();
    }
    render() {
        const { subscriptions, summary, fetchSummary, removeSummary } = this.props;
        let subscriptionsList = subscriptions.map(s => (           
            <SubscriptionItem
                key={s.id}
                reading_id={s.id}
                title={s.title}
                domain={s.domain}
                url={s.url}
                word_count={s.word_count}
                username={s.username}
                image={s.image}
                user_id={s.user_id}
                summary={summary.summary}
                viewSummary={fetchSummary.bind(this, s.id, s.url)}
                removeSummary={removeSummary}
            />     
        ));
        return (
            <div className='col-lg-6 col-sm-10 offset-sm-1 offset-lg-0'>
                {this.props.subscriptions.length ? (
                    <div className='list-group' id='subscriptions'>
                        {subscriptionsList}
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
        subscriptions: state.subscriptions,
        summary: state.summary
    }
}

export default connect(mapStateToProps, { fetchSubscriptions, fetchSummary, removeSummary })(SubscriptionsList);