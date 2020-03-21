import React from 'react';
// import Moment from 'react-moment';
// import { Link } from 'react-router-dom';
// import DefaultImage from '../images/default-profile-image.jpg';

const ReadingItem = ({ article_url, user_id }) => { //username, image, word_count
    //componentDidMount() {
        //this.fetchUserData();
    //}
    return (
        <li className='list-group-item'>
            {/* if list === 'global' */}
            {/* <img
                src={image || DefaultImage} //not correct user
                alt={username} //not correct user
                height="100"
                width="100"
                className="timeline-image"
            /> */}
            <div className='reading-area'>
                    <p>{article_url} </p>
                    <p>User: {user_id}</p>
                    {/* <p>Words in Article: ~{word_count}</p> */}
            </div>
        </li>
    )
}

export default ReadingItem;