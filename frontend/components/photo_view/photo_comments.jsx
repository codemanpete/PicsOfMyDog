import React from 'react';
import { Link } from 'react-router';

const PhotoComments = ({ comments }) => (
  <div>
    <ul>
      {comments.map( comment => (
        <li key={comment.id}>
          <img className="mini_comment_pic" src={comment.owner_pic} alt={comment.owner_name} />
          <Link to={`/users/${comment.owner_id}`}>
            <span>
              {comment.owner_name}
            </span>
          </Link>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default PhotoComments;
