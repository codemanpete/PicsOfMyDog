import { RECEIVE_SOME_PETS, RECEIVE_NEW_PET } from '../actions/pet_actions';
import merge from 'lodash/merge';

const PetReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_NEW_PET:
      return merge({}, state,
        { [action.pet.id]: action.pet }
      );
    case RECEIVE_SOME_PETS:
      return merge({}, action.pets);
    default:
      return state;
  }
};

export default PetReducer;
