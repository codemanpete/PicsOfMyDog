import React from 'react';
import { Link } from 'react-router';

const PhotoListItem = ({ photo }) => (
  <li>
    <Link to={`/photos/${photo.id}`}>
      <img src={photo.photo_url} alt={photo.title} />
      <span>{photo.age}</span>
    </Link>
  </li>
);

export default PhotoListItem;
