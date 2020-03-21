import React from 'react';
// import Moment from 'react-moment';
// import { Link } from 'react-router-dom';
// import DefaultImage from '../images/default-profile-image.jpg';



const ReadingItem = ({ article_url, article_id, user_id, summary, viewSummary }) => { //username, image, word_count
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
                {/* {summary ? (
                    <p>{summary}</p>
                ) : (
                    <span> */}
                        <p>{article_url}</p>
                        <p>User: {user_id}</p>
                        <button onClick={viewSummary} className='btn btn-outline-primary btn-sm mb-2'>View Summary</button>
                        {summary.id == article_id && (
                        <p>{summary.data}</p>
                        )}
                    {/* </span>
                )} */}
                    {/* <p>Words in Article: ~{word_count}</p> */}
            </div>
        </li>
    )
}

export default ReadingItem;