import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/actions/users';
import UserItem from '../components/UserItem';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        const { users } = this.props;
        let usersList = users.map(u => (           
            <UserItem
                key={u.id}
                id={u.id}
                first={u.first_name}
                last={u.last_name}
                username={u.username}
                image={u.image}
            />     
        ));
        return (
            <div className='row col-sm-8'>
                {this.props.users.length ? (
                    <div className='offset-1 col-sm-10'>
                        <div className='list-group' id='users'>
                            {usersList}
                        </div>
                    </div>
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

export default connect(mapStateToProps, { fetchUsers })(UsersList);