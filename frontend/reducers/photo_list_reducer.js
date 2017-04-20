import { RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotoListReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);
    default:
      return state;
  }
};

export default PhotoListReducer;
