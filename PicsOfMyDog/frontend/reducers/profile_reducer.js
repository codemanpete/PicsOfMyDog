import { RECEIVE_USER } from '../actions/profile_actions';
import merge from 'lodash/merge';

const _nullUser = {
  viewUser: {
    username: "",
    name: "",
    biography: "",
    cover_photo_url: "",
    profile_pic_url: ""
  }
};

const ProfileReducer = (state = _nullUser, action) => {
  switch(action.type){
    case RECEIVE_USER:
      return { viewUser: action.user };
    default:
      return state;
  }
};

export default ProfileReducer;
