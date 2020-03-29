// import React from 'react';
// import { Link } from 'react-router-dom';
// import DefaultImage from '../images/default-profile-image.jpg';

// const UserItem = ({ id, first, last, username, image, removeSubscription, pubs }) => {
//     return (
//         <div className='card'>
//             <img
//                 src={image || DefaultImage}
//                 alt={username}
//                 className='img-thumbnail'
//             />
//             <div className='card-body'>
//                 <Link to={`/${id}`}>
//                     <h5 className='card-title'>{username}</h5>
//                 </Link>
//                 {first} {last}
//                 <Link to={`/${id}/pubs`}>
//                     <p>Subscriptions</p>
//                 </Link>
//                 {pubs === 'yes' && (
//                     <small onClick={removeSubscription} className='text-danger'>Unsubscribe</small>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default UserItem;