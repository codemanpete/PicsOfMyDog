import * as APIUtil from '../util/pet_api_util';

export const RECEIVE_SOME_PETS = "RECEIVE_SOME_PETS";
export const RECEIVE_NEW_PET = "RECEIVE_PET";

export const receiveSomePets = (pets) => ({
  type: RECEIVE_SOME_PETS,
  pets
});

export const receiveNewPet = (pet) => ({
  type: RECEIVE_NEW_PET,
  pet
});

export const createPet = pet => dispatch => (
  APIUtil.createPet(pet).then(
    (newPet) => dispatch(receiveNewPet(newPet)
  ))
);

export const requestUserPets = (userId) => (dispatch) => (
  APIUtil.fetchUserPets(userId).then(
    pets => dispatch(receiveSomePets(pets))
  )
);
