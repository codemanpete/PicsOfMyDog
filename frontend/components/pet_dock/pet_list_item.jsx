import React from 'react';
import { Link } from 'react-router';

const PetListItem = ({ pet }) => (
  <li key={pet.id} className="card">
    <Link className="link-wrap" to={`/pets/${pet.id}/photos`}>
    </Link>
    <div className="card-top"></div>
    <p className="card-bottom">{pet.pet_name}</p>
  </li>
);

export default PetListItem;
