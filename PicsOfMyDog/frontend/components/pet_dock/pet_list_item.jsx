import React from 'react';
import { Link } from 'react-router';

const PetListItem = ({ pet }) => (
  <li>
    <span><Link to={`/pets/${pet.id}/photos`}>{pet.pet_name}</Link></span>
  </li>
);

export default PetListItem;
