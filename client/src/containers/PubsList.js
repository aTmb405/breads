import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPubs } from '../store/actions/users';
import UserItem from '../components/UserItem';

class PubsList extends Component {
    componentDidMount() {
        this.props.fetchPubs();
    }
    render() {
        const { users } = this.props;
        let pubsList = users.map(p => (           
            <UserItem
                key={p.id}
                id={p.id}
                first={p.first_name}
                last={p.last_name}
                username={p.username}
                image={p.image}
            />     
        ));
        return (
            <div className='row col-sm-8 offset-md-2'>
                {this.props.users.length ? (
                    <div class="card-columns">
                        {pubsList}
                    </div>
                    // <div className='offset-1 col-sm-10'>
                    //     <div className='list-group' id='users'>
                    //         {pubsList}
                    //     </div>
                    // </div>
                ) : (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchPubs })(PubsList);