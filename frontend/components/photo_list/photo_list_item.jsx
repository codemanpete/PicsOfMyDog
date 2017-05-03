import React from 'react';
import { Link } from 'react-router';



const PhotoListItem = ({ photo }) => (
  <div style={{
    width:`${photo.width*200/photo.height}`,
    flexGrow:`${photo.width*200/photo.height}`}}>
    <i style={{paddingBottom:`${photo.height/photo.width*100}%`}}></i>
    <Link to={`/photos/${photo.id}`}>
      <img src={photo.photo_url} alt={photo.title} />
    </Link>
  </div>
);

export default PhotoListItem;
