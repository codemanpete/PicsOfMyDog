import { RECEIVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const _emptyPhoto = {
  photo_url: "",
  owner_id: 0,
  title: "",
  taggings: []
};

const PhotoReducer = (state = _emptyPhoto, action) => {
  switch(action.type){
    case RECEIVE_PHOTO:
      return action.photo;
    default:
      return state;
  }
};

export default PhotoReducer;
