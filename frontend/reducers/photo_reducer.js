import { RECEIVE_PHOTO, RECEIVE_OWNER } from '../actions/photo_actions';
import merge from 'lodash/merge';

const _emptyPhoto = {
  photo_url: "",
  owner_id: 0,
  title: "",
  taggings: [],
  owner: {}
};

const PhotoReducer = (state = _emptyPhoto, action) => {
  switch(action.type){
    case RECEIVE_PHOTO:
      let nextState = merge({}, state, action.photo);
      nextState.taggings = action.photo.taggings;
      nextState.comments = action.photo.comments;
      // merge does not interact with arrays as expected
      return nextState;
    // case RECEIVE_OWNER:
    //   return merge({}, state, {owner: action.owner});
    default:
      return state;
  }
};

export default PhotoReducer;
