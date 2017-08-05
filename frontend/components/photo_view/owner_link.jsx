import React from 'react';
import { Link } from 'react-router';

const OwnerLink = ({owner, owner_id}) => (
  <div className="owner-link">
    <Link to={`/users/${owner_id}`}>
      <div className="left">
        <img className="mini_profile_pic" src={owner.profile_pic_url} alt={owner.username} />
      </div>
      <div className="right">
        <span>{owner.owner_name}</span>
      </div>
    </Link>
  </div>
);


export default OwnerLink;
