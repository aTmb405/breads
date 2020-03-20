import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserReadings } from '../store/actions/readings';
import ReadingItem from '../components/ReadingItem';

class UserReadingsList extends Component {
    componentDidMount() {
        this.props.fetchUserReadings();
    }
// clear reading state whenever logged out or failed login
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
                {this.props.readings.length ? (
                    <div className='offset-1 col-sm-10'>
                        <div className='list-group' id='readings'>
                            {readingsList}
                        </div>
                    </div>
                ) : (
                    <h2>You haven't read anything... Yet!!</h2>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        readings: state.readings
    }
}

export default connect(mapStateToProps, { fetchUserReadings })(UserReadingsList);