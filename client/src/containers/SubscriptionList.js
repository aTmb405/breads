import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubscriptions } from '../store/actions/subscriptions';
import SubscriptionItem from '../components/SubscriptionItem';

class SubscriptionsList extends Component {
    componentDidMount() {
        this.props.fetchSubscriptions();
    }
    render() {
        const { subscriptions } = this.props;
        let subscriptionsList = subscriptions.map(u => (           
            <SubscriptionItem
                key={u.publisher_id}
                pub_id={u.publisher_id}
                sub_id={u.subscriber_id}
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
        subscriptions: state.subscriptions
    }
}

export default connect(mapStateToProps, { fetchSubscriptions })(SubscriptionsList);