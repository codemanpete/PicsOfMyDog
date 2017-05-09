import React from 'react';
import { Link } from 'react-router';

const OwnerLink = ({owner, owner_id}) => (
  <div>
    <Link to={`/users/${owner_id}`}>
      <img className="mini_profile_pic" src={owner.profile_pic_url} alt={owner.username} />
      <span>{owner.owner_name}</span>
    </Link>
  </div>
);


export default OwnerLink;
