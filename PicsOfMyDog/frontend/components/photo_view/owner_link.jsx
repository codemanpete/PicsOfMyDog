import React from 'react';
import { Link } from 'react-router';

const OwnerLink = ({owner_id, owner_name}) => (
  <div>
    <Link to={`/users/${owner_id}`}>{owner_name}</Link>
  </div>
);

export default OwnerLink;
