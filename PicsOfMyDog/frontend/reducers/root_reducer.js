import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import PhotoReducer from './photo_reducer';
import PhotoListReducer from './photo_list_reducer';
import PetReducer from './pet_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
  photo: PhotoReducer,
  photoList: PhotoListReducer,
  pets: PetReducer
});

export default rootReducer;
