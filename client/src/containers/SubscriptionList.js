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
        let subscriptionsList = subscriptions.map(u => (           
            <SubscriptionItem
                key={u.publisher_id}
                url={u.url}
                word_count={u.word_count}
                // image={readings[1].image} //not correct user
                reading_id={u.id}
                user_id={u.user_id}
                title={u.title}
                domain={u.domain}
                summary={summary.summary}
                viewSummary={fetchSummary.bind(this, u.id, u.url)}
                removeSummary={removeSummary}
            />     
        ));
        return (
            <div className='row col-sm-8'>
                {this.props.subscriptions.length ? (
                    <div className='offset-1 col-sm-10'>
                        <div className='list-group' id='subscriptions'>
                            {subscriptionsList}
                        </div>
                    </div>
                ) : (
                    <h2>You don't have any subscriptions!</h2>
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