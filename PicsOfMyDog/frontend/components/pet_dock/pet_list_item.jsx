import React from 'react';
import { Link } from 'react-router';

const PetListItem = ({ pet }) => (
  <li>
    <span>{pet.pet_name}</span>
  </li>
);

export default PetListItem;
