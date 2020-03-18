import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReadings } from '../store/actions/readings';
import ReadingItem from '../components/ReadingItem';

class ReadingsList extends Component {
    componentDidMount() {
        this.props.fetchReadings();
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
                <div className='offset-1 col-sm-10'>
                    <div className='list-group' id='readings'>
                        {readingsList}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        readings: state.readings
    }
}

export default connect(mapStateToProps, { fetchReadings })(ReadingsList);